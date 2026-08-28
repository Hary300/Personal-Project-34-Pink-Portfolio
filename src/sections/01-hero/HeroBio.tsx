import { heroData } from '@/data/heroData';
import { cn } from '@/lib/utils';

interface HeroBioProps {
  className?: string;
}

const HeroBio = ({ className }: HeroBioProps) => {
  const profile = heroData.profile;
  const MicIcon = heroData.icon.microphone;

  return (
    <div className={cn('flex flex-col gap-2 text-white ', className)}>
      <div className='size-12 lg:size-15.75 rounded-full border border-primary-300 aspect-square shrink-0 flex justify-center items-center p-1'>
        <MicIcon className='size-6 lg:size-8' />
      </div>
      <p className='font-bold text-md lg:text-xl'>{profile.greeting}</p>
      <p className='font-medium text-sm lg:text-lg'>{profile.bio}</p>
    </div>
  );
};

export default HeroBio;
