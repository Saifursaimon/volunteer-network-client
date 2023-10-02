import React, { useContext } from 'react';
import logo from '../../assets/logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Header = () => {

    const {user,LogOut} = useContext(AuthContext)

    const handleLogOut = (event) => {
      event.preventDefault()

      LogOut()
      .then(()=>{})
      .catch(error => console.log(error))

    } 

    const menuItems = 
    <>
        <li><Link to='/' className='font-semibold' >Home</Link></li>
        <li><Link to='/' className='font-semibold' >Donation</Link></li>
        <li><Link to='/events' className='font-semibold' >Events</Link></li>
        <li><Link to='/' className='font-semibold' >Blog</Link></li>
        <Link to='/register' className='btn btn-primary lg:hidden mt-4'>Register</Link>
        {
          user?.email ? <Link onClick={handleLogOut} to='/' className='btn btn-ghost lg:hidden mt-4'>Log out</Link> : <Link to='/login' className='btn btn-ghost lg:hidden mt-4'>Log in</Link>
        }
    </>;

    const menuButtons = 
    <>
        <Link to='/register' className='btn btn-primary hidden lg:flex'>Register</Link>
        <>
        {
          user?.email ? <Link onClick={handleLogOut} to='/' className='btn btn-ghost hidden lg:flex'>Log out</Link> : <Link to='/login' className='btn btn-ghost hidden lg:flex'>Log in</Link>
        }
        </>
    </>

    return (
        <div className="navbar bg-base-100 mt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        menuItems
       }
      </ul>
    </div>
    <div>
        <img  className=' w-40' src={logo} alt=''/>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        menuItems
      }
    </ul>
  </div>
  <div className="navbar-end">
    {menuButtons}
  </div>
</div>
    );
};

export default Header;