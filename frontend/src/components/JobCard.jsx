import React from 'react';

const JobCard = () => {
  return (
    <div className=" bg-[#F2F6FD] border p-4">
      <div className="job-title">
        <h4 className="font-semibold">UiUX Designer</h4>
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
        <div className="job-discription my-3">
          <p className="text-[15px]  text-[#4f5e64]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            architecto eveniet, dolor quo repellendus pariatur
          </p>
        </div>
        <div className="catagory">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
