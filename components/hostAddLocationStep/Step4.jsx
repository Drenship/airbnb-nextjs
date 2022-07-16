import { useRef } from 'react';
import _onTextareaAutosize from '../../libs/utils/TextAreaAutosize';

function Step4({ title, setReturnTitle, description, setReturnDescription }) {

    const descriptionRef = useRef(null);
    
    return (
        <div className='flex flex-col'>
            <h3 className='text-lg font-semibold'>Etape 4: Titre & description</h3>
            <div className='flex flex-col mt-10'>
            <label htmlFor='title' className='text-xl font-semibold'>Titre</label>
            <input 
                onChange={(e) => setReturnTitle(e.target.value) }
                className={`p-2 mt-2 border-2 rounded-lg outline-none focus:border-black ${ title.length > 0 ? title.length > 5 ? 'border-blue-500' : 'border-red-600' : '' }`} 
                name='title' 
                type='text' 
                placeholder='Donnée un titre à votre bien'
                maxLength={80}
                defaultValue={title}
            />
            </div>

            <div className='flex flex-col mt-10'>
            <label htmlFor='description' className='text-xl font-semibold'>Description</label>
            <textarea 
                onChange={(e) =>{ 
                    setReturnDescription(e.target.value)
                    _onTextareaAutosize(e, descriptionRef)
                }}
                className={`p-2 mt-2 border-2 rounded-lg outline-none focus:border-black ${ description.length > 0 ? 'border-blue-500' : '' }`}
                name='description' 
                placeholder='Ajouter une description en 500 caractéres maximum' 
                maxLength={500}
                defaultValue={description}
                ref={descriptionRef}
            />
            </div>
        </div>
    )
}

export default Step4;