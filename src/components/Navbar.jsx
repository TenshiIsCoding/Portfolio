import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles.js';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} py-1 w-full flex items-center fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
          to='/'
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"><span className="sm:block hidden">|&nbsp;&nbsp; <span className='text-[#ffb703]'>Creative Developer</span></span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle? close : menu}
              alt="menu"
              className="w-[28px] h-[28px]
              object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-l`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;