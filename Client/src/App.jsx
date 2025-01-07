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

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <HeroTwo />

        <div id="attractions">
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
        <About />

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
