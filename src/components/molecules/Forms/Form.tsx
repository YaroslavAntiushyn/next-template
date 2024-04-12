'use client'
import { FC, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import SubmitBtn from '../Buttons/SubmitBtn'

const Form: FC = () => {
  const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = methods

  const onSubmit = () => {
    console.log(getValues())
  }

  useEffect(() => {
    console.log()
  }, [errors])

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-md mx-auto mt-8'
        noValidate
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Text Input:
            <input
              required
              style={{ border: errors.textField && 'solid 1px red' }}
              type='text'
              className='form-input mt-1 block w-full'
              {...register('textField', {
                required: 'This field is required',
                pattern: {
                  value: /^[a-zA-Z0-9]*$/,
                  message: 'Only letters and numbers are allowed'
                }
              })}
            />
          </label>
          {errors.textField?.message as string}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Textarea:
            <textarea
              className='form-textarea mt-1 block w-full'
              {...register('textareaField')}
            />
          </label>
        </div>
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

export default Form
