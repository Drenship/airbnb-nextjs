import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({ data }) {
    const {title, img, location, description, star, price, total, long, lat} = data
    return (
        <div className="flex px-2 pr-4 transition duration-200 ease-out border-b rounded-lg cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
            <div className="relative flex-shrink-0 w-40 h-24 md:w-80 md:h-52">
                <Image src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg md:rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="cursor-pointer h-7"/>
                </div>
                
                <h4 className="text-xl">{title}</h4>
                <div className="w-10 pt-2 border-b" />
                
                <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

                <div className="flex justify-between">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400 cursor-pointer"/>
                        <span className="text-sm text-gray-800">{star}</span>
                    </p>
                    <div className="flex-col">
                        <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default InfoCard;