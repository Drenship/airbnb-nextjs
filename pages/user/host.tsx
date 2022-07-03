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


interface Props { 
  locationsTypeSelection: []
}

const Host: NextPage<Props> = ({ locationsTypeSelection }) => {

  const [scroll, setScroll] = useState(false)

  const [step, setStep] = useState(1)
  const [locationType, setLocationType] = useState(null); // step 1 - input

  const [geoLocationSelected, setGeoLocationSelected] = useState(null); // step 4 - coordinate
  
  const [title, setTitle] = useState(''); // step 4 - input
  const [description, setDescription] = useState(''); // step 4 - input
  const [files, setFiles] = useState<any>([]); // step 4 - input
  
  

  const [serviceList, setServiceList] = useState<any>([]); // step 7 - array [list]

  const lastStep = 8;

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
                    <div>
                      <h3 className='text-lg font-semibold'>Etape 6: Description avancées options ...</h3>

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
                    <h3 className='text-lg font-semibold'>Etape 8: Reviews avant de publier</h3>
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Y2yw7qnCFqfOgkPmRNGN82jHGdbQ-OWlhw&usqp=CAU",
    type: 'Piscine',
    description: "bbudsvbozusidv  ndszouv zod^_jvùZDPOIM?VC ZDÖPIFGVHZEDoifazepùfvhbre vdpç ghrzov bfdqkmu ,qdsP9%FVRZEUFGOZDSNVEFQ%O8V QREFDZ9HR"
  },{
    _id: "4",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Green_field.jpg/250px-Green_field.jpg",
    type: 'Champ',
    description: "Vous avez un champ que vous n'utilisez pas, que se soit pour y mettre des animaux, l'utiliser pour l'agriculture ou faire des balo des pailles, metter le en location !"
  }];

  return {
    props : {
      locationsTypeSelection: locationsTypeSelection,
    }
  }
}

export default Host