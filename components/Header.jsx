import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { SearchIcon, GlobeAltIcon, MenuIcon,UserCircleIcon, UsersIcon, HomeIcon, LoginIcon, PlusIcon } from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Link from "next/link";

function Header({ placeholder }) {

    const toggleMenuRef = useRef();

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [openSidebar, setOpenSidebar] = useState(false);

    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    // select date range
    const _handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    // reset input search
    const _resetInput = () => setSearchInput('')
    
    // search redirect
    const _search = () => {
        if(searchInput.length === 0) return;
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.getTime(),
                endDate: endDate.getTime(),
                numberOfGuests: numberOfGuests, 
            }
        })
    }


    // sidebar open / close
    const _toggleSidebar = () => {
        const toggle = openSidebar ? false : true
        setOpenSidebar(toggle)
    }

    // sidebar click event close
    const clickListener = useCallback(e => {
        if (toggleMenuRef.current && !toggleMenuRef.current.contains(e.target)) setOpenSidebar(false)
    }, [toggleMenuRef])

    // sidebar keyboard event close
    const escapeListener = useCallback(e => {
        if (e.key === 'Escape') {
            setOpenSidebar(false)
        }
    }, [])

    // sidebar init event
    useEffect(() => {
        if(toggleMenuRef){
            document.addEventListener('click', clickListener)
            document.addEventListener('keyup', escapeListener)
        }
        return () => {
          document.removeEventListener('click', clickListener)
          document.removeEventListener('keyup', escapeListener)
        }
    }, [clickListener, escapeListener, toggleMenuRef])

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 px-5 py-5 bg-white shadow-md md:px-10">

            { /* left logo */ }
            <div 
                onClick={() => router.push('/')}
                className="relative flex items-center h-10 my-auto cursor-pointer"
            >
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            { /* center search */ }
            <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) =>{
                        if(e.key === 'Enter'){
                            setSearchInput(e.target.value);
                            _search();
                        }
                    }}
                    className="flex-grow pl-5 bg-transparent outline-none" 
                    type='text' 
                    placeholder={placeholder || "Start your search"} 
                />
                <SearchIcon className="hidden h-8 min-w-[2rem] p-2 text-white bg-red-400 rounded-full cursor-pointer min-w-2 mw-2 md:inline-flex md:mx-2" onClick={_search} />
            </div>

            { /* right menu */ }
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <Link href="/user/host">
                    <a className="hidden cursor-pointer md:inline">Become a host</a>
                </Link>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex p-2 space-x-2 border-2 rounded-full cursor-pointer" ref={ toggleMenuRef } onClick={_toggleSidebar}>
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            { /* right menu */ }
            {
                searchInput && (
                    <div className="flex flex-col max-w-[540px] col-span-3 mx-auto sm:w-full">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                            onChange={_handleSelect}
                        />
                        <div className="flex items-center mb-4 border-b">
                            <h2 className="flex-grow text-2xl font-semibold">Nulber of Guests</h2>
                            
                            <UsersIcon className="h-5" />
                            <input
                                value={numberOfGuests}
                                onChange={(e) => setNumberOfGuests(e.target.value)}
                                type='number' 
                                className="w-12 pl-2 text-lg text-red-400 outline-none" 
                                placeholder="1"
                                min={1}
                            />
                        </div>
                        <div className="flex">
                            <button className="flex-grow text-gray-500" onClick={_resetInput}>Cancel</button>
                            <button className="flex-grow text-red-400" onClick={_search}>Search</button>
                        </div>
                    </div>
                )
            }

            { /* Sidebar */ }
            <div className={`absolute top-0 z-50 w-full h-[100vh] bg-white border-l shadow-xl sm:w-[300px] transition duration-200 ${openSidebar ? 'right-0' : 'right-[-300px] hidden'}`}>
                <h3 className="p-4 text-xl font-bold">Menu</h3>
                <Link href="/">
                    <a className="flex p-4 font-semibold border-t border-b cursor-pointer button-click-effect"><HomeIcon className="w-5 mr-2" />Accueil</a>
                </Link>
                <Link href="/user/profil">
                    <a className="flex p-4 font-semibold border-b cursor-pointer button-click-effect"><UsersIcon className="w-5 mr-2" />Profil</a>
                </Link>
                <Link href="/user/host">
                    <a className="flex p-4 font-semibold border-b cursor-pointer button-click-effect"><PlusIcon className="w-5 mr-2" />Mettre en location</a>
                </Link>
                <Link href="/auth/login">
                    <a className="flex p-4 font-semibold border-b cursor-pointer button-click-effect"><LoginIcon className="w-5 mr-2" />Connection</a>
                </Link>
            </div>

        </header>
    )
}

export default Header;
