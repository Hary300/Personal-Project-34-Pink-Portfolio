import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { whyMeData } from '@/data/whyMeData';
import { cn } from '@/lib/utils';
import { FaCheck } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const WhyMeSection = () => {
  const header = whyMeData.header;
  const cards = whyMeData.cards;
  return (
    <SectionWrapper sectionId='why-me'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='flex flex-col gap-6 md:flex-row'>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={cn(
              'flex flex-col gap-6 lg:gap-8 rounded-2xl px-4 py-8 lg:px-8 flex-1',
              index % 2 === 0 && 'bg-secondary-100',
              index % 2 !== 0 && 'border border-neutral-300'
            )}
          >
            <div className='flex flex-col gap-4 lg:gap-6 items-center'>
              <p className='font-bold text-lg'>{card.title}</p>
              {typeof card.avatar === 'function' ? (
                <div className='size-20 lg:size-25 bg-neutral-300 rounded-full shrink-0 aspect-square flex justify-center items-center'>
                  <card.avatar className='size-10 lg:size-15 text-white' />
                </div>
              ) : (
                <div className='size-20 lg:size-25 bg-primary-300 rounded-full shrink-0 aspect-square flex justify-center items-end overflow-hidden'>
                  <img
                    src={card.avatar}
                    alt={card.title}
                    className='w-15 lg:w-20'
                  />
                </div>
              )}
              <div className='flex flex-col gap-4 lg:gap-6 items-center justify-center'>
                {card.features.map((feature) => (
                  <div
                    key={feature.text}
                    className={cn('flex gap-4 items-center w-fit')}
                  >
                    {feature.isPositive ? (
                      <FaCheck className='shrink-0' />
                    ) : (
                      <RxCross1 className='shrink-0 stroke-1 text-[#E5352D]' />
                    )}
                    <p className='font-semibold text-md xl:text-lg text-center inline-block text-balance '>
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyMeSection;
