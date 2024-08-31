'use client';

import React from 'react';

import Image from 'next/image';
const SearchFilter = () => {
  return (
    <div className="mt-5">
      <div className="">
        <form
          action=""
          className="flex gap-4 bg-white px-2 py-5 rounded   border-[#90a5e147] shadow-[0px_10px_30px_#90a5e147] "
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
              <option value="0" selected>
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
            <button className="bg-l">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;
