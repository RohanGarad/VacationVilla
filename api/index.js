const express = require("express");
const cors = require("cors");
require("dotenv").config(); //this pkg require to load links from .env file
const mongoose = require("mongoose");
const User = require("./models/User");
const Place = require("./models/Place");
const Booking = require('./models/Booking');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");
// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

const cookieParser = require("cookie-parser");

const bcryptSalt = bcrypt.genSaltSync(10); // Used for encrypt the password
const jwtsecret = "fhgefgefgiehfoirhoeiho";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173", //for communicate with api
    // origin: "http://127.0.0.1:5173", //for communicate with api
  })
);

// console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);
// pass-ofHUOpZMBzVCuaiC

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtsecret, {}, async (err, userData) => {
      if(err) throw err;
      resolve(userData);
    });
  });
}

app.get("/test", (req, res) => {
  res.json("All Okay ROHAN !!!");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email: email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtsecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      ); // jwt.sign({payload, secretorPrivateKey, options, callback})
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("Not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtsecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

// console.log(__dirname);
app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";

  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });
  res.json(newName);
});

const photoMiddleware = multer({ dest: "uploads/" });
app.post("/upload", photoMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads", ""));
  }
  res.json(uploadedFiles);
});

app.post("/places", (req, res) => {
  const { token } = req.cookies;
  const {title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price, } = req.body;
  jwt.verify(token, jwtsecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.create({
      owner: userData.id, 
      title, address, photos: addedPhotos, description, perks, 
      extraInfo, checkIn, checkOut, maxGuests, price,
    });
    res.json(placeDoc);
  });
});

app.get("/user-places", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtsecret, {}, async (err, userData) => {
    const {id} = userData;
    res.json(await Place.find({owner: id}));
  })

})

app.get('/places/:id', async (req, res) => {
  // res.json(req.params)
  const {id} = req.params;
  res.json(await Place.findById(id));
});

// app.put('/places', async (req, res) => {
//   const { token } = req.cookies;
//   const {id, title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price,} = req.body;
//   jwt.verify(token, jwtsecret, {}, async (err, userData) => {
//     if (err) throw err;
//     const placeDoc = await Place.findById(id);
    
//     if(userData.id === placeDoc.owner.toString()) {
//       placeDoc.set({
//         title, address, photos:addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price,
//       });
//       await placeDoc.save();
//       res.json('ok')
//     }
//   })
// })

app.put('/places', async (req, res) => {
  const { token } = req.cookies;
  const { id, title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price } = req.body;
  jwt.verify(token, jwtsecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.findById(id);
    
    if (userData.id === placeDoc.owner.toString()) {
      placeDoc.set({
        title, address, photos: addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price,
      });
      await placeDoc.save();
      res.json('ok');
    }
  });
});

app.post('/bookings', async (req, res) => {
  const userData = await getUserDataFromReq(req);
  const {
    place, checkIn, checkOut, numOfGuests, name, phone, price, user,
  } = req.body;
  Booking.create({
    place, checkIn, checkOut, numOfGuests, name, phone, price, user,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  });
});

app.get('/bookings', async (req, res) => {
  const userData = await getUserDataFromReq(req);
  res.json(await Booking.find({user: userData.id}).populate('place'));
})

app.get('/places', async (req, res) => {
  res.json(await Place.find());
});




app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




app.listen(4000);