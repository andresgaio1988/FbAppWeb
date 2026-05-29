import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import StatsBar from './sections/StatsBar';
import Benefits from './sections/Benefits';
import Product from './sections/Product';
import Features from './sections/Features';
import Industries from './sections/Industries';
import Process from './sections/Process';
import CtaBanner from './sections/CtaBanner';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Benefits />
        <Product />
        <Features />
        <Industries />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
