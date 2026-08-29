import { heroData } from '@/data/heroData';
import CircleArrow from './CircleArrow';

const ContactMeButton = () => {
  const text = heroData.actions.contactText;

  return (
    <a
      href='#contact'
      className='flex justify-between items-center bg-secondary-100 h-12 pl-4 pr-2 hover:bg-secondary-100/80 cursor-pointer rounded-full active:translate-y-px transition-transform duration-200'
    >
      <p className='font-semibold text-sm xl:text-md text-neutral-950'>
        {text}
      </p>

      <CircleArrow />
    </a>
  );
};

export default ContactMeButton;
