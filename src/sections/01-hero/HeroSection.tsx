import SectionWrapper from '@/components/layouts/SectionWrapper';
import HeroBanner from './HeroBanner';
import HeroBio from './HeroBio';
import HeroStats from './HeroStats';
import HeroSkills from './HeroSkills';
import { heroData } from '@/data/heroData';

const HeroSection = () => {
  const pattern = heroData.background.pattern;

  return (
    <SectionWrapper
      sectionId='home'
      className='lg:relative flex flex-col justify-center items-center pt-22 lg:pt-56.75 gap-9.5 pb-0 sm:gap-4 sm:flex-row sm:items-stretch lg:items-end lg:pb-0  lg:min-h-256'
      style={{
        backgroundImage: `linear-gradient(rgba(165, 56, 96, 0.94), rgba(165, 56, 96, 0.9)), url(${pattern})`,
        backgroundSize: 'cover',
      }}
    >
      <div className='flex lg:hidden flex-col gap-6.25'>
        <HeroBio />
        <HeroStats />
      </div>
      <HeroSkills />
      <HeroBio className='hidden lg:flex absolute lg:max-w-90 xl:max-w-112.75 w-full left-2 bottom-47 xl:left-[clamp(20px,calc(62.5vw-780px),120px)]' />
      <HeroStats className='hidden lg:flex' />
      <HeroBanner />
    </SectionWrapper>
  );
};

export default HeroSection;
