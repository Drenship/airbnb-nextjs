import { useState } from 'react'
import type { NextPage } from 'next'
import { EyeIcon, UserIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { EyeOffIcon } from '@heroicons/react/outline'
// components
import BaseScreen from '../../components/BaseScreen'

interface Props {
  form: HTMLElement,
}

const Login: NextPage<Props> = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPass, setShowPass] = useState(false)

  const _onSubmitForm = () => {
    const form = { email, password }
    console.log(form)
  }

  return (
    <BaseScreen title="Login" headerPlaceholder=''>
        
        <form className='w-full mx-auto border my-20 p-7 rounded-xl shadow-xl max-w-[380px]' onSubmit={e => e.preventDefault()}>
          <div className='flex items-center space-x-3'>
            <UserIcon className='w-5' />
            <h1 className='text-xl font-bold uppercase'>LOGIN</h1>
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

          <button 
            className='button-primary'
            type='submit'
            onClick={_onSubmitForm}
          >Login</button>

          <Link href="/auth/forgotten" className='w-full'>
            <a className='flex justify-center mt-5 text-blue-700'>Forgotten password ?</a>
          </Link>
            

          <div className='flex flex-col mt-5 border-t'>
            <Link href="/auth/register" className='w-full'>
              <a>
                <button 
                  className='button-primary-green'
                >Create new account</button>
              </a>
            </Link>
            </div>
        </form>

      </BaseScreen>
  )
}

export default Login