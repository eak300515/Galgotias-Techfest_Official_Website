import ButtonGradient from "./assets/svg/ButtonGradient";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Hero from "./Hero";
import HeroTwo from "./HeroTwo";

import KnowUsSection from "./KnowUsSection";

import PageWrapper from "./PageWrapper";
import RegistrationForm from "./RegistrationForm";
import FAQ from "./FAQ";
import Competitions from "./Competitions";
import Events from "./Events";
import About from "./About";

import "./index.css";
import Workshops from "./Workshops";
import StrategicPartnerSection from "./StrategicPartnerSection";
import AboutGU from "./AboutGU";
import "./Event-Attractions"
import EventAttractions from "./Event-Attractions";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in ms
        once: true,     // Animations run only once
        easing: 'ease-in-out', // Easing function
    });
}, []);

  return (
    <>
      <div className="App">
        <Header />
        <div data-aos="fade-in">
        <Hero />
        </div>

        <div data-aos="fade-left">
        <HeroTwo />
        </div>

        <div data-aos="fade-right">
          <div id="attraction">
            <EventAttractions />
          </div>
        </div>

        <div id="Events">
          <Events />
        </div>

        <div id="Workshops">
          <Workshops />
        </div>

        <div id="Competitions">
          <Competitions />
        </div>

        <div id="knowus">
          <KnowUsSection />
        </div>

        <StrategicPartnerSection />
        

        <PageWrapper>
        <div id="registration-form">
          <RegistrationForm />
        </div>

        <FAQ />
        </PageWrapper>

        <div id="techverse">
          <About />
        </div>

        <div id="Galgotias">
          <AboutGU />
        </div>

        
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
