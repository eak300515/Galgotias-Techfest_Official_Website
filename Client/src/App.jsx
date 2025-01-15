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
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <ParticleBackground />
        <HeroTwo />

        <div id="attraction">
          <EventAttractions />
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
