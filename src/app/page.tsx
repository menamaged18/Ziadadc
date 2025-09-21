import NavBar from '../components/NavBar/NavBar';
import Head from '../components/Head';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import AboutPage from '../components/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Head />
        <AboutPage />
        <WhyChooseUs />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}