import HBanner from '@/components/HomeBanner';
import Image from 'next/image';
// import banner1 from '@/assets/images/banner1.png';
import banenrImg from '@/assets/images/bg-banner.59ddabf7.svg';
import Catagorycard from '@/components/catagorycard';
export default function Home() {
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
    </main>
  );
}
