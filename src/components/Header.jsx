import React from "react";
import { NavLink } from "react-router-dom";
import Applelogo from "/assets/Applelogo.png";
import Storelogo from "/assets/Storelogo.png";
import SearchBar from "/assets/SearchBar.png";

const Header = () => {
  return (
    <>
      <section className="fixed bg-black w-full z-50">
        <nav className="">
          <ul className="grid grid-cols-8 gap-3 py-5 px-40 text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex justify-center text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                <img className="w-[20px]" src={Applelogo} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  `block text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/iphone"
                className={({ isActive }) =>
                  `block text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                Iphone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app-store"
                className={({ isActive }) =>
                  `block text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                App Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tv"
                className={({ isActive }) =>
                  `block text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                TV
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accessories"
                className={({ isActive }) =>
                  `block text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `block text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                Support
              </NavLink>
            </li>
            {/* TODO: <li>
              <NavLink
                to="/#"
                className={({ isActive }) =>
                  `block text-center duration-200 items-center  ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                <img src={SearchBar} alt="" />
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/#"
                className={({ isActive }) =>
                  `flex justify-center text-center duration-200 ${
                    isActive ? "text-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-200 lg:p-0`
                }
              >
                <img className="w-[20px]" src={Storelogo} alt="" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
