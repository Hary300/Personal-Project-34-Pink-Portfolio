import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/faqData';

const FaqSection = () => {
  const header = faqData.header;
  return (
    <SectionWrapper sectionId='faq'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default FaqSection;
