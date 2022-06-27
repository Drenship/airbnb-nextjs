import Head from 'next/head'
// components
import Header from './Header'
import Footer from './Footer'


const BaseScreen = ({title, children }) => {

  return (
    <div className="">
      <Head>
        <title>Airbnb - {title}</title>
      </Head>

      { /* Header */ }
      <Header placeholder='' />

      { /* Mainsite */ }
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        { children  }
      </main>

      { /* Footer */ }
      <Footer />
    </div>
  )
}

export default BaseScreen