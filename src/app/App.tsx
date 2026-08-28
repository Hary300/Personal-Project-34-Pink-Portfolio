import Footer from '@/components/layouts/Footer';
import HeroSection from '@/sections/01-hero';
import AboutMeSection from '@/sections/02-about';
import SkillsSection from '@/sections/03-skills';
import WhyMeSection from '@/sections/04-whyMe';
import PortfolioSection from '@/sections/05-portfolio';
import ExperiencesSection from '@/sections/06-experiences';
import TestimonySection from '@/sections/07-testimony';
import FaqSection from '@/sections/08-faq';
import ContactSection from '@/sections/09-contact';
import DesktopHeader from '@/components/layouts/DesktopHeader';
import MobileHeader from '@/components/layouts/MobileHeader';

function App() {
  return (
    <>
      <div className='relative'>
        <DesktopHeader />
        <MobileHeader />
        <HeroSection />
      </div>
      <AboutMeSection />
      <SkillsSection />
      <WhyMeSection />
      <PortfolioSection />
      <ExperiencesSection />
      <TestimonySection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
