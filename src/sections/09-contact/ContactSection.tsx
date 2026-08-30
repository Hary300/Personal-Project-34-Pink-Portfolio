import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/contactData';
import Form from './Form';

const ContactSection = () => {
  const header = contactData.header;
  const portfolios = contactData.previews;
  return (
    <SectionWrapper
      sectionId='contact'
      className='flex flex-col gap-6 lg:gap-12 md:flex-row md:justify-between'
    >
      <div className='flex flex-col gap-6 lg:gap-10 md:max-w-80 lg:max-w-135'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          className='text-left'
        />
        <div className='flex justify-between max-w-90 lg:max-w-116.5 mx-auto lg:mx-0'>
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className='w-full max-w-27.5 lg:max-w-35.5'>
              <img
                src={portfolio.image}
                alt='portfolio image'
                className='w-full'
              />
            </div>
          ))}
        </div>
      </div>
      <Form />
    </SectionWrapper>
  );
};

export default ContactSection;
