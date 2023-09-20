import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({basketProducts}) => {
  return (
    <>
      <div className = "header">
            < div className = "container">
                <div className="header__wrapper ">
                    <NavLink to="/" className="header__link">Home</NavLink>
                    <NavLink to="/about" className="header__link">About</NavLink>
                    <NavLink to="/basket" className="header__link">Basket {basketProducts.length || ''}</NavLink>
                    <NavLink to="/content" className="header__link">Content</NavLink>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header