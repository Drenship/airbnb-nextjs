export default function NavigationFooter({ step, lastStep, _backStepFrom, _nextStepFrom, _onSubmitFrom }) {
    return <div className='flex items-center justify-between mt-5'>
        <p className='font-semibold'>Etape {step} sur {lastStep}</p>
        <div>
        {
            step > 1 && <button 
            onClick={_backStepFrom}
            className='px-5 py-3 mr-2 font-semibold text-white bg-red-400 rounded-lg button-click-effect'
            >Retour</button>
        }
        {
            step < lastStep && <button 
            onClick={_nextStepFrom}
            className='px-5 py-3 font-semibold text-white bg-blue-600 rounded-lg button-click-effect'
            >Suivant</button>
        }

            {
            step === lastStep && <button 
            onClick={_onSubmitFrom}
            className='px-5 py-3 font-semibold text-white bg-blue-600 rounded-lg button-click-effect'
            >Publier</button>
        }
        </div>
    </div>
}