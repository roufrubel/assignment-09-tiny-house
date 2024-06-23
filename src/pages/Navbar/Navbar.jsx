import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import auth from "../../firebase/firebase.config";
import './Navbar.css';
import { FaHome } from "react-icons/fa";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const currentUser = auth.currentUser;
    console.log(currentUser)
  
    const handleSignOut = () => {
      logOut()
      .then()
      .catch()
    }  
  
      const navLinks = <>
      <li><NavLink to="/">Home</NavLink></li>           
      <li className="mr-2 ml-2"><NavLink to="/update">Update Profile</NavLink></li>      
      <li><NavLink to="/review">Reviews</NavLink></li>      
      </>
      return (
          <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {
              navLinks
          }
        </ul>
      </div>
      <a className="btn btn-ghost text-xl font-extrabold flex items-center"><span className="mr-1 text-2xl"><FaHome/></span>TINY HOUSE</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {
          navLinks
        }
      </ul>
    </div>
    <div className="navbar-end">
    
      {
         user ?
        <>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar image-container">
          <div className="w-10 rounded-full ">
            <img   alt="Pic" src={user?.photoURL} />
            <div className="tooltip">{user?.displayName}</div>
          </div>
        </div>
        <button onClick={handleSignOut} className="btn">Sign Out</button>
        </>
        :
        <Link to='/login'><button className="btn">Login</button></Link>
      }
    </div>
  </div>
      );
  };
  
  export default Navbar;