import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Rating({ rating }) {
    return (
        <span className='flex'>
            <StarIcon className={`w-5 ${ rating >= 1 ? 'text-yellow-400' : 'text-gray-600' }`} />
            <StarIcon className={`w-5 ${ rating >= 2 ? 'text-yellow-400' : 'text-gray-600' }`} />
            <StarIcon className={`w-5 ${ rating >= 3 ? 'text-yellow-400' : 'text-gray-600' }`} />
            <StarIcon className={`w-5 ${ rating >= 4 ? 'text-yellow-400' : 'text-gray-600' }`} />
            <StarIcon className={`w-5 ${ rating >= 5 ? 'text-yellow-400' : 'text-gray-600' }`} />
        </span>
    )
}

function CommentaireCard({ img, name, rating, description, date }) {
    return(
        <div className='mt-5'>
            <div className='flex justify-start space-x-3'>
                <div className='relative w-14 h-14'>
                    <Image src={ img } 
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full'
                    />
                </div>
                <div>
                    <h4 className='font-semibold'>{ name }</h4>
                    <p className='flex space-x-2'>
                        <Rating rating={rating} />
                        <span className='text-gray-400'>•</span>
                        <span className='text-gray-400'>{ date }</span>
                    </p>
                </div>
            </div>
            <p className='px-2 py-4'>{ description }</p>
        </div>
    )
}
export default CommentaireCard;