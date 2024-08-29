import Image from 'next/image';
import React from 'react';
import banner1 from '@/assets/images/banner1.png';
const HBanner = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-2 pt-32">
        <div className="pr-40">
          <h1 className="text-5xl">
            The{' '}
            <span className="font-bold tracking-normal  text-blue-700">
              Easiest Way <br />
            </span>{' '}
            to Get Your New Job
          </h1>
          <p className="text-lg mt-5 pr-20 dark:text-white/50 text-[#4f5e64]">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
        </div>
        <div className="m-auto text-center"></div>
      </div>
    </div>
  );
};

export default HBanner;
