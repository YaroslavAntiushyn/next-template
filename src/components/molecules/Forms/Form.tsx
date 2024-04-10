import { useFormContext } from 'react-hook-form'

const Form: React.FC = () => {
  const { register, handleSubmit, getValues } = useFormContext()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <input
        type='text'
        {...register('example')}
        className='border border-gray-300 p-2 rounded-md'
      />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
      >
        Submit
      </button>
      <button
        onClick={() => console.log(getValues())}
        className='bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md'
      >
        Log Values
      </button>
    </form>
  )
}

export default Form
