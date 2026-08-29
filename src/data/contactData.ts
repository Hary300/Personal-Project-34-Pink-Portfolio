import type { Header } from '@/types/headerSection';

interface Field {
  label: string;
  placeholder: string;
  isTextArea: boolean;
}

interface Form {
  devIllustration: string;
  fields: Field[];
  buttonText: string;
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
    { id: 'preview-1', image: '/assets/images/portfolio-preview-1.png' },
    { id: 'preview-2', image: '/assets/images/portfolio-preview-2.png' },
    { id: 'preview-3', image: '/assets/images/portfolio-preview-3.png' },
  ],
  form: {
    devIllustration: '/assets/illustrations/character-peek.svg',
    fields: [
      {
        label: 'Name',
        placeholder: 'Enter your name',
        isTextArea: false,
      },
      {
        label: 'Email',
        placeholder: 'Enter your email',
        isTextArea: false,
      },
      {
        label: 'Message',
        placeholder: 'Enter your message',
        isTextArea: true,
      },
    ],
    buttonText: "Let's Talk",
  },
};
