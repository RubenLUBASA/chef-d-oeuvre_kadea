import './App.css';
import Header from './Composants/Header';
import HomeSection from './Composants/HomeSection';
import ServiceSection from'./Composants/ServiceSection';
import AboutSection from './Composants/AboutSection';
import GallerySection from './Composants/GallerySection';
import PriceSection from './Composants/PriceSection';
import ReviewSection from './Composants/ReviewSection';
import ContactSection from './Composants/ContactSection';
import ThemeToggler from './Composants/ThemeToggler';
import Footer from './Composants/Footer';
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
