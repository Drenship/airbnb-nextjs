import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] select-none">
            <Image src="https://wallpaperaccess.com/full/16111.jpg" 
                layout='fill'
                objectFit="cover"
                loading="lazy"
            />
            <div className="absolute w-full text-center top-1/2">
                <p className="text-sm text-white sm:text-lg">Not sure where tyo go? Perfect.</p>
                <button className="px-10 py-4 my-3 font-bold text-purple-500 transition duration-150 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90">View more</button>
            </div>
        </div>
    )
}

export default Banner;
