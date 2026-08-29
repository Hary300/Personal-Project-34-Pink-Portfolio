import SectionWrapper from '@/components/layouts/SectionWrapper';
import CircleArrow from '@/components/shared/CircleArrow';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';

const PortfolioSection = () => {
  const header = portfolioData.header;
  const portfolios = portfolioData.items;
  return (
    <SectionWrapper sectionId='projects'>
      <div className='flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center'>
        <SectionTitle
          title={header.title}
          subtitle={header.subtitle}
          highlight='Code Accuracy'
          highlightColor='text-primary-300'
          className='sm:text-left sm:max-w-100 lg:max-w-171.5'
        />
        <Button
          variant='outline'
          className='w-full sm:max-w-39 flex justify-between h-14 pl-4'
        >
          <p>See All</p>
          <CircleArrow />
        </Button>
      </div>
      <div className='flex flex-wrap gap-5 justify-center'>
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className='flex flex-col max-w-[386.67px] '>
            <div className='relative rounded-3xl p-4 bg-neutral-100'>
              <img src={portfolio.image} alt={`${portfolio.title} image`} />
              {portfolio.isBest && (
                <div className='absolute px-2.75 -left-2.25 top-7 bg-secondary-100 rounded-br-full rounded-tr-full before:content-[""] before:absolute before:top-full before:left-0 before:w-3 before:h-3 before:bg-[#855400] before:[clip-path:polygon(0_0,100%_0,100%_100%)]'>
                  <p className='font-semibold text-xs text-neutral-950'>
                    Best Portfolio
                  </p>
                </div>
              )}
            </div>
            <div className='flex items-center p-4 rounded-3xl bg-neutral-100'>
              <div className='flex flex-col gap-3 w-full'>
                <p className='font-bold text-md lg:text-lg'>
                  {portfolio.title}
                </p>
                <div className='h-px w-full bg-neutral-300' />
                <p className='font-medium text-xs lg:text-md'>
                  {portfolio.category}
                </p>
              </div>
              <CircleArrow className='bg-primary-300' />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
