import { Button } from '@/components/ui/button';
import { contactData } from '@/data/contactData';
import { contactSchema, type ContactSchema } from '@/schema/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import { useState } from 'react';

import ContactDialog from './ContactDialog';
import { dialogData, type DialogData } from '@/data/dialogData';

const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSuccess(true);
      setIsOpen(true);
      reset();
      console.log(data);
    } catch (error) {
      setIsSuccess(false);
      setIsOpen(true);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const dialogDataProps: keyof DialogData = isSuccess
    ? 'successModal'
    : 'errorModal';

  const form = contactData.form;
  const formFields = form.fields;
  const dialogItemData = dialogData[dialogDataProps];
  return (
    <div className='relative flex flex-col items-center flex-1'>
      <div className='md:absolute bottom-full max-w-48 sm:max-w-80 md:max-w-11xl lg:max-w-48'>
        <img src={form.devIllustration} alt='dev illustration' />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5 rounded-2xl p-4 lg:rounded-4xl lg:p-8 shadow-[0_0_28px_0_rgba(197,197,197,0.25)] -mt-2 w-full'
      >
        {formFields.map((field) => {
          const errorMessage = errors[field.name]?.message;
          return (
            <InputField
              key={field.name}
              register={register}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              isTextArea={field.isTextArea}
              errorMessage={errorMessage}
            />
          );
        })}

        <Button type='submit' disabled={isSubmitting} className='h-11'>
          {isSubmitting ? form.sendingText : form.buttonText}{' '}
        </Button>
      </form>
      <ContactDialog
        dialogItemData={dialogItemData}
        isOpen={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
      />
    </div>
  );
};

export default Form;
