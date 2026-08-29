import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceData } from '@/data/experiencesData';

const ExperiencesSection = () => {
  const header = experienceData.header;
  return (
    <SectionWrapper sectionId='experience' className='bg-neutral-950'>
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        highlight='Shaped Me'
        highlightColor='text-secondary-100'
        className='text-left sm:flex-row sm:justify-between sm:items-center sm:w-full text-neutral-25'
        titleStyle='sm:max-w-[365px]'
        subtitleStyle='sm:max-w-[366px] font-semibold sm:text-lg lg:text-lg'
      />
    </SectionWrapper>
  );
};

export default ExperiencesSection;
