import './App.css';
import Header from './composants/Header';
import HomeSection from './composants/HomeSection';
import ServiceSection from'./composants/ServiceSection';
import AboutSection from './composants/AboutSection';
import GallerySection from './composants/GallerySection';
import PriceSection from './composants/PriceSection';
import ReviewSection from './composants/ReviewSection';
import ContactSection from './composants/ContactSection';
import ThemeToggler from './composants/ThemeToggler';
import Footer from './composants/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Header />
      <HomeSection />
      <ServiceSection />
      <AboutSection />
      <GallerySection />
      <PriceSection />
      <ReviewSection />
      <ContactSection />
      <ThemeToggler />
      <Footer />
      
    </div>
  );
}

export default App;
