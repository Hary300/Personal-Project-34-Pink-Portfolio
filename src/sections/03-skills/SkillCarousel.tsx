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

interface CarouselProps {
  className?: string;
  size: number;
}

const SkillCarousel = ({ className, size }: CarouselProps) => {
  const skills = skillsData.skills;
  const slides = chunk(skills, size);
  return (
    <Carousel className={cn('w-full flex flex-col gap-8', className)}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className='flex gap-4 justify-center'>
            {slide.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'py-10 px-4 rounded-full flex flex-col gap-3 w-full max-w-[172.5px] md:max-w-53.75 items-center',
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
                  <p className='text-sm md:text-md'>{item.description}</p>
                </div>
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-3 justify-center'>
        <CarouselPrevious className='static lg:size-11.25' />
        <CarouselNext className='static lg:size-11.25' />
      </div>
    </Carousel>
  );
};

export default SkillCarousel;
