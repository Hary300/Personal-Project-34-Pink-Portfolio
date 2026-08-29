import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialData } from '@/data/testimonyData';

const TestimonySection = () => {
  const header = testimonialData.header;
  return (
    <SectionWrapper sectionId='testimony'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default TestimonySection;
