import React from 'react';
import Icon from '@/assets/images/customer.svg';
import Image from 'next/image';
const Catagorycard = () => {
  return (
    <div className="border hover:border-[#b4c0e0] duration-500 transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgba(10,42,105,.06)]  cursor-pointer flex items-center rounded-xl border-[#0612241a] py-6 px-5">
      <div className="icon">
        <Image src={Icon} alt="customer" />
      </div>
      <div className="ml-3">
        <h4 className="text-[#05264e] font-semibold mb-[2px]">
          Marketing & Sale
        </h4>
        <p className=" text-[13px] text-[#4f5e64]"> 1526 Jobs Available</p>
      </div>
    </div>
  );
};

export default Catagorycard;
