import type { NextPage } from 'next'
import Head from 'next/head'
// components
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const Home: NextPage = ({ exploreData, cardsData }) => {

  return (
    <div className="">
      <Head>
        <title>Next test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { /* Header */ }
      <Header />

      { /* Banner */ }
      <Banner />

      { /* Mainsite */ }
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        { /* Explore Nearby */ }
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              exploreData?.map(({ img, location, distance }, key) => ( 
                <SmallCard  
                  key={key} 
                  img={img} 
                  location={location} 
                  distance={distance} 
                />
            ))}
          </div>

        </section>
        { /* Slider Live Anywehre */ }
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywehre</h2>
          <div className='flex p-3 -ml-3 space-x-3 overflow-scroll overflow-y-hidden scrollbar-hide'>
            {
              cardsData?.map(({ title, img }, key) => (
                <MediumCard 
                  key={key}
                  title={title} 
                  img={img}
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
  
  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then((res) => res.json())

  return {
    props : {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}

export default Home