import Image from "next/image";

function LocationCard({ item }){
    return (
        <div className="flex flex-col overflow-hidden border rounded-xl shadow-lg max-w-[320px] min-w-[320px] w-full cursor-pointer button-click-effect">
            
            <div className="relative w-full h-40">
                <Image 
                    src={item.img}
                    layout='fill'
                    objectFit="cover"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold">{ item.title }</h3>
                <p className="text-sm text-gray-600 truncate">{ item.description }</p>
                <p className="font-bold text-right">30€</p>
            </div>

        </div>
    )
}

export default LocationCard;