import type { Header } from '@/types/headerSection';
import portfolio1 from '@/assets/images/portfolio/portfolio1.webp';
import portfolio2 from '@/assets/images/portfolio/portfolio2.webp';
import portfolio3 from '@/assets/images/portfolio/portfolio3.webp';
import devIlustration from '@/assets/images/devs/devIllustration.png';

interface Field {
  name: 'name' | 'email' | 'subject' | 'message';
  label: string;
  placeholder: string;
  isTextArea: boolean;
}

interface Form {
  devIllustration: string;
  fields: Field[];
  buttonText: string;
  sendingText: string;
}

interface Preview {
  id: string;
  image: string;
}

interface ContactData {
  header: Header;
  previews: Preview[];
  form: Form;
}

export const contactData: ContactData = {
  header: {
    title: "Let's Work Together",
    subtitle:
      "Have a project in mind or just want to say hi? Drop me a message—I'd love to hear from you.",
  },
  previews: [
    { id: 'preview-1', image: portfolio1 },
    { id: 'preview-2', image: portfolio2 },
    { id: 'preview-3', image: portfolio3 },
  ],
  form: {
    devIllustration: devIlustration,
    fields: [
      {
        name: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        isTextArea: false,
      },
      {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        isTextArea: false,
      },
      {
        name: 'subject',
        label: 'Subject',
        placeholder: 'Enter your subject',
        isTextArea: false,
      },
      {
        name: 'message',
        label: 'Message',
        placeholder: 'Enter your message',
        isTextArea: true,
      },
    ],
    buttonText: "Let's Talk",
    sendingText: 'Sending...',
  },
};
