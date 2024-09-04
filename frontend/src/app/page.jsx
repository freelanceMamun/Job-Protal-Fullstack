import HBanner from '@/components/HomeBanner';
import Image from 'next/image';
import banner1 from '@/assets/images/banner1.png';
import banenrImg from '@/assets/images/bg-banner.59ddabf7.svg';
export default function Home() {
  return (
    <main className="">
      <Image
        src={banenrImg}
        className="w-full h-screen -z-[1] absolute top-0 left-0"
      ></Image>
      <HBanner></HBanner>
    </main>
  );
}
