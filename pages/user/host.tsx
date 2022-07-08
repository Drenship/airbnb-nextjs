import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SyntheticEvent, useEffect, useState } from 'react'

// components
import HostAddLocationCard from '../../components/cards/HostAddLocationCard'
import Step3 from '../../components/hostAddLocationStep/Step3';
import Step4 from '../../components/hostAddLocationStep/Step4';
import Step5 from '../../components/hostAddLocationStep/Step5';
import Step7 from '../../components/hostAddLocationStep/Step7';
import NavigationFooter from '../../components/hostAddLocationStep/NavigationFooter';

//utils
import _onTextareaAutosize from '../../utils/TextAreaAutosize'
import { CakeIcon } from '@heroicons/react/outline'


interface Props { 
  locationsTypeSelection: []
  optionsInLocation: {
    equipementsCommun: []
    equipementsVoyageurs: []
    equipementsSecurite: []
  }
}

const Host: NextPage<Props> = ({ locationsTypeSelection, optionsInLocation }) => {

  const [scroll, setScroll] = useState(false)

  const [step, setStep] = useState(1)
  const [locationType, setLocationType] = useState(null); // step 1 - input

  const [geoLocationSelected, setGeoLocationSelected] = useState(null); // step 4 - coordinate
  
  const [title, setTitle] = useState(''); // step 4 - input
  const [description, setDescription] = useState(''); // step 4 - input
  const [files, setFiles] = useState<any>([]); // step 4 - input
  
  

  const [serviceList, setServiceList] = useState<any>([]); // step 7 - array [list]

  const lastStep = 9;

  const _backStepFrom = () => {
    const backStep = step > 1 ? (step - 1) : step
    setStep(backStep)
  }

  const _nextStepFrom = () => {

    const updateStep = (_nextStep: Boolean) => {
      const nextStep = _nextStep ? (1 + step) : step
      setStep(nextStep)
    }
    // step 1
    if(1 === step) {
      const _next = locationType !== null
      updateStep(_next)
    }

    // step 2
    if(2 === step) {
      const _next = locationType !== null
      updateStep(_next)
    }

    // step 3
    if(3 === step) {
      const _next = geoLocationSelected !== null
      updateStep(_next)
    }

    // step 4
    if(4 === step) {
      const _next = title.length >= 5
      updateStep(_next)
    }

    // step 5
    if(5 === step) {
      const _next = files.length > 0
      updateStep(_next)
    }

    // step 6
    if(6 === step) {
      const _next = locationType !== null
      updateStep(_next)
    }

    // step 7
    if(7 === step) updateStep(true)

    // step 8
    if(8 === step) updateStep(true)
    
    updateStep(true)

  }
  
  const _onSubmitFrom = () => {
    if(step !== lastStep) return;
    const sendFormData = {
      locationType: locationType,

      geoLocation: geoLocationSelected,

      title: title,
      description: description,

      locationPreview: files,

      extras: serviceList,
    }
    
    console.log(sendFormData)
  }

  useEffect(() => {
    const scrollHeader = () => {
      const offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPosition = offsetTop <= 0 ? 0 : offsetTop; // for mobil or negative scrolling
      const showBgHeader = scrollPosition > 0 ? true : false
      setScroll(showBgHeader)
    }

    window.addEventListener('scroll', scrollHeader, false)

    return () => {
      window.removeEventListener('scroll', scrollHeader)
    };
  }, []);
  


  return (
    <div className="">
      <Head>
        <title>Airbnb - host</title>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      { /* Header */ }
      <header className={`fixed top-0 z-50 w-full p-7 transition duration-200 ease-out ${scroll && 'bg-white shadow-lg'}`}>
        { /* logo */ }
          <Link href='/'>
            <a className="relative flex items-center w-full h-10 my-auto cursor-pointer max-w-[150px] overflow-hidden">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
              <div className='absolute top-0 left-0 w-full h-full'></div>
            </a>
          </Link>
      </header>

      { /* body  */ }
      <main className='w-full h-screen'>
        <div className='relative grid min-h-screen grid-cols-1 lg:grid-cols-2 grid-reverse'>
          { /* Left */ }
          <div className='sticky top-0 hidden h-screen lg:inline-block'>
            <div className='relative w-full h-full'> 
              <Image src='https://images8.alphacoders.com/110/thumb-1920-1102284.jpg' objectFit='cover' layout='fill' />
              <div className='absolute top-0 left-0 w-full h-full'></div>
            </div>
          </div>

          { /* Right */ }
          <div className='h-full'>
            <div className='flex flex-col justify-between h-full p-10 xl:px-20'> 
              <div className='mt-16'>
                <h2 className='text-3xl font-bold'>Mettre en location</h2>
                <div className='mt-10'>

                  { /* STEP 1 */}
                  { step === 1 &&
                    <div className='flex flex-col'>
                      <h3 className='mb-5 text-lg font-semibold'>Etape 1: Selectioner votre location</h3>
                      {
                        locationsTypeSelection?.map((item: any, key: any) => <HostAddLocationCard
                          item={item}
                          locationType={locationType}
                          setReturnLocationType={setLocationType}
                          key={key}
                        />)
                      }
                    </div>
                  }

                  { /* STEP 2 */}
                  { step === 2 && 
                    <h3 className='text-lg font-semibold'>Etape 2: ???</h3>
                  }

                  { /* STEP 3 */}
                  { step === 3 && 
                    <Step3 
                      geoLocationSelected={geoLocationSelected}
                      setReturnGeoLocationSelected={setGeoLocationSelected}
                    />
                  }

                  { /* STEP 4 */}
                  { step === 4 && 
                    <Step4 
                      title={title}
                      setReturnTitle={setTitle}
                      description={description}
                      setReturnDescription={setDescription}
                    />
                  }

                  { /* STEP 5 */}
                  { step === 5 && 
                   
                    <Step5 
                      files={files}
                      setReturnFiles={setFiles}
                    />
                  }

                  { /* STEP 6 */}
                  { step === 6 && 
                    <div className='flex flex-col'>
                      <h3 className='text-lg font-semibold'>Etape 6: Description avancées options ...</h3>
                      
                        
                        <p className='mt-10'>Possédez-vous des équipements hors du commun ?</p>
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                          {
                            optionsInLocation?.equipementsCommun?.map((item: any, key: any) => <div key={key} className='inline-block my-2 cursor-pointer'>
                              <label htmlFor={`commun-${item._id}`}>
                                <input type="checkbox" className='hidden' id={`commun-${item._id}`}/>
                                <span className='checkbox-location-option'>
                                  <span>
                                    <CakeIcon className='checkbox-location-icon' />
                                  </span>
                                  <span className='checkbox-location-title'>{ item.name }</span>
                                </span>
                              </label>
                            </div>)
                          }
                        </div>

                        <p className='mt-10'>Qu'en est-il de ces équipements préférés des voyageurs ?</p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 grid-col-2'>
                          {
                            optionsInLocation?.equipementsVoyageurs?.map((item: any, key: any) => <div key={key} className='inline-block my-2 cursor-pointer'>
                              <label htmlFor={`voyagers-${item._id}`}>
                                <input type="checkbox" className='hidden' id={`voyagers-${item._id}`}/>
                                <span className='checkbox-location-option'>
                                  <span>
                                    <CakeIcon className='checkbox-location-icon' />
                                  </span>
                                  <span className='checkbox-location-title'>{ item.name }</span>
                                </span>
                              </label>
                            </div>)
                          }
                        </div>

                        <p className='mt-10'>Possédez-vous ces équipements de sécurité ?</p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 grid-col-2'>
                          {
                            optionsInLocation?.equipementsSecurite?.map((item: any, key: any) => <div key={key} className='inline-block my-2 cursor-pointer'>
                              <label htmlFor={`securitys-${item._id}`}>
                                <input type="checkbox" className='hidden' id={`securitys-${item._id}`}/>
                                <span className='checkbox-location-option'>
                                  <span>
                                    <CakeIcon className='checkbox-location-icon' />
                                  </span>
                                  <span className='checkbox-location-title'>{ item.name }</span>
                                </span>
                              </label>
                            </div>)
                          }
                        </div>

  
                    </div>
                  }

                  { /* STEP 7 */}
                  { step === 7 && 
                    <Step7 
                      serviceList={serviceList} 
                      setReturnServiceList={setServiceList} 
                    /> 
                  }

                  { /* STEP 8 */}
                  { step === 8 && 
                    <div className='flex flex-col'>
                      <h3 className='text-lg font-semibold'>Quel type d'activité d'hôte exercez-vous sur Airbnb ?</h3>
                      <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                          <label htmlFor="particulietr">J'accueille des voyageurs en tant que particulier</label>
                          <input id="particulietr" type="radio" name="type_activity" />
                        </div>
                        <div className='flex items-center justify-between'>
                          <label htmlFor="professionnel">J'accueille des voyageurs en tant que professionnel</label>
                          <input id="professionnel" type="radio" name="type_activity" />
                        </div>
                      </div>

                      <h3 className='mt-10 text-lg font-semibold'>Votre logement comprend-il les éléments suivants ?</h3>
                      <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                          <label htmlFor="cam">Caméras de surveillance</label>
                          <input id="cam" type="checkbox" name="type_activity" />
                        </div>
                        <div className='flex items-center justify-between'>
                          <label htmlFor="armes">Armes</label>
                          <input id="armes" type="checkbox" name="type_activity" />
                        </div>
                        <div className='flex items-center justify-between'>
                          <label htmlFor="pets">Animaux dangereux</label>
                          <input id="pets" type="checkbox" name="type_activity" />
                        </div>
                      </div>

                      <h3 className='mt-10 text-lg font-semibold'>Choses importantes à savoir</h3>
                      <p className='text-gray-600'>Vous attestez sur l'honneur respecter la législation locale et tout accord passé avec des tiers (tel un contrat de bail). Consultez la Politique de non-discrimination d'Airbnb, ainsi que les frais de voyageur et d'hôte. Mettez à jour vos conditions d'annulation une fois votre annonce publiée.</p>
                    </div>
                  }

                  { /* STEP 9 */}
                  { step === 9 && 
                    <h3 className='text-lg font-semibold'>Etape 9: Reviews avant de publier</h3>
                  }

                </div>
              </div>

              { /* Footer navigation form */ }
              <NavigationFooter 
                step={step}
                lastStep={lastStep}
                _backStepFrom={_backStepFrom}
                _nextStepFrom={_nextStepFrom}
                _onSubmitFrom={_onSubmitFrom}
              />
            </div>
          </div>
        </div>

      </main>
  
  </div>
  )
}

