import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionId =
  | 'home'
  | 'about'
  | 'skill'
  | 'projects'
  | 'faq'
  | 'contact'
  | (string & {});

interface SectionWrapperProps {
  sectionId: SectionId;
  children: ReactNode;
  isHero?: boolean;
  className?: string;
}
const SectionWrapper = ({
  sectionId,
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'px-4 lg:px-30 max-w-360 m-auto py-10 lg:pt-20 lg:pb-20',

        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
