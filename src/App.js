import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Composants/HomrPage/Header';
import HomeSection from './Composants/HomrPage/HomeSection';
import ServiceSection from'./Composants/HomrPage/ServiceSection';
import AboutSection from './Composants/HomrPage/AboutSection.jsx';
import GallerySection from './Composants/HomrPage/GallerySection';
import PriceSection from './Composants/HomrPage/PriceSection';
import ReviewSection from './Composants/HomrPage/ReviewSection';
import ContactSection from './Composants/HomrPage/ContactSection';
import ThemeToggler from './Composants/HomrPage/ThemeToggler';
import Footer from './Composants/HomrPage/Footer';
import Auth from './Composants/Authentification/Auth';


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Route path="/Auth" component={<Auth />} />
    </Router>
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
