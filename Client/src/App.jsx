import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Hero from "./Hero";
import HeroGlass from "./HeroGlass";

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
        <HeroGlass />
        <EventAttractions />

        <div id="Events">
          <Events />
        </div>

        <div id="Workshops">
          <Workshops />
        </div>

        <div id="Competitions">
          <Competitions />
        </div>

        <div id="gtc">
        <Collaboration />
        </div>
        
        <Services />
        <StrategicPartnerSection />
        <Pricing />

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

        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
