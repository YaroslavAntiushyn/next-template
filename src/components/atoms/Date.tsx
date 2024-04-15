import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState<any>(null);

  console.log(selectedDate);

  return (
    <div className='mb-4'>
      <DatePicker
        className='w-full border-gray-300 border focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
      />
    </div>
  );
};

export default Date;
