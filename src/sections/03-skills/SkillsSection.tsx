import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsData } from '@/data/skillsData';
import SkillCarousel from './SkillCarousel';

const SkillsSection = () => {
  const header = skillsData.header;

  return (
    <SectionWrapper
      sectionId='skill'
      className='bg-linear-to-t from-[#9E385E1A] to-transparent'
    >
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <SkillCarousel size={2} className='sm:hidden' />
      <SkillCarousel size={3} className='hidden sm:flex md:hidden' />
      <SkillCarousel size={4} className='hidden md:flex' />
    </SectionWrapper>
  );
};

export default SkillsSection;
