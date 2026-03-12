import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from '../ui/Cursor';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
