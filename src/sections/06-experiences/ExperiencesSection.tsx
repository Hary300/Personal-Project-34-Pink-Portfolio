import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceData } from '@/data/experiencesData';

const ExperiencesSection = () => {
  const header = experienceData.header;
  const experiences = experienceData.experiences;
  return (
    <SectionWrapper
      sectionId='experience'
      className='bg-neutral-950 text-neutral-25'
    >
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        highlight='Shaped Me'
        highlightColor='text-secondary-100'
        className='text-left sm:flex-row sm:justify-between sm:items-center sm:w-full text-neutral-25'
        titleStyle='sm:max-w-[365px]'
        subtitleStyle='sm:max-w-[366px] font-semibold sm:text-lg lg:text-lg'
      />
      <div className='w-full h-px bg-neutral-800' />
      <div className='flex flex-col gap-4 lg:gap-8 divide-y divide-neutral-800'>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className='flex flex-col gap-4 pb-4 md:flex-row md:justify-between md:items-start'
          >
            <div className='flex flex-col gap-1'>
              <p className='font-medium text-sm text-neutral-400'>
                {experience.period}
              </p>
              <p className='font-bold text-md lg:text-xl'>{experience.role}</p>
            </div>

            <div className='border border-neutral-800 rounded-2xl p-1.25 w-fit'>
              <div className='border border-neutral-800 rounded-2xl flex justify-center items-center p-3.75 lg:p-6'>
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className='w-20.25 lg:w-[128px]'
                />
              </div>
            </div>

            <p className='text-sm lg:text-md max-w-128.25'>
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperiencesSection;
