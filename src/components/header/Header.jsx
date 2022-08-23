import s from "./Header.module.scss";

import SocialMedia from "./../ui/SocialMedia";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const MenuBurger = ({ classNameHandler }) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton>
            <svg
              className={`${s.ham} ${s.ham6} ${isOpen ? s.active : ""}`}
              viewBox="0 0 90 90"
              width="25"
            >
              <path
                className={`${s.line} ${s.top}`}
                d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
              />
              <path
                className={`${s.line} ${s.middle}`}
                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
              />
              <path
                className={`${s.line} ${s.bottom}`}
                d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
              />
            </svg>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <div className={s.links}>
                <NavLink to="/" end className={classNameHandler}>
                  Home
                </NavLink>
                <NavLink to="/about" className={classNameHandler}>
                  About
                </NavLink>
                <NavLink to="/posts" end className={classNameHandler}>
                  Articles
                </NavLink>
                <NavLink to="/contact" className={classNameHandler}>
                  Contact us
                </NavLink>
              </div>
            </MenuItem>
            <MenuItem>
              <div>
                <SocialMedia />
              </div>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

const Header = () => {
  const classNameHandler = ({ isActive }) =>
    isActive ? "link-active" : undefined;

  return (
    <header className={`${s.header}`}>
      <div className={`${s.container} container`}>
        <h1>
          <NavLink to="/">Runo</NavLink>
        </h1>
        <div>
          <ul className={s.links}>
            <NavLink to="/" end className={classNameHandler}>
              Home
            </NavLink>
            <NavLink to="/about" className={classNameHandler}>
              About
            </NavLink>
            <NavLink to="/posts" end className={classNameHandler}>
              Articles
            </NavLink>
            <NavLink to="/contact" className={classNameHandler}>
              Contact us
            </NavLink>
          </ul>
          <ul>
            <SocialMedia />
          </ul>

          <IoSearchOutline color="#E5E5E5" />
          <div className={s["menu_burger"]}>
            <MenuBurger classNameHandler={classNameHandler} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
