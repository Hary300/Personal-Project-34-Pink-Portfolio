import successImg from '@/assets/images/dialog/successEnvelope.png';
import errorImg from '@/assets/images/dialog/errorEnvelope.png';

export interface DialogItem {
  status: 'success' | 'error';
  title: string;
  description: string;
  buttonText: string;
  image: string;
  bgColor: string;
}

export interface DialogData {
  successModal: DialogItem;
  errorModal: DialogItem;
}

export const dialogData: DialogData = {
  successModal: {
    status: 'success',
    title: 'Got Your Message!',
    description: "Really appreciate you reaching out. I'll be in touch soon.",
    buttonText: 'Back to Home',
    image: successImg,
    bgColor: 'bg-[#F3B64C]',
  },
  errorModal: {
    status: 'error',
    title: 'Message Failed to Send',
    description:
      'Sorry about that. Please check your connection and try again.',
    buttonText: 'Try Again',
    image: errorImg,
    bgColor: 'bg-[#E9EAEB]',
  },
};
