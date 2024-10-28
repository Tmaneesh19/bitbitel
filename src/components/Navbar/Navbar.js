import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home")
  const { getTotalCartAmount } = useContext(StoreContext)
  const [isFixed, setIsFixed] = useState(false)

  const move = (section) => {
    const element = document.querySelector(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>
      <ul>
        <Link className='hi' to='/'><li onClick={() => { setMenu("home"); move('#home'); }} className={menu === "home" ? "active" : ""}>home</li></Link>
        <li onClick={() => { setMenu("menu"); move('#explore-menu'); }} className={menu === "menu" ? "active" : ""}>menu</li>
        <li onClick={() => { setMenu("mobile-app"); move('#app-download'); }} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li onClick={() => { setMenu("contact-us"); move('#footer'); }} className={menu === "contact-us" ? "active" : ""}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img className='search-icon' src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
