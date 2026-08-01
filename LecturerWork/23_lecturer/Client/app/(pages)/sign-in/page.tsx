'use client';
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { signinSchema } from '../validators/signin';
import { useRouter } from 'next/dist/client/components/navigation';
import axios from 'axios';
import Link from 'next/link';
import { setCookie} from 'cookies-next';
export default function SignIn() {

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(signinSchema)
  });
  
  const router = useRouter();

  async function onSubmit(data: any) {
    console.log(data)
    try {
      const res = await axios.post("http://localhost:3030/auth/sign-in", data);
      if(res.status === 200) {
        setCookie("accesstoken", res.data.data, {maxAge:60*60})
        router.push('/dashboard');
      }

    } catch (error) {
      console.log(error, "ეს ერორი მოდის sign-in -იდან")
    }

  }


  return (
    <div className='flex justify-center items-center h-screen text-white'>
      <form  onSubmit={handleSubmit(onSubmit)} className='bg-black w[400px]  w-100 h-auto rounded-2xl p-4 flex flex-col gap-4'>
        <input type="text" placeholder='Email' className='bg-transparent border-2 border-gray-500 rounded-lg p-2 focus:outline-none focus:border-blue-500' {...register("email")} />  
        <p className='text-red-500'>{errors.email?.message}</p>
        <input type="password" placeholder='Password' className='bg-transparent border-2 border-gray-500 rounded-lg p-2 focus:outline-none focus:border-blue-500' {...register("password")} />  
        <p className='text-red-500'>{errors.password?.message}</p>
        
        <div className='flex justify-center gap-4 bg-white text-black p-2 rounded-lg '>
          <span>do you have not an account? </span>
          <Link href="/sign-up" className='text-blue-500 cursor-pointer hover:text-blue-700'>Sign Up</Link>
        </div>
        
        <div className='flex justify-center w-full'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}
