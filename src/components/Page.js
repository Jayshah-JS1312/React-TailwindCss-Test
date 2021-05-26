import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as GoIcons from "react-icons/go";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import { SidebarData1 } from "./SidebarData-1";
import { SidebarData2 } from "./SidebarData-2";
import { SidebarData3 } from "./SidebarData-3";
import { IconContext } from "react-icons";
import img1 from "../Images/img-1.JPG";
import img2 from "../Images/img-2.JPG";
import img3 from "../Images/img-3.JPG";
import img4 from "../Images/img-4.JPG";
import img5 from "../Images/img-5.JPG";
import img6 from "../Images/img-6.JPG";
import img7 from "../Images/img-7.JPG";
import img8 from "../Images/img-8.JPG";
import img10 from "../Images/img-10.JPG";
import img11 from "../Images/img-11.JPG";
import img12 from "../Images/img-12.JPG";
import logo from "../Images/logo.svg";

function Page() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="bg-white h-20 flex justify-start items-center">
          <Link
            to="#"
            className="bg-none ml-14 mr-10 py-2 px-2 rounded-full hover:bg-gray-300 hover:text-black"
          >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src={logo} alt="Logo" className="cursor-pointer" />
          <p className="ml-14 cursor-pointer text-bold hover:underline">
            <strong>Products</strong>
          </p>
          <p className="text-bold mx-6 cursor-pointer hover:underline">
            <strong>Rooms</strong>
          </p>
          <p className="text-bold cursor-pointer hover:underline">
            <strong>Deals</strong>
          </p>

          <div className="flex flex-row ml-10 bg-gray-100 w-search-bar rounded-full hover:bg-gray-200">
            <div className="mt-4 ml-4 text-2xl">
              <AiIcons.AiOutlineSearch />
            </div>

            <input
              className="w-11/12 py-4 px-6 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none"
              id="search"
              type="text"
              placeholder="What are you looking for?"
            />
            <div className="mt-4 mr-4 w-10 text-2xl">
              <HiIcons.HiOutlineCamera />
            </div>
          </div>

          <div className="font-bold ml-8 rounded-full w-32 border-2 text-black py-2 flex flex-row items-center cursor-pointer hover:border-gray-600 hover:text-black">
            <div className="ml-5 font-bold">
              <GoIcons.GoLocation />
            </div>
            <p className="ml-2 text-sm">Tempe</p>
          </div>

          <div className="font-bold ml-6 mr-4 rounded-full w-8 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <div className="ml-2">
              <FiIcons.FiTruck />
            </div>
          </div>

          <div className="font-bold mr-4 rounded-full w-8 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <div className="ml-2">
              <MdIcons.MdPersonOutline />
            </div>
          </div>

          <div className="font-bold mr-4 rounded-full w-8 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <div className="ml-2">
              <MdIcons.MdFavoriteBorder />
            </div>
          </div>

          <div className="font-bold mr-4 rounded-full w-8 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <div className="ml-2">
              <AiIcons.AiOutlineShopping />
            </div>
          </div>
        </div>

        <div className="ml-32 w-line divide-y-2">
          <div className="flex flex-row mt-7 text-xs">
            <p className="mr-2 cursor-pointer hover:underline">Series</p>
            <div className="mt-series">
              <IoIcons.IoIosArrowForward />
            </div>
            <p className="ml-2 mb-6">BILLY Series</p>
          </div>
          <div></div>
        </div>

        <div className="ml-32 mt-24 mb-10">
          <p className="font-bold text-3xl">BILLY series</p>
          <p className="mt-10 w-3/5">
            With its seamless customization options that make it the perfect
            addition to rooms of any size, it’s no wonder IKEA’s BILLY bookcase
            series has become a beloved classic around the world. BILLY
            bookcases are built with a stackable design that allows you to
            attach new units whenever you need additional storage, just decide
            on what height suits your space best. Every model in the BILLY
            series also features adjustable shelves so you can fit anything from
            books to trophies, and everything in between.
          </p>
        </div>

        <div className="flex flex-row">
          <div className="font-bold ml-32 rounded-full w-24 border-2 text-black py-2 flex flex-row items-center cursor-pointer hover:border-gray-400 hover:text-black">
            <p className="mx-auto text-xs font-bold">Compare</p>
          </div>
          <div className="font-bold ml-4 rounded-full w-24 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <p className="ml-6 mr-2 text-xs font-bold">Sort</p>
            <div className="mr-4">
              <IoIcons.IoIosArrowDown />
            </div>
          </div>
          <div className="font-bold ml-4 rounded-full w-24 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <p className="mx-auto text-xs font-bold">Size</p>
          </div>
          <div className="font-bold ml-4 rounded-full w-24 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <p className="mx-auto text-xs font-bold">Color</p>
          </div>
          <div className="font-bold ml-4 rounded-full w-24 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <p className="mx-auto text-xs font-bold">Category</p>
          </div>
          <div className="font-bold ml-4 rounded-full w-24 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <p className="mx-auto text-xs font-bold">Material</p>
          </div>
          <div className="font-bold ml-4 rounded-full w-24 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <p className="mx-auto text-xs font-bold">Price</p>
          </div>
          <div className="font-bold ml-6 rounded-full w-32 text-black py-2 flex flex-row items-center cursor-pointer hover:bg-gray-300 hover:text-black">
            <p className="ml-6 mr-2 text-xs font-bold">All filters</p>
            <div className="mr-4">
              <IoIcons.IoIosArrowDown />
            </div>
          </div>
          <div className="flex flex-row">
            <p className="text-xs text-gray-600 mt-2 ml-64">48 items</p>
            <p className="underline cursor-pointer font-bold text-black text-xs mt-2 ml-4">
              Product
            </p>
            <p className="cursor-pointer font-bold text-gray-600 text-xs mt-2 ml-4 hover:underline hover:text-black">
              Room
            </p>
          </div>
        </div>

        <div className="ml-32 mt-10 w-line divide-y-2">
          <p></p>
          <div className="p-10 grid grid-cols-4 gap-16">
            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img1} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="cursor-pointer hover:underline font-bold text-xl mb-2">
                  BILLY
                </div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$49.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img2} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="cursor-pointer hover:underline font-bold text-xl mb-2">
                  BILLY
                </div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$39.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img3} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="font-bold text-xl mb-2">BILLY</div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$29.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img4} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="cursor-pointer hover:underline font-bold text-xl mb-2 ">
                  BILLY
                </div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$74.00</p>
              </div>
            </div>
          </div>

          <div className="p-10 grid grid-cols-4 gap-16">
            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img5} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="cursor-pointer hover:underline font-bold text-xl mb-2">
                  BILLY
                </div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$179.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img6} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="cursor-pointer hover:underline font-bold text-xl mb-2">
                  BILLY
                </div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$291.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img7} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="font-bold text-xl mb-2">BILLY</div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$59.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img8} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="font-bold text-xl mb-2 ">BILLY</div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$19.00</p>
              </div>
            </div>
          </div>

          <div className="p-10 grid grid-cols-4 gap-16">
            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img8} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="cursor-pointer hover:underline font-bold text-xl mb-2">
                  BILLY
                </div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$87.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img10} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="cursor-pointer hover:underline font-bold text-xl mb-2">
                  BILLY
                </div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$149.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img11} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="font-bold text-xl mb-2">BILLY</div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$25.00</p>
              </div>
            </div>

            <div className="rounded overflow-hidden">
              <img className="w-full h-96" src={img12} alt="" />
              <div className="px-6 py-4 bg-customwhite">
                <div className="font-bold text-xl mb-2 ">BILLY</div>
                <p className="text-gray-700 text-base">
                  Bookcase, 31 1/2x11x79 1/2 "
                </p>
                <br />
                <p>$149.00</p>
              </div>
            </div>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul
            className="nav-menu-items overflow-y-auto overflow-x-hidden"
            onClick={showSidebar}
          >
            <div className="flex flex-row ">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars ml-16 w-4 h-4">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <img
                src={logo}
                alt="Logo"
                className="mr-44 mt-5 cursor-pointer"
              />
            </div>

            <div className="mt-10 mb-6">
              {SidebarData2.map((val, key) => {
                return (
                  <li
                    key={key}
                    className="text-4xl mb-4 font-bold flex flex-row ml-36 items-center justify-between cursor-pointer w-3/4 text-center hover:underline"
                    onClick={() => {
                      window.location.pathname = val.link;
                    }}
                  >
                    <span className="my-2 text-left flex-grow">
                      {val.title}
                    </span>
                  </li>
                );
              })}
            </div>
            <div className="mb-10">
              {SidebarData1.map((val, key) => {
                return (
                  <li
                    key={key}
                    className="font-bold flex flex-row ml-36 items-center justify-between cursor-pointer w-3/4 text-center hover:underline"
                    onClick={() => {
                      window.location.pathname = val.link;
                    }}
                  >
                    <span className="my-2 text-left flex-grow">
                      {val.title}
                    </span>
                  </li>
                );
              })}
            </div>

            {SidebarData3.map((val, key) => {
              return (
                <li
                  key={key}
                  className="flex flex-row ml-36 items-center justify-between cursor-pointer w-3/4 text-center hover:underline"
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <span className="my-2 text-left flex-grow">{val.title}</span>
                </li>
              );
            })}
            <div className="ml-36 rounded-full w-44 border-2 text-gray-600 py-3 mt-12 mb-6 flex flex-row items-center cursor-pointer hover:border-black hover:text-black">
              <svg
                className="ml-2 svg-icon hnf-svg-icon hnf-btn-change-country__globe w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.747 18.177C12.948 19.774 12.215 20 12 20c-.215 0-.948-.226-1.747-1.823A10.786 10.786 0 019.47 16h5.06a10.83 10.83 0 01-.783 2.177zM14.889 14H9.11A17.735 17.735 0 019 12c0-.695.04-1.364.111-2h5.777a18.04 18.04 0 01.001 4zm1.695 2c-.266 1.217-.65 2.307-1.121 3.214A8.035 8.035 0 0018.93 16h-2.346zm3.164-2H16.9a19.826 19.826 0 000-4h2.848A8 8 0 0120 12a8 8 0 01-.252 2zm-.818-6a8.035 8.035 0 00-3.467-3.214c.472.907.855 1.997 1.121 3.214h2.346zm-4.4 0a10.79 10.79 0 00-.783-2.177C12.948 4.226 12.215 4 12 4c-.215 0-.948.226-1.747 1.823A10.787 10.787 0 009.47 8h5.06zM7.416 8c.266-1.217.65-2.307 1.121-3.214A8.035 8.035 0 005.07 8h2.346zm-3.164 2A8.015 8.015 0 004 12c0 .69.088 1.36.252 2H7.1a19.829 19.829 0 010-4H4.252zm3.164 6H5.07a8.035 8.035 0 003.467 3.214c-.472-.907-.855-1.997-1.121-3.214zM22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z"
                ></path>
              </svg>
              <p className="ml-2 text-sm">Change country</p>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Page;
