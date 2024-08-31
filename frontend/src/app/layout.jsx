import { Poppins } from 'next/font/google';
import './globals.css';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

import Header from '@/sections/header';
import Footer from '@/sections/Footer';

export const metadata = {
  title: 'Find A New Job',
  description: 'The Easiest Way to Get Your New Job',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={poppins.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
