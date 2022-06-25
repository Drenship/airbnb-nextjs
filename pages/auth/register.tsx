import type { NextPage } from 'next'
import Head from 'next/head'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Props {
}

const Register: NextPage<Props> = () => {

  return (
    <div className="">
      <Head>
        <title>Airbnb - register</title>
      </Head>

      { /* Header */ }
      <Header placeholder='' />

      { /* Mainsite */ }
      <main className="px-8 mx-auto max-w-7xl sm:px-16">

        <h1>Register</h1>

      </main>

      { /* Footer */ }
      <Footer />
    </div>
  )
}

export default Register