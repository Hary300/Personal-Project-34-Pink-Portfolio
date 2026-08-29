import SectionWrapper from '@/components/layouts/SectionWrapper';
import CircleArrow from '@/components/shared/CircleArrow';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';

const PortfolioSection = () => {
  const header = portfolioData.header;
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
    </SectionWrapper>
  );
};

export default PortfolioSection;
