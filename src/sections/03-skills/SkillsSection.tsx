import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsData } from '@/data/skillsData';

const SkillsSection = () => {
  const header = skillsData.header;
  return (
    <SectionWrapper sectionId='skill'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default SkillsSection;
