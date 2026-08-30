import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialData } from '@/data/testimonyData';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const TestimonySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const header = testimonialData.header;
  const testimonials = testimonialData.testimonials;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <SectionWrapper sectionId='testimony'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />

      <div className='relative min-h-119.5 sm:min-h-94.5 text-neutral-25'>
        {testimonials.map((testimonial, index) => {
          const offset =
            (index - currentIndex + testimonials.length) % testimonials.length;
          return (
            <div
              key={testimonial.id}
              style={{
                transform: `translateY(${offset * 25}px) scale(${1 - offset * 0.05})`,
                zIndex: testimonials.length - offset,
                opacity: offset > 2 ? 0 : 1 - offset * 0.25,
              }}
              className={cn(
                'absolute flex flex-col justify-center items-center py-6 px-6 lg:py-8 lg:px-10 w-full h-full rounded-2xl lg:rounded-4xl bg-primary-300 transition-all duration-300 ease-out'
              )}
            >
              <div className='mb-4 flex gap-1'>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={index} className='text-secondary-100 size-6' />
                ))}
              </div>

              <div className='mb-8 font-semibold text-lg lg:text-display-xs text-center'>
                "{testimonial.quote}"
              </div>
              <div className='size-16 shrink-0 rounded-full overflow-hidden'>
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                />
              </div>
              <div className='flex flex-col text-center'>
                <p className='font-semibold text-lg'>{testimonial.name}</p>
                <p className='font-medium text-md'>{testimonial.role}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex gap-4 mt-8 justify-center'>
        <Button
          variant='outline'
          onClick={handlePrev}
          className='w-[45.33px] h-[45.33px] rounded-full  flex items-center justify-center hover:bg-gray-100 transition'
        >
          <GoArrowLeft className='size-6' />
        </Button>
        <Button
          variant='outline'
          onClick={handleNext}
          className='w-[45.33px] h-[45.33px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition'
        >
          <GoArrowRight className='size-6' />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default TestimonySection;
