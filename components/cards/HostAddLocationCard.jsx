import Image from "next/image";

function HostAddLocationCard({ item, locationType, setReturnLocationType }) {
    return (
        <label className={`relative flex p-5 mb-5 rounded-lg cursor-pointer button-click-effect ${locationType === item._id ? 'border-blue-500 border-2' : 'border'}`} htmlFor={`location-type-${item._id}`}>
            <div className="relative flex-shrink-0 w-20 h-20">
                <Image src={ item.img }
                    layout='fill'
                    objectFit='cover'
                    className="rounded-lg"
                />
                <div className='absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div className='flex-grow px-5'>
            <h2 className='text-xl font-bold select-none'>{ item.type }</h2>
            <p className="w-full text-gray-500 whitespace-pre-wrap select-none">{ item.description }</p>
            </div>
            <input required type='radio' id={`location-type-${item._id}`} value={ item._id } name='location-type' className='hidden' onClick={ (e) => setReturnLocationType(e.target.value)} />
        </label>
    )
}

export default HostAddLocationCard;