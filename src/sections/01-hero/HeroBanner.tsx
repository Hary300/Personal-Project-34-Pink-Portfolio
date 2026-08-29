import { heroData } from '@/data/heroData';

const HeroBanner = () => {
  const profile = heroData.profile;
  const roleArray = profile.role.split(' ');
  const devImage = heroData.profile.devImage;
  const MouseIcon = heroData.icon.mouse;

  return (
    <div className='relative flex flex-col justify-between gap-16.25 items-center w-full sm:min-w-87.5 sm:max-w-87.5 lg:max-w-175 xl:w-[clamp(500px,54.69vw,700px)] '>
      {/* STATUS */}
      <div className='bg-primary-400 rounded-full border border-primary-300 py-1 px-4 flex items-center gap-[6px]'>
        <div className='rounded-full size-2 lg:size-4 aspect-square shrink-0 bg-[#E26190]' />
        <p className='font-semibold text-xs lg:text-md text-white'>
          {profile.status}
        </p>
      </div>

      <div className='relative flex justify-center max-w-89.25 lg:max-w-175 font-anton text-secondary-100 text-center'>
        {/* FRONTEND TEXT */}
        <p className='absolute top-0 left-1/2 -translate-x-1/2 text-[clamp(52px,24vw,102px)] sm:text-[clamp(48px,13.75vw,88px)] lg:text-[187.76px] leading-30 lg:leading-45 m-auto z-5'>
          {roleArray[0]}
        </p>
        {/* DEVELOPER TEXT */}
        <p className='absolute top-[clamp(80px,28vw,120px)] lg:top-[23%] left-1/2 -translate-x-1/2 font-anton text-[clamp(48px,21.65vw,92px)] lg:text-[168.82px] sm:text-[80px] leading-20 lg:leading-50 m-auto z-5'>
          {roleArray[1]}
        </p>
        {/* OUTLINED DEVELOPER TEXT */}
        <p className='absolute top-[clamp(80px,28vw,120px)] lg:top-[23%] left-1/2 -translate-x-1/2 font-anton text-transparent [-webkit-text-stroke:1px_#f3b64c] text-[clamp(48px,21.65vw,92px)] lg:text-[168.82px] leading-20 sm:text-[80px] lg:leading-50 m-auto z-20'>
          {roleArray[1]}
        </p>
        {/* DEVELOPER IMAGE */}
        <div className='relative max-w-[clamp(300px,88.24vw,375px)] lg:max-w-152.5 -mt-15 lg:mt-0 z-10'>
          <img src={devImage} alt='dev image' fetchPriority='high' />
        </div>
        {/* JUNIOR TEXT */}
        <p className='absolute top-[clamp(-15px,-9.41vw,-20px)] left-0 lg:-left-15 lg:-top-20 xl:-left-36 xl:-top-25.25 font-bonheurRoyale text-[clamp(40px,15.2vw,64.59px)] lg:text-[113.23px] text-white rotate-[-12.34deg] z-20'>
          {profile.level}
        </p>
        {/* SCROLL DOWN TEXT */}
        <div className='absolute bottom-4 flex gap-0.5 items-center z-20'>
          <p className='font-semibold text-xs lg:text-md font-sans text-white'>
            {heroData.actions.scrollText}
          </p>
          <MouseIcon className='text-white lg:size-6 stroke-1' />
        </div>
        {/* PINWHEEL LEFT */}
        <div className='absolute top-[20%] right-[calc(100%-2rem)] size-[74.28px] lg:size-41.5 rotate-45 z-1'>
          <img src={heroData.background.pinWheel} alt='pin wheel' />
        </div>
        {/* PINWHEEL RIGHT */}
        <div className='absolute bottom-[15%] right-0 size-[74.28px] lg:size-41.5 rotate-45 z-1'>
          <img src={heroData.background.pinWheel} alt='pin wheel' />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
