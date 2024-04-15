'use client';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface Textarea {
  name: string;
  required?: boolean;
  text: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

const Textarea: FC<Textarea> = ({
  name,
  required,
  text,
  pattern = {
    value: /^[a-zA-Z0-9]*$/,
    message: 'Only letters and numbers are allowed'
  }
}) => {
  const {
    formState: { errors },
    register
  } = useFormContext();

  return (
    <>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          {text}
          <textarea
            required={required}
            style={{ border: errors[name] && 'solid 1px red' }}
            // type='text'
            className='form-input mt-1 block w-full'
            {...register(name, {
              required: 'This field is required',
              pattern
            })}
          />
        </label>
        {errors[name]?.message as string}
      </div>
    </>
  );
};

export default Textarea;
