'use client';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Form from '@/components/organisms/Forms/Form';

const FormPage: NextPage = () => {
  const session = useSession();
  console.log(session);
  return (
    <>
      <Form />
    </>
  );
};

export default FormPage;
