'use client'
import { NextPage } from 'next'
import { Form, FormProvider, useForm } from 'react-hook-form'

const FormPage: NextPage = () => {
  return (
    <>
      <FormProvider {...useForm()}>
        <Form />
      </FormProvider>
    </>
  )
}

export default FormPage
