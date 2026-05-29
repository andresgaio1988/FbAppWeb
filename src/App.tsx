import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Product from './sections/Product';
import Features from './sections/Features';
import Process from './sections/Process';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Product />
        <Features />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
