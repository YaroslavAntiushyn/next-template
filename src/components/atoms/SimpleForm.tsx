'use client'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
  email: string
  password: string
}

const SimpleForm: React.FC = () => {
  const useFormMethods = useForm<IFormInput>({ defaultValues: {} })
  const { watch, register, handleSubmit } = useFormMethods

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          placeholder='E-mail'
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Email must be correctly'
            }
          })}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          {...register('password', {
            required: 'Password is required..'
          })}
        />
        <input type='submit' />
      </form>
      //{' '}
    </FormProvider>
  )
}

export default SimpleForm
