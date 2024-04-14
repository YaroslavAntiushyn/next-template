'use client';
import { FC, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SubmitBtn from '../Buttons/SubmitBtn';
import Input from '@/components/atoms/Input';
import Checkbox from '@/components/atoms/Checkbox';
import Textarea from '@/components/atoms/Textarea';
import Select from '@/components/atoms/Select';
import MultiSelect from '@/components/atoms/MultiSelect';

const Form: FC = () => {
  const methods = useForm<any>();
  const {
    handleSubmit,
    getValues
  } = methods;

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-md mx-auto mt-8'
        noValidate
      >
        <Input name='textField' required />
        <Textarea name='textareaField' required />
        <Checkbox name='checkboxField' required />
        <Select name='selectField' required />
        <MultiSelect name='multiselectField' required />
        <SubmitBtn text='submit' />
      </form>
    </FormProvider>
  );
};

export default Form;
