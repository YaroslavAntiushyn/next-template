'use client';
import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SubmitBtn from '../../molecules/Buttons/SubmitBtn';
import Input from '@/components/atoms/Input';
import Checkbox from '@/components/atoms/Checkbox';
import Textarea from '@/components/atoms/Textarea';
import Select from '@/components/atoms/Select';
import MultiSelect from '@/components/atoms/MultiSelect';
import Date from '@/components/atoms/Date';

const Form: FC = () => {
  const methods = useForm<any>();
  const { handleSubmit, getValues } = methods;

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
        <Input name='textField' text='Text Input' required />
        <Textarea name='textareaField' text='Text Input' required />
        <Checkbox name='checkboxField' text='Checkbox' required />
        <Select name='selectField' text='Select' required />
        <MultiSelect name='multiselectField' text='Multiselect' required />
        <Date name='date' />
        <SubmitBtn text='submit' />
      </form>
    </FormProvider>
  );
};

export default Form;
