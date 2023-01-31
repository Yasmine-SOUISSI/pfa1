import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <div className='tm-top-bar' id='tm-top-bar'>
      <div className='container'>
        <div className='row'>
          <nav className='navbar navbar-expand-lg narbar-light'>
            <a className='navbar-brand mr-auto' href='#'>
              <img src='img/logo.png' alt='Site logo' />
              Level
            </a>
            <button
              type='button'
              id='nav-toggle'
              className='navbar-toggler collapsed'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              id='mainNav'
              className='collapse navbar-collapse tm-bg-white d-flex flex-end'
            >
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Home <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/Vols'>
                    Vols
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/Hotels'>
                    Hotels
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/Cruiser'>
                    Crusier
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#tm-section-6'>
                    Contact Us
                  </a>
                </li>
                {!isAuth && (
                  <li className='nav-item'>
                    <a className='nav-link' href='/Register'>
                      Register
                    </a>
                  </li>
                )}
                {isAuth ? (
                  <>
                    <li className='nav-item'>
                      <a className='nav-link' href='/Profile'>
                        Profile
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        href='/'
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <li className='nav-item'>
                    <a className='nav-link' href='/Login'>
                      Login
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
