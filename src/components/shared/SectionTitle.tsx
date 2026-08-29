import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}
const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <p className='font-bold text-display-sm lg:text-display-xl'>{title}</p>
      <p className='font-medium text-sm lg:text-md'>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
