import React from 'react';
//import Image from 'next/image';
// import Logo from '@/assets/images/jobhub-logo.svg';
import { BarIcon } from '@/assets/icons/icons';
import OfcanvasMenu from '@/components/OfcanvasMenu';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="py-5 container relative">
      <div className="flex items-center justify-between">
        <div className="Job-brand-item">
          <Link href="/">
            <span className="text-2xl md:text-2xl xl:text-3xl">JobBox</span>
          </Link>
        </div>
        <div className="nav-item hidden lg:block">
          <ul className="flex items-center lg:gap-6 xl:gap-8 ">
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
        <div className="user-auth hidden lg:block">
          <div className="flex items-center gap-3 xl:gap-5">
            <Link
              href=""
              className="xl:px-7 rounded-md md:py-2 md:px-4 xl:py-3 text-[#f6f6f6]/90 dark:hover:text-white duration-200 transition"
            >
              Login
            </Link>
            <Link
              href=""
              className="xl:px-8 bg-[#021329]   md:py-2 md:px-4 rounded-md xl:py-3 text-[#f6f6f6]/90 dark:hover:text-white duration-200 transition"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="menu-toogle  gap-4 lg:hidden flex items-center gap">
          <Link
            href="/"
            className="text-[20px] flex text-[#f6f6f6]/90 dark:hover:text-white duration-200 transition"
          >
            Join Us
          </Link>
          <BarIcon></BarIcon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
