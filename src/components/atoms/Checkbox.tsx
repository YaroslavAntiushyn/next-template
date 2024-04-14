'use client';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface Checkbox {
  name: string;
  required?: boolean;
}

const Checkbox: FC<Checkbox> = ({ name, required }) => {
  const {
    formState: { errors },
    register
  } = useFormContext();
  return (
    <>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Checkbox:
          <input
            required={required}
            style={{ border: errors[name] && 'solid 1px red' }}
            type='checkbox'
            className='ml-2'
            {...register(name, {
              required: required ? 'This field is required' : false
            })}
          />
        </label>
        {errors[name]?.message as string}
      </div>
    </>
  );
};

export default Checkbox;
