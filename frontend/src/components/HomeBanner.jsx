import Image from 'next/image';
import React from 'react';
import banner1 from '@/assets/images/banner1.png';
import SearchFilter from './SearchFilterHome';
import Img1 from '@/assets/images/banner2.png';

import svgShape from '@/assets/images/icon-bottom-banner.png';
const HBanner = () => {
  return (
    <div className="container h-screen">
      <div className="grid grid-cols-2 gap-2 pt-32">
        <div>
          <div className="pr-30">
            <h1 className="text-6xl font-bold mb-6">
              The{' '}
              <span className="font-semibold tracking-normal text-blue-500 ">
                Easiest Way <br />
              </span>{' '}
              to Get Your New Job
            </h1>
            <p className="text-lg my-8 pr-20 dark:text-white/50 text-[#4f5e64]">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
          </div>
          {/* ===  Search Filter  ==== */}
          <SearchFilter></SearchFilter>
          {/* =====   Search Filter === */}
          <div className="my-8 flex  gap-2">
            <h5 className="font-medium">Popular Searches :</h5>
            <div className=" flex gap-2">
              <a
                href="#"
                className=" underline-offset-2 underline  cursor-pointer"
              >
                Designer
              </a>
              <a
                href="#"
                className=" underline-offset-2 underline  cursor-pointer"
              >
                Web,{' '}
              </a>
              <a
                href="#"
                className=" underline-offset-2 underline  cursor-pointer"
              >
                IOS,
              </a>
              <a
                href="#"
                className=" underline-offset-2 underline  cursor-pointer"
              >
                Engineer,
              </a>
            </div>
          </div>
        </div>
        <div className="m-auto text-center relative">
          <Image src={banner1} width={'100%'} height={'100%'}></Image>
          <Image
            src={Img1}
            className=" absolute z-10 -bottom-28 -right-40"
            width={'100%'}
            height={'100%'}
          ></Image>
          <Image
            src={svgShape}
            width={'100%'}
            height={'100%'}
            className=" absolute z-[2] -bottom-20"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HBanner;
