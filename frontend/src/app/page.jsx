import HBanner from '@/components/HomeBanner';
import Image from 'next/image';

import banenrImg from '@/assets/images/bg-banner.59ddabf7.svg';
import Catagorycard from '@/components/catagorycard';
import BanerSvg from '@/assets/images/bg-left-hiring.cc0e2e85.svg';
import BanerSvg2 from '@/assets/images/bg-right-hiring.0dfda9a2.svg';

import JobCard from '@/components/JobCard';
import Link from 'next/link';

export default function Main() {
  return (
    <main className="">
      <Image
        src={banenrImg}
        className="w-full h-screen  -z-[1] absolute top-0 left-0"
      ></Image>
      <HBanner></HBanner>
      {/* === Category section === */}
      <div className="container pb-16">
        <div className="py-8 text-center">
          <h2 className=" text-4xl text-[#05264e] my-4 font-medium">
            Browse by category
          </h2>
          <p className="text-[#66789c]  text-lg">
            Find the job that’s perfect for you. about 800+ new jobs everyday
          </p>
        </div>

        <div className="grid mt-4 grid-cols-5 justify-center gap-8">
          <Catagorycard></Catagorycard>
          <Catagorycard></Catagorycard>
          <Catagorycard></Catagorycard>
          <Catagorycard></Catagorycard>
          <Catagorycard></Catagorycard>
        </div>
      </div>

      {/* ==== Banner  */}
      <div className="banner">
        <div className="container">
          <div className="max-w-6xl flex items-center py-5 rounded px-10 justify-between m-auto border border-[#e0e6f7]">
            <div className="">
              <Image src={BanerSvg} width={100} height={100} />
            </div>
            <div className="content">
              <h5 className=" uppercase text-lg text-[#a0abb8] font-semibold">
                We are
              </h5>
              <h2 className="text-[#05264e] text-5xl uppercase font-semibold">
                Hiring
              </h2>
            </div>

            <div className="content">
              <p>
                Let’s <span className="text-[#05264e] font-medium ">Work</span>{' '}
                Together <br /> &
                <span className="text-[#05264e] font-medium ">Explore</span>{' '}
                Opportunities
              </p>
            </div>

            <div className="content">
              <a
                href=""
                className="bg-[#021329] flex gap-2 hover:-translate-y-1 duration-300 transition items-center  
                 text-white rounded py-3 px-6"
              >
                <span></span>
                <span>Apply Now</span>
              </a>
            </div>
            <div className="">
              <Image src={BanerSvg2} width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
      {/* ==== Banner  */}

      {/* ----- Job section ------- */}
      <div className="container">
        <div className="my-28">
          <div className=" text-center">
            <h2 className=" text-4xl text-[#05264e] my-4 font-medium">
              Jobs of the day
            </h2>
            <p className="text-[#66789c]  text-lg">
              Search and connect with the right candidates faster
            </p>
          </div>
          <div className="my-20">
            <div className="filter-element">
              <div className="grid grid-cols-8 gap-4">
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
                <div className="border text-center duration-300 transition-all hover:-translate-y-1 border-[#021329] rounded-md hover:bg-[#021329] hover:text-white">
                  <Link href={''} className="w-full py-3 block text-[15px]">
                    Content Writer
                  </Link>
                </div>
              </div>
            </div>

            <div className="job-card-element my-10 ">
              <div className="grid grid-cols-4 gap-5">
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
