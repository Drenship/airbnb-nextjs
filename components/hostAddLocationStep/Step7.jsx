import { TicketIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react';
import _onTextareaAutosize from '../../utils/TextAreaAutosize';

function Step7({ setReturnServiceList, serviceList }) {

    const descriptionRef = useRef(null);

    const [extrasName, setExtrasName] = useState("");
    const [extrasDescription, setExtrasDescription] = useState("");
    const [extrasPrice, setExtrasPrice] = useState(0);

    
    const _addExtras = (e) => {
        e.preventDefault()
        if(extrasName.length > 0 && extrasPrice > 0){
            setReturnServiceList([...serviceList, {
                name: extrasName,
                description: extrasDescription,
                price: extrasPrice
            }])
            setExtrasName('');
            setExtrasDescription('');
            setExtrasPrice(0);
            const extraForm = document.getElementById('extras-form');
            if(extraForm) extraForm.reset();
        }
    }

    return (
        <div className='flex flex-col'>
        <h3 className='text-lg font-semibold'>Etape 7: Vous proposez des extras supplémentaires. <span className='text-sm italic text-gray-600'>(facultatif)</span></h3>
        <div className='flex flex-col mt-10'>
          { /* add service */ }
          <div className='flex p-3 mt-3 border-2 rounded-xl'>
            <TicketIcon className='flex-shrink-0 h-12 p-1 mr-4 border-2 border-black rounded-xl' />
            <form name='extras-form' id='extras-form' className='flex-grow' onSubmit={(e) => _addExtras(e)}>                          
              <input 
                onChange={(e) => setExtrasName(e.target.value) }
                className='w-full p-2 font-semibold border-2 rounded-lg outline-none focus:border-black'
                name='extra-name' 
                type='text' 
                placeholder="Nom de l'extras"
                maxLength={80}
              />
              <textarea 
                onChange={(e) =>{
                    setExtrasDescription(e.target.value)
                    _onTextareaAutosize(e, descriptionRef) 
                }}
                className='w-full p-2 mt-4 text-sm text-gray-800 border-2 rounded-lg outline-none focus:border-black'
                name='extra-description' 
                placeholder='Ajouter une description en 250 caractéres maximum' 
                maxLength={250}
                ref={descriptionRef}
              />
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center justify-start'>
                  <input 
                    onChange={(e) => setExtrasPrice(e.target.value) }
                    type='number' 
                    name='extra-price' 
                    className='w-12 font-semibold text-center border-b-2 input-number-style' 
                    placeholder='0'
                  />
                  <span className='font-semibold'>€</span>
                </div>
                <button 
                  className='px-4 py-1 font-semibold text-gray-600 border rounded-full hover:border-black button-click-effect hover:text-black'
                  type='submit'
                >Ajouter</button>
              </div>
            </form>
          </div>
          
          { /* show service */ }
          <div  className='flex flex-col pt-10 mt-10 border-t'>
            <h3 className='text-lg font-semibold'>Mes extras</h3>
            {
              serviceList?.map((item, key) => <div key={key} className='flex p-3 mt-3 border-2 rounded-xl'>
                <TicketIcon className='h-12 p-1 mr-4 border-2 border-black rounded-xl' />
                <div>
                  <h4 className='font-bold'>{ item.name }</h4>
                  <p className='text-sm text-gray-800'>{ item.description }</p>
                  <p className='pt-2 font-semibold'>{ item.price } €</p>
                </div>
            </div>)
            }
          </div>

        </div>
      </div>
    )
}

export default Step7;