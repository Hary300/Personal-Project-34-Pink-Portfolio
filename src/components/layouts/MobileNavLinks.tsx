import { navLinks } from '@/data/navLinks';

interface MobileNavLinks {
  closeMenu: () => void;
}

const MobileNavLinks = ({ closeMenu }: MobileNavLinks) => {
  return (
    <ul className='flex flex-col gap-2 w-full'>
      {navLinks.map((link) => (
        <li key={link.id} onClick={closeMenu}>
          <a href={link.href} className='font-medium text-md text-white'>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavLinks;
