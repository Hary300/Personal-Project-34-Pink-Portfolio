import DesktopNavLinks from '../DesktopNavLinks';

const DesktopHeader = () => {
  return (
    <header>
      <nav className='h-12 px-6 rounded-full backdrop-blur-2xl bg-black/20 w-full max-w-90.25 sm:max-w-138.25 hidden lg:flex fixed -translate-x-1/2 left-1/2 top-4 lg:top-8 z-50'>
        <DesktopNavLinks />
      </nav>
    </header>
  );
};

export default DesktopHeader;
