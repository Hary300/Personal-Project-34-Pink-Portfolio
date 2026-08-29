import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { skillsData } from '@/data/skillsData';
import { chunk } from '@/lib/chunk';
import { cn } from '@/lib/utils';

interface BiggerScreenCarouselProps {
  className?: string;
}

const BiggerScreenCarousel = ({ className }: BiggerScreenCarouselProps) => {
  const skills = skillsData.skills;
  const slides = chunk(skills, 4);
  return (
    <Carousel className={cn('w-full flex flex-col gap-8', className)}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className='flex gap-4 justify-center'>
            {slide.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'py-10 px-4 rounded-full flex flex-col gap-3 w-full max-w-[172.5px] items-center',
                  index % 2 === 0 && 'bg-secondary-100',
                  index % 2 !== 0 && 'border border-neutral-300'
                )}
              >
                <div
                  className={cn(
                    'size-15 rounded-full aspect-square shrink-0 flex justify-center items-center bg-neutral-100 p-2.5 '
                  )}
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className='w-9'
                  />
                </div>
                <div className='flex flex-col justify-center text-center'>
                  <p className='font-semibold text-md'>{item.name}</p>
                  <p className='text-sm'>{item.description}</p>
                </div>
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-3 justify-center'>
        <CarouselPrevious className='static' />
        <CarouselNext className='static' />
      </div>
    </Carousel>
  );
};

export default BiggerScreenCarousel;
