'use client';

import React from 'react';
import Link from 'next/link';
import { SearchIcon, CloseIcon } from '@/assets/icons/icons';

const OfcanvasMenu = ({ handelToggle, toggleValue }) => {
  return (
    <div
      className={`h-screen duration-300 opacity-0 pointer-events-none transition-all absolute top-0 right-0 w-full z-10 bg-black py-5 px-5 ${
        toggleValue && 'opacity-100 pointer-events-auto'
      }`}
    >
      <div className="flex justify-end">
        <div onClick={handelToggle} className=" cursor-pointer">
          <CloseIcon></CloseIcon>
        </div>
      </div>
      <div className="my-8">
        <form
          action=""
          className="border-[#aaa]/50 border md:w-1/2  text-sm rounded px-2 flex items-center"
        >
          <SearchIcon></SearchIcon>
          <input
            type="text"
            placeholder="Find Job..."
            className=" outline-none dark:bg-transparent  py-3 px-2 focus:outline font-normal "
          />
        </form>
      </div>
      <div className="nav-item ">
        <ul className="flex items-start flex-col  gap-5 ">
          <li>
            <Link
              href=""
              className="text-[#f6f6f6]/70 dark:hover:text-white duration-200 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-[#f6f6f6]/70 dark:hover:text-white duration-200 transition"
            >
              Find Job
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-[#f6f6f6]/70 dark:hover:text-white duration-200 transition"
            >
              Recruiters
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-[#f6f6f6]/70 dark:hover:text-white duration-200 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-[#f6f6f6]/70 dark:hover:text-white duration-200 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-[#f6f6f6]/70 dark:hover:text-white duration-200 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OfcanvasMenu;
