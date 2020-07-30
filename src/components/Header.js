import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Context from '../context/Context';
import MainNav from './MainNav';
import RightNav from './RightNav'

const Header = () => {
  const [open, setOpen] = useState(false)
  console.log(open)
  return (
    <Context.Provider value={{ open, setOpen }}>
      <header>
        <a href="#" className="logo"><span className="text_primary">PRAMA</span>KIT</a>
        <nav className="Main__nav">
          <MainNav />
        </nav>
        <div>
            <div className={`bugger ${open ? 'open' : 'close'}`} onClick={() => setOpen(!open) }><FaBars /></div>
            <RightNav />
          </div>
      </header>
    </Context.Provider>
  )
}

export default Header;
