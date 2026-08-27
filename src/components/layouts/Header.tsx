import NavLinks from '@/components/NavLinks';

const Header = () => {
  return (
    <header>
      <nav className='h-12 px-6 rounded-full backdrop-blur-2xl bg-black/20 sm:max-w-138.25 flex fixed -translate-x-1/2 left-1/2 top-8'>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
