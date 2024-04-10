import Button from '@/components/atoms/Button';
import { FC } from 'react';


interface AddBtnProps {
  onClick: () => void;
  text: string;
}

const AddBtn: FC<AddBtnProps> = ({ onClick, text }) => {
  return (
    <>
      <Button onClick={onClick}>
        <div className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>{text}</div>
      </Button>
    </>
  );
};

export default AddBtn;
