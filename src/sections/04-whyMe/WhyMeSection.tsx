import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { whyMeData } from '@/data/whyMeData';

const WhyMeSection = () => {
  const header = whyMeData.header;
  return (
    <SectionWrapper sectionId='why-me'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default WhyMeSection;
