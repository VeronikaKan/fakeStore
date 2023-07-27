import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className = "header">
            < div className = "container">
                <div className="header__wrapper ">
                    <NavLink to="/" className="header__link">Home</NavLink>
                    <NavLink to="/about" className="header__link">About</NavLink>
                    <NavLink to="/contacts" className="header__link">Contacts</NavLink>
                    <NavLink to="/content" className="header__link">Content</NavLink>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header