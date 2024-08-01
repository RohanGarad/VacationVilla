import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';

function Layout() {
  return (
    <div className='py-4 px-8'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;
