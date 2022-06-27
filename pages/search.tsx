import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import Mapbox from '../components/Mapbox'
import BaseScreen from '../components/BaseScreen'

interface Props {
  searchResults: []
}

const Search: NextPage<Props> = ({ searchResults }) => {
  const [range, setRange] = useState('');
  const [formatedStartDate, setFormatedStartDate] = useState('');
  const [formatedEndDate, setFormatedEndDate] = useState('');

  const router = useRouter()
  const { location, startDate, endDate, numberOfGuests } = router.query; 

  useEffect(() => {
    if(!startDate || !endDate) return;
    const initFormatedStartDate = format(new Date(Number(startDate)), "dd MMMM yy");
    const initFormatedEndDate = format(new Date(Number(endDate)), "dd MMMM yy");
    setFormatedStartDate(initFormatedStartDate)
    setFormatedEndDate(initFormatedEndDate)
    setRange(`- ${initFormatedStartDate} to ${initFormatedEndDate}`);
  }, [startDate, endDate]);

  return (
    <BaseScreen 
      title={'search - '+location}
      headerPlaceholder={`${location} | ${range} | ${numberOfGuests}`}
    >
      <section className='flex-grow w-full px-6 pt-14'>
        <p className='text-xs'>300+ Stays - <span className='px-2 py-1 text-white bg-red-400 rounded'>{formatedStartDate}</span> to <span className='px-2 py-1 text-white bg-red-400 rounded'>{formatedEndDate}</span> - for {numberOfGuests} guests</p>

        <h1 className='mt-2 mb-6 text-3xl font-semibold'>Stays in {location}</h1>

        <div className='flex space-x-2 overflow-scroll text-gray-800 scrollbar-hide whitespace-nowrap'>
          <p className='button-filters'>Cancellation flexibility</p>
          <p className='button-filters'>Type of place</p>
          <p className='button-filters'>Price</p>
          <p className='button-filters'>Rooms and Beds</p>
          <p className='button-filters'>More filters</p>
        </div>
        
        { /* Result */ }
        <div className='flex-col mt-6'>
          {
            searchResults?.map((data, key) => <InfoCard
              data={data}
              key={key}
            />)
          }
        </div>
        
      </section>
      { /* Map */ }
      <section className='hidden map xl:inline-flex xl:min-w-[600px]'>
        <Mapbox searchResults={searchResults} />
      </section>
    </BaseScreen>
  )
}

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz')
  .then((res) => res.json())
  .catch((err) => []) 

  return {
    props : {
      searchResults: searchResults,
    }
  }
}

export default Search