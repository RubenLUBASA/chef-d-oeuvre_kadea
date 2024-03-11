import './App.css';
import './customusScript';
import Header from './composants/Header';
import HommeSection from './composants/HomeSection';
import ServiceSection from'./composants/ServiceSection';
import AboutSection from './composants/AboutSection';
import GallerySection from './composants/GallerySection';
import PriceSection from './composants/PriceSection';
import ReviewSection from './composants/ReviewSection';
import ContactSection from './composants/ContactSection';
import Toogler from './composants/Toogler';
import Footer from './composants/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Header />
      <HommeSection />
      <ServiceSection />
      <AboutSection />
      <GallerySection />
      <PriceSection />
      <ReviewSection />
      <ContactSection />
      <Toogler />
      <Footer />
      
    </div>
  );
}

export default App;
