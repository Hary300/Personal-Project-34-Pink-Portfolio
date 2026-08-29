import { useState } from 'react';
import MobileNavLinks from './MobileNavLinks';
import { Button } from '../ui/button';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { cn } from '@/lib/utils';

const MobileHeader = () => {
  const [isShown, setIsShown] = useState(false);

  const handleHeaderClick = () => {
    setIsShown((prev) => !prev);
  };

  const handleLinkClick = () => {
    console.log('CLICK');
    setIsShown(false);
  };

  if (isShown) {
    document.documentElement.classList.add('overflow-hidden');
  } else {
    document.documentElement.classList.remove('overflow-hidden');
  }
  return (
    <header>
      <nav
        className={cn(
          'px-4 backdrop-blur-2xl bg-black/20 w-[calc(100%-2rem)] flex flex-col gap-4 lg:hidden fixed -translate-x-1/2 left-1/2 top-4 lg:top-8 py-2 rounded-2xl cursor-pointer z-50',
          'transition-[height] duration-300 ease-in-out overflow-hidden',
          isShown ? 'h-[calc(100%-2rem)]' : 'h-12'
        )}
      >
        <div onClick={handleHeaderClick}>
          <div className='flex justify-between items-center'>
            <span className='font-bold text-xl text-white'>Hary</span>
            <Button variant='ghost' className='p-0 h-auto text-white'>
              {isShown ? (
                <RxCross1 className='size-6 stroke-1' />
              ) : (
                <RxHamburgerMenu className='size-6 stroke-1' />
              )}
            </Button>
          </div>
        </div>
        {isShown && <MobileNavLinks closeMenu={() => handleLinkClick()} />}
      </nav>
    </header>
  );
};

export default MobileHeader;
