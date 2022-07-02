import { EyeIcon } from '@heroicons/react/outline';
import { EyeOffIcon, UserAddIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react';
// components
import BaseScreen from '../../components/BaseScreen'

interface Props {
}

const Register: NextPage<Props> = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  
  const _onSubmitForm = () => {
    const form = { email, password }
    
    if(password === passwordConfirm) {
      alert('Account created')
      console.log(form)
    }
  }

  return (
    <BaseScreen title="Register" headerPlaceholder=''>
        <form className='w-full mx-auto border my-20 p-7 rounded-xl shadow-xl max-w-[380px]' onSubmit={e => e.preventDefault()}>
          <div className='flex items-center space-x-3'>
            <UserAddIcon className='w-5' />
            <h1 className='text-xl font-bold uppercase'>Create Account</h1>
          </div>

          <div className='mt-5'>
            <label className="block pt-2 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="input-password">Email or number</label>
            <input 
              className='w-full pb-2 border-b outline-none'
              type='text' 
              placeholder='Email or number' 
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='relative mt-5'>
            <label className="block pt-2 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="input-password">Password</label>
            <input 
              className='w-full pb-2 border-b outline-none'
              type={ showPass ? 'text' : 'password' } 
              placeholder='Password'
              id='input-password'
              onChange={e => setPassword(e.target.value)}
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
          
          <div className='relative mt-5'>
            <label className="block pt-2 mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="input-password">Confirm password</label>
            <input 
              className='w-full pb-2 border-b outline-none'
              type={ showConfirmPass ? 'text' : 'password' } 
              placeholder='Confirm password'
              id='input-password'
              onChange={e => setPasswordConfirm(e.target.value)}
            />
            <button 
              className='absolute z-10 right-1'
              onClick={ (e) => {
                e.preventDefault();
                setShowConfirmPass(showConfirmPass ? false : true)
              }}
            >
              {
                showConfirmPass ? <EyeIcon className='w-5' /> : <EyeOffIcon className='w-5' />
              }
            </button>
          </div>


          <button 
            className='button-primary'
            type='submit'
            onClick={_onSubmitForm}
          >Create account</button>
            

          <div className='flex flex-col mt-5 border-t'>
            <Link href="/auth/login" className='w-full'>
              <a>
                <button 
                  className='button-primary-green'
                >Login</button>
              </a>
            </Link>
            </div>
        </form>
    </BaseScreen>
  )
}

export default Register