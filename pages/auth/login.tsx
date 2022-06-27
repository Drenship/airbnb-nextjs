import type { NextPage } from 'next'
// components
import { EyeIcon, UserIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useState } from 'react'
import { EyeOffIcon } from '@heroicons/react/outline'
import BaseScreen from '../../components/BaseScreen'

interface Props {
}

const Login: NextPage<Props> = () => {

  const [showPass, setShowPass] = useState(false)

  return (
    <BaseScreen title="Login">
        
        <form className='w-full mx-auto border my-20 p-7 rounded-xl shadow-xl max-w-[380px]'>
          <div className='flex items-center space-x-3'>
            <UserIcon className='w-5' />
            <h1 className='text-xl font-bold'>LOGIN</h1>
          </div>

          <div className='mt-5'>
            <label className="block pt-2 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="input-password">Email or number</label>
            <input 
              className='w-full pb-2 border-b outline-none'
              type='text' 
              placeholder='Email or number' 
            />
          </div>

          <div className='relative mt-5'>
          <label className="block pt-2 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="input-password">Password</label>
            <input 
              className='w-full pb-2 border-b outline-none'
              type={ showPass ? 'text' : 'password' } 
              placeholder='Password'
              id='input-password'
            />
            <button 
              className='absolute z-10 right-1'
              onClick={ (e) => {
                e.preventDefault();
                setShowPass(showPass ? false : true)
              }}
            >
              {
                showPass ? <EyeIcon className='w-5' /> : <EyeOffIcon className='w-5' />
              }
            </button>
          </div>

          <button 
            className='button-primary' 
            type='submit'
            onClick={(e) => e.preventDefault()}
          >Login</button>

          <Link href="/auth/forgotten" className='w-full'>
            <a className='flex justify-center mt-5 text-blue-700'>Forgotten password ?</a>
          </Link>
            

          <div className='flex flex-col mt-5 border-t'>
            <button 
              className='button-primary-green'
              onClick={(e) => e.preventDefault()}
            >Create new account</button>
          </div>
        </form>

      </BaseScreen>
  )
}

export default Login