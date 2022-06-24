import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'

interface Props {
  searchResuslts: []
}

const Search: NextPage<Props> = ({ searchResuslts }) => {
  const [range, setRange] = useState('');

  const router = useRouter()
  const { location, startDate, endDate, numberOfGuests } = router.query; 

  useEffect(() => {
    if(!startDate || !endDate) return;
    const formatedStartDate = format(new Date(Number(startDate)), "dd MMMM yy");
    const formatedEndDate = format(new Date(Number(endDate)), "dd MMMM yy");
    setRange(`- ${formatedStartDate} to ${formatedEndDate}`);
  }, [startDate, endDate]);

  return (
    <div>
      <Head>
        <title>Airbnb search - {location}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { /* Header */ }
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
      
      { /* Main */ }
      <main className='flex'>
        <section className='flex-grow w-full px-6 pt-14'>
          <p className='text-xs'>300+ Stays {range} - for {numberOfGuests} guests</p>

          <h1 className='mt-2 mb-6 text-3xl font-semibold'>Stays in {location}</h1>

          <div className='flex space-x-2 overflow-scroll text-gray-800 scrollbar-hide whitespace-nowrap'>
            <p className='button'>Cancellation flexibility</p>
            <p className='button'>Type of place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>

          <div className='flex-col mt-6'>
            {
              searchResuslts?.map((data, key) => <InfoCard
                data={data}
                key={key}
              />)
            }
          </div>
          
        </section>
      </main>

      { /* Footer */ }
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const searchResuslts = await fetch('https://links.papareact.com/isz')
  .then((res) => res.json())
  .catch((err) => []) 

  return {
    props : {
      searchResuslts: searchResuslts,
    }
  }
}

export default Search