import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  errorMessage?: string;
  isTextArea?: boolean;
}
const InputField = <T extends FieldValues>({
  register,
  name,
  label,
  placeholder,
  errorMessage,
  isTextArea = false,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <label htmlFor={name} className='font-bold text-sm'>
          {label}
        </label>
        {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
      </div>

      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          {...register(name)}
          rows={3}
          className='rounded-xl border py-2 px-4 font-medium text-md'
        ></textarea>
      ) : (
        <input
          type='text'
          placeholder={placeholder}
          {...register(name)}
          className='rounded-xl border py-2 px-4 font-medium text-md text-neutral-600'
        />
      )}
    </div>
  );
};

export default InputField;
