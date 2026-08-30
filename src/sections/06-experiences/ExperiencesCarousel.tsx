import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { experienceData } from '@/data/experiencesData';
import { chunk } from '@/lib/chunk';

const ExperiencesCarousel = () => {
  const experiences = experienceData.experiences;
  const slides = chunk(experiences, 3);
  return (
    <Carousel className='w-full flex flex-col gap-4 divide-y divide-neutral-800'>
      <CarouselContent className='flex gap-4 lg:gap-8 '>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            {slide.map((item) => (
              <div
                key={item.id}
                className='flex flex-col gap-4 pb-4 md:flex-row md:justify-between md:items-start'
              >
                <div className='flex flex-col gap-1'>
                  <p className='font-medium text-sm text-neutral-400'>
                    {item.period}
                  </p>
                  <p className='font-bold text-md lg:text-xl'>{item.role}</p>
                </div>

                <div className='border border-neutral-800 rounded-2xl p-1.25 w-fit'>
                  <div className='border border-neutral-800 rounded-2xl flex justify-center items-center p-3.75 lg:p-6'>
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className='w-20.25 lg:w-[128px]'
                    />
                  </div>
                </div>

                <p className='text-sm lg:text-md max-w-100 lg:max-w-128.25'>
                  {item.description}
                </p>
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-4 justify-center'>
        <CarouselPrevious className='static text-neutral-950 lg:size-11.25 border-0' />
        <CarouselNext className='static text-neutral-950 lg:size-11.25 border-0' />
      </div>
    </Carousel>
  );
};

export default ExperiencesCarousel;
