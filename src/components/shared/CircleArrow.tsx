import { cn } from '@/lib/utils';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '../ui/button';

interface CircleArrowProps {
  className?: string;
}

const CircleArrow = ({ className = 'bg-neutral-950' }: CircleArrowProps) => {
  return (
    <Button
      className={cn(
        'flex justify-center items-center rounded-full aspect-square size-9',
        className
      )}
    >
      <FaArrowRight className='text-white' />
    </Button>
  );
};

export default CircleArrow;
