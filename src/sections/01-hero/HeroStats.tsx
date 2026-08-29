import ContactMeButton from '@/components/shared/ContactMeButton';
import { heroData } from '@/data/heroData';
import { cn } from '@/lib/utils';

interface HeroStatsProps {
  className?: string;
}

const HeroStats = ({ className }: HeroStatsProps) => {
  const stats = heroData.stats;

  return (
    <div
      className={cn(
        'flex flex-col gap-5 lg:absolute lg:bottom-54.5 lg:right-2 lg:w-full lg:max-w-40.5 xl:max-w-55.5 xl:right-[clamp(20px,calc(62.5vw-780px),120px)]',
        className
      )}
    >
      <div className='grid grid-cols-2 lg:grid-cols-1 text-white gap-y-5 gap-x-[60.17px] sm:gap-x-4 sm:max-w-100 lg:divide-y lg:divide-primary-300'>
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              'flex flex-col gap-0.75 lg:pb-5',
              index % 2 === 0 && 'border-r border-primary-300 lg:border-r-0'
            )}
          >
            <p className='font-bold text-display-md lg:text-display-2xl'>
              {stat.value}
            </p>
            <p className='font-semibold text-xs lg:text-md'>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className='sm:max-w-100'>
        <ContactMeButton />
      </div>
    </div>
  );
};

export default HeroStats;
