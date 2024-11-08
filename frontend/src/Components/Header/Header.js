import React, { Fragment } from 'react';
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../Actions/userAction';

const Header = () => {
  const { isAuthenticated,user } = useSelector(state => state.user);
  const dispath = useDispatch();
  const navigate= useNavigate();
  const handleLogout = () =>{
    dispath(logout());
  }
  const handleDashboard = () => {
    navigate("/admin/all-events");
  }
  const handleProfile = () => {
    navigate("/user/events");
  }
  return (
    <Fragment>
        <div className="header">
            <Link to="/">Events</Link>
            {isAuthenticated ? 
            <div className="box1">
              {user.role==="admin" && <div className='admin' onClick={handleDashboard}>My Dashboard</div>}
              <div className="profile" onClick={handleProfile}>My Profile</div>
              <div className='logout' onClick={handleLogout}>Logout</div> 
            </div>
            : 
            <Link to="/login">Login</Link>}
        </div>
    </Fragment>
  )
}

export default Header