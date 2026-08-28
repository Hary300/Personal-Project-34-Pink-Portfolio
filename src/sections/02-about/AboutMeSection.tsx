import SectionWrapper from '@/components/layouts/SectionWrapper';
import { aboutMeData } from '@/data/aboutMeData';

const AboutMeSection = () => {
  const heading = aboutMeData.heading;
  const items = aboutMeData.items;

  return (
    <SectionWrapper
      sectionId='about'
      className='flex flex-col gap-10 lg:gap-20 items-center'
    >
      <p className='font-medium text-display-sm lg:text-display-lg text-center max-w-223'>
        {heading.start}{' '}
        <span className='text-primary-300'>{heading.highlight}</span>{' '}
        {heading.end}
      </p>
      <div className='flex flex-col md:flex-row gap-4 lg:gap-10 divide-x-0 divide-y md:divide-x md:divide-y-0'>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col gap-3 lg:gap-4 pb-4 lg:pb-0 pr-0 md:pr-4 lg:pr-10'
            >
              <div className='size-12 lg:size-15.75 rounded-full aspect-square shrink-0 flex justify-center items-center p-1 border '>
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className='w-6.5 lg:w-8'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-bold text-lg lg:text-display-xs'>
                  {item.title}
                </p>
                <p className='text-sm lg:text-md'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default AboutMeSection;
