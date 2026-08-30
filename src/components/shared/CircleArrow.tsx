import { cn } from '@/lib/utils';
import { FaArrowRight } from 'react-icons/fa';

interface CircleArrowProps {
  className?: string;
}

const CircleArrow = ({ className = 'bg-neutral-950' }: CircleArrowProps) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center rounded-full aspect-square size-9 cursor-pointer transition-all duration-200 active:translate-y-px',
        className
      )}
    >
      <FaArrowRight className='text-white' />
    </div>
  );
};

export default CircleArrow;
