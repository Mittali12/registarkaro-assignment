import './App.css';
import { AboutSection } from './components/AboutSection';
import { Accordian } from './components/Accordian';
import { AppSection } from './components/AppSection';
import { BlogsSection } from './components/BlogsSection';
import { ClientSection } from './components/ClientSection';
import { CompanyLogoSection } from './components/CompanyLogosSection';

import { EmailSection } from './components/EmailSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroPage } from './components/HeroPage';
import { LogosSection } from './components/LogosSection';
import { Navbar } from './components/Navbar';
import { NumbersSection } from './components/NumbersSection';
import { ServicesSection } from './components/ServicesSection';
import StepsSection from './components/StepsSection/StepsSection';
import { VideoSection } from './components/VideoSection';




function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroPage />
      <LogosSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <VideoSection />
      <ClientSection />
      <StepsSection />
      <BlogsSection />
      <Accordian />
      <AppSection />
      <NumbersSection />
      <EmailSection />
      <CompanyLogoSection />
      <Footer />
    </div>
  );
}

export default App;
