'use client'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import SubmitBtn from '../Buttons/SubmitBtn'

const FormComponent: React.FC = () => {
  const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = methods

  //! another option for submitting form data
  // const onSubmit = (data: any) => {
  //   console.log(data)
  // }

  const onSubmit = () => {
    console.log(getValues())
  }

  // const selectedValue = useWatch({
  //   control: methods.control
  // })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto mt-8'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Checkbox:
            <input
              type='checkbox'
              className='ml-2'
              {...register('checkboxField')}
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Select:
            <select
              className='form-select mt-1 block w-full'
              {...register('selectField')}
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Multiselect:
            <select
              required
              className='form-multiselect mt-1 block w-full'
              multiple
              {...register('multiselectField')}
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
          </label>
        </div>
        <SubmitBtn text='www' />
      </form>
    </FormProvider>
  )
}

export default FormComponent
