import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { AboutSection } from "./Sections/AboutSection";
import { AchivementsSection } from "./Sections/AchivementsSection";
import { CertificatesSection } from "./Sections/CertificatesSection";
import { GetinTouchSection } from "./Sections/GetinTouchSection";
import { HeroSection } from "./Sections/HeroSection";
import { LeadershipSection } from "./Sections/LeadershipSection";
import { OurvisionSection } from "./Sections/OurvisionSection";
import { ServicesSection } from "./Sections/ServicesSection";
import { TeamSection } from "./Sections/TeamSection";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <OurvisionSection />
      <ServicesSection />
      <div className="bg-img-light">
        <AchivementsSection />
        <CertificatesSection />
      </div>
      <LeadershipSection />
      <TeamSection />
      <GetinTouchSection />
      <Footer />
    </div>

  );
}

export default App;
