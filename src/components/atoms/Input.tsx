'use client';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface Input {
  name: string;
  required?: boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

const Input: FC<Input> = ({
  name,
  required,
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
          Text Input:
          <input
            required={required}
            style={{ border: errors[name] && 'solid 1px red' }}
            type='text'
            className='form-input mt-1 block w-full'
            {...register(name, {
              required: required ? 'This field is required' : false,
              pattern
            })}
          />
        </label>
        {errors[name]?.message as string}
      </div>
    </>
  );
};

export default Input;
