import React from 'react';

const JobCard = () => {
  return (
    <div className=" bg-[#F2F6FD] border rounded-md hover:shadow-[0_10px_20px_-5px_rgba(10,42,105,.06)] p-4 hover:bg-transparent duration-300 transition  hover:border-[#b4c0e0]">
      <div className="px-2 pt-10 pb-5">
        <h4 className="font-semibold text-xl">UiUX Designer</h4>
        <div className="flex gap-2 mt-1">
          <div className="time">
            <p className="text-[#a0abb8] font-light text-sm">Full time</p>
          </div>
          <div className="date">
            <p className="text-[#a0abb8] font-light text-sm">
              Posted 1 year ago
            </p>
          </div>
        </div>
        <div className="job-discription my-8">
          <p className="text-[15px]  text-[#4f5e64]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            architecto eveniet, dolor quo repellendus pariatur
          </p>
        </div>
        <div className="catagory my-7">
          <div className="grid grid-cols-4 gap-3">
            <a
              href="#"
              className="py-1  bg-[#dae4fa] text-center rounded-sm text-[13px]"
            >
              app
            </a>
            <a
              href="#"
              className="py-1 bg-[#dae4fa] text-center rounded-sm text-[13px]"
            >
              Figma
            </a>
            <a
              href="#"
              className="py-1 bg-[#dae4fa] text-center rounded-sm text-[13px]"
            >
              XD
            </a>
            <a
              href="#"
              className="py-1 bg-[#dae4fa] text-center rounded-sm text-[13px]"
            >
              PSD
            </a>
          </div>
        </div>
        <div className="apply-button text-end mt-16">
          <a
            href="#"
            className="border py-2 px-5 text-[15px] bg-[#021329] text-white rounded hover:bg-transparent hover:text-black duration-300 transition hover:border-[#a0abb8]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
