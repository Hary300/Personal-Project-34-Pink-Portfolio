import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/contactData';

const ContactSection = () => {
  const header = contactData.header;
  return (
    <SectionWrapper
      sectionId='contact'
      className='flex flex-col gap-6 lg:justify-between'
    >
      <div className='flex flex-col gap-6 lg:gap-10'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          className='text-left'
        />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