export async function getStaticProps() {

  const locationsTypeSelection = [{
    _id: "1",
    img: "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/46/c2/88.jpg",
    type: 'Appartent',
    description: "dvgil du kgfd poufhdo dqsnf oupdz vnv ZSDGO8  NGFEZD7b ngfomlubl pùfd b^o_gsfdhbdf dvn hqdfoidfi oiu fo ifd boiowdpfhbdf dfloi f !"
  },{
    _id: "2",
    img: "https://www.trecobois.fr/wp-content/uploads/2020/06/constructeur-maison-bois-sur-mesure-trecobois.jpg",
    type: 'Maison',
    description: "dvgil du kgfd poufhdo dqsnf oupdz vnv ZSDGO8  NGFEZD7b ngfomlubl pùfd b^o_gsfdhbdf dvn hqdfoidfi oiu fo ifd boiowdpfhbdf dfloi f !"
  },{
    _id: "3",
    img: "https://a0.muscache.com/im/pictures/7ad56bb1-ed9f-4dcb-a14c-2523da331b44.jpg?im_w=240",
    type: "Logement unique",
    description: "dvgil du kgfd poufhdo dqsnf oupdz vnv ZSDGO8  NGFEZD7b ngfomlubl pùfd b^o_gsfdhbdf dvn hqdfoidfi oiu fo ifd boiowdpfhbdf dfloi f !"
  },{
    _id: "4",
    img: "https://a0.muscache.com/im/pictures/d52fb4e7-39a4-46df-9bf9-67e56d35eeca.jpg?im_w=240",
    type: "Chambre d'hôte",
    description: "dvgil du kgfd poufhdo dqsnf oupdz vnv ZSDGO8  NGFEZD7b ngfomlubl pùfd b^o_gsfdhbdf dvn hqdfoidfi oiu fo ifd boiowdpfhbdf dfloi f !"
  },{
    _id: "5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Y2yw7qnCFqfOgkPmRNGN82jHGdbQ-OWlhw&usqp=CAU",
    type: 'Piscine',
    description: "bbudsvbozusidv  ndszouv zod^_jvùZDPOIM?VC ZDÖPIFGVHZEDoifazepùfvhbre vdpç ghrzov bfdqkmu ,qdsP9%FVRZEUFGOZDSNVEFQ%O8V QREFDZ9HR"
  },{
    _id: "6",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Green_field.jpg/250px-Green_field.jpg",
    type: 'Champ',
    description: "Vous avez un champ que vous n'utilisez pas, que se soit pour y mettre des animaux, l'utiliser pour l'agriculture ou faire des balo des pailles, metter le en location !"
  }];

  const optionsInLocation = {
    equipementsCommun: [
      {
        _id: '1',
        name: "Barbecue"
      },{
        _id: '2',
        name: "Picine"
      },{
        _id: '3',
        name: "Jacuzzi"
      },{
        _id: '4',
        name: "Patio"
      },{
        _id: '5',
        name: "Brasero"
      },{
        _id: '6',
        name: "billard"
      },{
        _id: '7',
        name: "Cheminée"
      },{
        _id: '8',
        name: "Espace repas en plain air"
      },{
        _id: '9',
        name: "Appareils de fitness"
      }
    ],
    equipementsVoyageurs: [
      {
        _id: '1',
        name: "Wifi"
      },{
        _id: '2',
        name: "Télévision"
      },{
        _id: '3',
        name: "Cuisine"
      },{
        _id: '4',
        name: "Lave-linge"
      },{
        _id: '5',
        name: "Parking gratuit sur place"
      },{
        _id: '6',
        name: "Parking payent sur place"
      },{
        _id: '7',
        name: "Climatisation"
      },{
        _id: '8',
        name: "Espace de travail dédié"
      },{
        _id: '9',
        name: "Douche extérieure"
      }
    ],
    equipementsSecurite: [
      {
        _id: '1',
        name: "Détecteur de fumée"
      },{
        _id: '2',
        name: "Kit de premiers secours"
      },{
        _id: '3',
        name: "Détecteur de monoxyte de carbone"
      },{
        _id: '4',
        name: "Extincteur"
      }
    ]
  }


  
  

  return {
    props : {
      locationsTypeSelection,
      optionsInLocation,
    }
  }
}

export default Host