import HBanner from '@/components/HomeBanner';
import Image from 'next/image';
import banner1 from '@/assets/images/banner1.png';

export default function Home() {
  return (
    <main className="">
      {/* <div className="container">
        <div className="grid grid-cols-2 gap-2 py-20">
          <div className="pr-56">
            <h1 className="text-5xl">The Easiest Way to Get Your New Job</h1>
            <p>
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
          </div>
          <div className="m-auto text-center">
            <Image src={banner1}></Image>
          </div>
        </div>
      </div> */}
      <HBanner></HBanner>
    </main>
  );
}
