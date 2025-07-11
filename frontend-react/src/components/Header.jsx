import React from 'react'
import Button from './Button'
import { Link, Links } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start bg-dark'>
        <Link className='navbar-brand h1 text-light' to="/">Stock Prediction</Link>

        <div className='d-flex justify-content-end align-items-center gap-3'> 
         <Button Text='login' class='btn btn-outline-info' url="login"/>

         <Button Text='Register' class='btn btn-outline-danger' url="register"/>

        </div>
      </nav>
    </>
  )
}

export default Header;