import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

import Header from '@/sections/header';
import Footer from '@/sections/Footer';

export const metadata = {
  title: 'Find A New Job',
  description: 'The Easiest Way to Get Your New Job',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
