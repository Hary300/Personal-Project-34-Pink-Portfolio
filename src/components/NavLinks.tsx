import { navLinks } from '@/data/navLinks';

const NavLinks = () => {
  return (
    <ul className='hidden lg:flex gap-8 w-full justify-between items-center'>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className='font-medium text-md text-white'>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
