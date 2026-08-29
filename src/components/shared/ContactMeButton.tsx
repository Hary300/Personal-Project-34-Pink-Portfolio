import { heroData } from '@/data/heroData';

const ContactMeButton = () => {
  const text = heroData.actions.contactText;
  const ArrowIcon = heroData.icon.arrow;

  return (
    <a
      href='#contact'
      className='flex justify-between items-center bg-secondary-100 h-12 px-4 hover:bg-secondary-100/80 cursor-pointer rounded-full active:translate-y-px transition-transform duration-200'
    >
      <p className='font-semibold text-sm xl:text-md text-neutral-950'>
        {text}
      </p>
      <div className='flex justify-center items-center bg-neutral-950 rounded-full aspect-square size-9'>
        <ArrowIcon className='text-white' />
      </div>
    </a>
  );
};

export default ContactMeButton;
