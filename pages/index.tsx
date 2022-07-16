import type { NextPage } from 'next'
import Head from 'next/head'
// components
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/cards/SmallCard'
import MediumCard from '../components/cards/MediumCard'
import LargeCard from '../components/cards/LargeCard'
import Footer from '../components/Footer'
import { useEffect } from 'react'

interface Props { 
  exploreData: [];
  cardsData: [];
}

const Home: NextPage<Props> = ({ exploreData, cardsData }) => {

  useEffect(() => {
    const testMovie = async () => {
      const test = await fetch('/api/movies')
        .then((res) => res.json())
        .catch((err) => []) 
        console.log(test)
    }
    testMovie()
  }, []);


  return (
    <div className="">
      <Head>
        <title>Airbnb - Home</title>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      { /* Header */ }
      <Header placeholder='' />

      { /* Banner */ }
      <Banner />

      { /* Mainsite */ }
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        { /* Explore Nearby */ }
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div className='grid-default'>
            {
              exploreData?.map((data, key) => ( 
                <SmallCard  
                  key={key} 
                  data={data}
                />
            ))}
          </div>

        </section>
        { /* Slider Live Anywehre */ }
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywehre</h2>
          <div className='flex p-3 -ml-3 space-x-3 overflow-scroll overflow-y-hidden scrollbar-hide'>
            {
              cardsData?.map((data, key) => (
                <MediumCard 
                  key={key}
                  data={data}
                />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by airbnb"
          buttonText="Get Inspired"
        />
      </main>

      { /* Footer */ }
      <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then((res) => res.json())
    .catch((err) => []) 
  
  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then((res) => res.json())
    .catch((err) => []) 

  return {
    props : {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}

export default Home