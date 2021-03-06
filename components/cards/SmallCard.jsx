import Image from "next/image";

function SmallCard({ data }) {
    const { img, location, distance } = data
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out cursor-pointer rounded-b-xl hover:bg-gray-100 hover:scale-105">
            { /* Left µ*/ }
            <div className="relative w-16 h-16">
                <Image src={img} 
                    layout='fill' 
                    className="rounded-lg"
                />
            </div>

            { /* Right µ*/ }
            <div>
                <h2>{ location }</h2>
                <h3 className="text-gray-500">{ distance }</h3>
            </div>
        </div>
    )
}

export default SmallCard;
