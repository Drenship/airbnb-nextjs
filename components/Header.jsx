import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon,UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 px-5 py-5 bg-white shadow-md md:px-10">

            { /* left logo */ }
            <div className="relative flex items-center h-10 my-auto cursor-pointer">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            { /* center search */ }
            <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
                <input className="flex-grow pl-5 bg-transparent outline-none" type='text' placeholder="Start your search" />
                <SearchIcon className="hidden h-8 min-w-[2rem] p-2 text-white bg-red-400 rounded-full cursor-pointer min-w-2 mw-2 md:inline-flex md:mx-2" />
            </div>

            { /* right menu */ }
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden cursor-pointer md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex p-2 space-x-2 border-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

        </header>
    )
}

export default Header;
