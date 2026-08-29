import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  highlight?: string;
  highlightColor?: string;
  className?: string;
  titleStyle?: string;
  subtitleStyle?: string;
}
const SectionTitle = ({
  title,
  subtitle,
  className,
  highlight,
  highlightColor,
  titleStyle,
  subtitleStyle,
}: SectionTitleProps) => {
  const parts = highlight && title.split(highlight);
  return (
    <div className={cn('flex flex-col text-center', className)}>
      <p
        className={cn(
          'font-bold text-display-sm lg:text-display-xl',
          titleStyle
        )}
      >
        {parts ? (
          <>
            {parts[0]} <span className={highlightColor}>{highlight}</span>{' '}
            {parts[1]}
          </>
        ) : (
          title
        )}
      </p>
      <p className={cn('font-medium text-sm lg:text-md', subtitleStyle)}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
