import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start bg-dark'>
        <a className='navbar-brand h1 text-light' href="#">Stock Prediction</a>

        <div className='d-flex justify-content-end align-items-center gap-3'> 
         <Button Text='login' class='btn btn-outline-info' />

         <Button Text='Register' class='btn btn-outline-danger' />

        </div>
      </nav>
    </>
  )
}

export default Header;