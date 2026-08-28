import { socialMediaLinks } from '@/data/socialMediaLinks';

const Footer = () => {
  return (
    <footer className='lg:h-22 max-w-360 m-auto lg:px-30 py-8 px-4 bg-neutral-950 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-6'>
      <p className='text-neutral-25/90 text-md order-2 lg:order-1'>
        © 2026 Created by{' '}
        <a
          href='https://github.com/Hary300'
          target='_blank'
          rel='noopener noreferrer'
        >
          Hary300
        </a>
        . All rights reserved.
      </p>
      <div className='flex gap-3 lg:gap-4 order-1 lg:order-2'>
        {socialMediaLinks.map((link) => {
          const Icon = link.icon;
          return (
            <div
              key={link.id}
              className='rounded-full border border-neutral-800 aspect-square shrink-0 size-10 flex justify-center items-center'
            >
              <Icon className='text-neutral-25/90' />
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
