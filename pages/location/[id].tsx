import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { CheckIcon, GiftIcon, SparklesIcon, TicketIcon, XIcon } from '@heroicons/react/solid';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InputNumber from '../../components/InputNumber'

interface Props {
    location: {
        title: '',
        img: '',
    };
}

const Location: NextPage<Props> = ({ location }) => {

    console.log("location", location)

    return (
        <div>
            <Head>
                <title>Airbnb - {location.title}</title>
            </Head>

            { /* Header */ }
            <Header placeholder='' />

            { /* Mainsite */ }
            <main className="px-8 mx-auto max-w-7xl sm:px-16">
                
                { /* image of location */ }
                <div className='relative w-full overflow-hidden h-96 mt-14 rounded-xl'>
                    <Image src={location.img} 
                        layout='fill'
                        objectFit='cover'
                    />
                </div>

                { /* Mainsite body */}
                <div className='block h-full pt-10 lg:flex'>
                    { /* left */}
                    <section className='w-full lg:max-w-[75%]'>
                        <div className='flex items-start justify-between'>
                            <div className='flex-grow pr-4'>
                                <h3 className='text-2xl font-bold'>{location.title}</h3>
                                <p className='pt-4 font-semibold text-gray-400'>👪 Jusqu'à 30 personnes</p>
                            </div>
                            <div className='relative w-24 h-24 min-w-[6rem] flex items-center cursor-pointer'>
                                <Image src="https://i.ytimg.com/vi/FCZ4y-2N-xU/maxresdefault.jpg" 
                                    layout='fill'
                                    objectFit='cover'
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        
                        <div className='border-t pt-7 my-7'>
                            <h3 className='text-2xl font-bold'>Équipements</h3>
                            <div className='pt-4 grid-default'>
                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>🌡️</span> 
                                    <span>Piscine chauffée</span>
                                </p>
                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>🚿</span> 
                                    <span>Douche</span>
                                </p>
                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>🚽</span> 
                                    <span>Toilette</span>
                                </p>

                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>☀️</span> 
                                    <span>Jardin</span>
                                </p>

                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>⛱️</span> 
                                    <span>Transats</span>
                                </p>

                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>🪑</span> 
                                    <span>Table et chaises</span>
                                </p>

                                <p className='item-equipements'>
                                    <span><XIcon className='h-5 text-red-500'/></span>
                                    <span>🥏</span> 
                                    <span>Jeux d'extérieur</span>
                                </p>

                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>🎯</span> 
                                    <span>Terrain de pétanque</span>
                                </p>

                                <p className='item-equipements'>
                                    <span><CheckIcon className='h-5 text-blue-500'/></span>
                                    <span>💻</span> 
                                    <span>Wi-Fi</span>
                                </p>
                            </div>
                        </div>

                        <div className='border-t pt-7 my-7'>
                            <h3 className='text-2xl font-bold'>À propos de cette piscine</h3>
                            <p className='pt-4 font-semibold text-gray-800'>Notre piscine est chauffé​,​ une terrasse avec grand jardin ainsi que un trampoline​,​ un barbecue​,​ un terrain de pétanque​,​ des buts de foot un jeu de badminton vous serons mit à disposition. La piscine a une forme arrondie​,​ elle est bien entretenue et il y a 1 hamac​,​ 2 transats et une table à 10 place</p>
                        </div>

                        <div className='border-t pt-7 my-7'>
                            <h3 className='text-2xl font-bold'>Règlement intérieur</h3>

                            <div className='flex pt-3 space-x-2'>
                                <span>🧒</span> 
                                <p className='font-semibold'>Convient aux enfants</p>
                            </div>
                            <div className='flex pt-3 space-x-2'>
                                <span>🦓</span> 
                                <p className='font-semibold'>Pas d'animaux</p>
                            </div>
                            <div className='flex pt-3 space-x-2'>
                                <span>🎂</span> 
                                <p className='font-semibold'>Événements autorisés</p>
                            </div>
                            <div className='flex pt-3 space-x-2'>
                                <span>🥂</span> 
                                <p className='font-semibold'>Alcool autorisé</p>
                            </div>
                            <div className='flex pt-3 space-x-2'>
                                <span>🚭</span> 
                                <p className='font-semibold'>Espace fumeur</p>
                            </div>
                            <div className='flex pt-3 space-x-2'>
                                <span>🎶</span> 
                                <p className='font-semibold'>Musique autorisée</p>
                            </div>

                            <div className='p-4 mt-3 bg-red-100 rounded-lg'>
                                <h4 className='flex text-lg font-semibold'><ExclamationCircleIcon className='w-5 mr-2'/> Précisions de votre hôte :</h4>
                                <p className='pl-3'>Musique volume modéré</p>
                            </div>
                        </div>

                        <div className='border-t pt-7 my-7'>
                            <h3 className='text-2xl font-bold'>Tarification</h3>
                            <p className='pt-3 font-semibold'>Prix de base</p>
                            <p>30 € par heure jusqu'à 5 personnes</p>

                            <p className='pt-3 font-semibold'>Prix par personne supplémentaire</p>
                            <p>10 € par heure, par personne après 5 personnes</p>

                            <p className='pt-3 font-semibold'>Durée minimum d'une réservation</p>
                            <p>3 heures</p>
                        </div>

                        <div className='border-t pt-7 my-7'>
                            <h3 className='text-2xl font-bold'>Extras supplémentaires</h3>
                            <p className='pt-4 font-semibold text-gray-400'>Extras proposés par l'hôte.</p>

                            <div className='flex p-3 mt-3 border-2 rounded-xl'>
                                <SparklesIcon className='h-12 p-1 mr-4 border-2 border-black rounded-xl' />
                                <div>
                                    <h4 className='font-bold'>Barbecue</h4>
                                    <p className='text-sm text-gray-800'>Charbon fournie</p>
                                    <p className='pt-2 font-semibold'>25 €</p>
                                </div>
                            </div>

                            <div className='flex p-3 mt-3 border-2 rounded-xl'>
                                <TicketIcon className='h-12 p-1 mr-4 border-2 border-black rounded-xl' />
                                <div>
                                    <h4 className='font-bold'>Pétanque</h4>
                                    <p className='text-sm text-gray-800'>Boules de pétanque fournie</p>
                                    <p className='pt-2 font-semibold'>20 €</p>
                                </div>
                            </div>

                            <div className='flex p-3 mt-3 border-2 rounded-xl'>
                                <GiftIcon className='h-12 p-1 mr-4 border-2 border-black rounded-xl' />
                                <div>
                                    <h4 className='font-bold'>Goûter</h4>
                                    <p className='text-sm text-gray-800'>1 gâteau avec des boissons et des bonbons</p>
                                    <p className='pt-2 font-semibold'>12 € <span className='text-sm font-normal text-gray-400'>/pers.</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='border-t pt-7 my-7'>
                            <h3 className='text-2xl font-bold'>Informations supplémentaires</h3>
                            <div className='flex pt-3 space-x-2'>
                                <span>🤿</span> 
                                <p className='flex flex-col font-semibold'>Propriétaire présent pendant la location : Occasionnellement</p>
                            </div>
                            <div className='flex pt-3 space-x-2'>
                                <span>💧</span> 
                                <p className='flex flex-col font-semibold'>Produit d'entretien : Chlore</p>
                            </div>
                            <div className='flex pt-3 space-x-2'>
                                <span>🏊</span> 
                                <p className='flex flex-col font-semibold'>
                                    <span>Équipement(s) de sécurité :</span>
                                    <span className='flex items-center pl-3'><CheckIcon className='h-5 mr-3 text-blue-500'/> Bâche de sécurité</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    { /* right card */}
                    <section className='border-t pt-7 lg:ml-7 lg:pt-0 lg:border-none'>
                        <div className='mx-auto w-[360px] shadow-lg border rounded-3xl flex flex-col p-8'>
                            <h3 className='text-xl font-bold'>30€ <span className='text-sm font-normal text-gray-800'>/ h</span></h3>
                            <p className='text-sm text-gray-400'>jusqu'à 5 pers. incluses</p>

                            <div className='flex justify-between mt-7'>
                                <div>
                                    <h4 className='font-semibold'>Adultes</h4>
                                    <p className='text-sm text-gray-400'>13 ans et +</p>
                                </div>
                                <div>
                                    <InputNumber
                                        value={1}
                                        minCount={1}
                                        maxCount={30}
                                        inputName='count_adultes'
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between mt-7'>
                                <div>
                                    <h4 className='font-semibold'>Enfants</h4>
                                    <p className='text-sm text-gray-400'>De 3 à 13 ans</p>
                                </div>
                                <div>
                                    <InputNumber
                                        value={0}
                                        minCount={0}
                                        maxCount={30}
                                        inputName='count_enfants'
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between mt-7'>
                                <div>
                                    <h4 className='font-semibold'>Bébés</h4>
                                    <p className='text-sm text-gray-400'>Moins de 3 ans</p>
                                </div>
                                <div>
                                    <InputNumber
                                        value={0}
                                        minCount={0}
                                        maxCount={30}
                                        inputName='count_baby'
                                    />
                                </div>
                            </div>
                            
                            <button className='w-full py-3 font-semibold text-white transition ease-out bg-blue-500 rounded-lg cursor-pointer mt-7 active:scale-95 duratrion-200 hover:shadow-lg hover:bg-blue-600'>
                                Réserver pour 90€
                            </button>

                            <p className='pt-3 text-sm text-center text-gray-400'>Aucun montant ne vous sera débité pour le moment.</p>
                        </div>
                    </section>
                </div>

                { /* Commentaire */}
                <section  className='border-t pt-7 my-7'></section>

            </main>

            { /* Footer */ }
            <Footer />
        </div>
    )
}

type ServerSideProps = {
    query: {
        id: ""
    };
};

type ResultsFilter = {
    title: '';
};

export async function getServerSideProps(context: ServerSideProps) {

    const { query: { id } } = context

    const searchResults = await fetch('https://links.papareact.com/isz')
    .then((res) => res.json())
    .catch((err) => []) 
  
    const filterLocation = searchResults.filter((s: ResultsFilter) => s.title === id)[0] || {}
    return {
      props : {
        location: filterLocation
      }
    }
  }

export default Location