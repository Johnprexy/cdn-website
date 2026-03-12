import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Vision from '@/pages/Vision';
import Bridge from '@/pages/Bridge';
import Academy from '@/pages/Academy';
import Membership from '@/pages/Membership';
import Workers from '@/pages/Workers';
import Leadership from '@/pages/Leadership';
import Campus from '@/pages/Campus';
import Chapters from '@/pages/Chapters';
import Start from '@/pages/Start';
import Resources from '@/pages/Resources';
import Videos from '@/pages/Videos';
import Faith from '@/pages/Faith';
import Contact from '@/pages/Contact';
import Join from '@/pages/Join';
import NotFound from '@/pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/start" element={<Start />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/faith" element={<Faith />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
