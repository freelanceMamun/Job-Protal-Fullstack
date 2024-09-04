'use client';

import React from 'react';

import Image from 'next/image';
const SearchFilter = () => {
  return (
    <div className="mt-5">
      <div className="">
        <form
          action=""
          className="flex gap-4 bg-white px-2 py-3 rounded-md  items-center justify-between border-[#90a5e147] shadow-[0px_10px_30px_#90a5e147] "
        >
          <div className="flex">
            <select
              name=""
              id=""
              className=" px-4 focus:outline-none cursor-pointer bg-transparent"
            >
              <option value="" selected>
                Industry
              </option>
              <option value="0">Software</option>
              <option value="0">Finance</option>
              <option value="0">Recruting</option>
              <option value="0">Managment</option>
              <option value="0">Advertising</option>
            </select>
          </div>
          <div className="">
            <select
              name=""
              id=""
              className=" px-4 focus:outline-none cursor-pointer bg-transparent"
            >
              <option value="0" className="" selected>
                Location
              </option>
              <option value="0">Finance</option>
              <option value="0">Recruting</option>
              <option value="0">Managment</option>
              <option value="0">Advertising</option>
            </select>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Your keyword..."
              className=" focus:outline-none border-none bg-transparent"
            />
          </div>
          <div>
            <button className="bg-[#021329] flex gap-2 hover:-translate-y-1 duration-300 transition text-white items-center py-3 rounded-md px-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;
