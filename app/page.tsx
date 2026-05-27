import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Differentials from '@/components/Differentials';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <Services />
        <Products />
        <Differentials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
