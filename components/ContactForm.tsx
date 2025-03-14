'use client';

import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Your Name"
          className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      
      <div>
        <input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Your Email"
          className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      
      <div>
        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Your Message"
          rows={4}
          className="w-full p-4 bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
        ></textarea>
        {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}