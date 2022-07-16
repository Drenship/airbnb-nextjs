import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import ReactMapGL, { Marker } from 'react-map-gl';

import Loader from '../Loader';

function Step3({ geoLocationSelected, setReturnGeoLocationSelected }) {
    const [geoLocation, setGeoLocation] = useState(geoLocationSelected ? geoLocationSelected.place_name : '');
    const [geoSuggestList, setGeoSuggestList] = useState([]);
    const [loaded, setLoaded] = useState(false);


    const latLong = geoLocationSelected 
        ? {
            latitude: Number(geoLocationSelected?.center[1]),
            longitude: Number(geoLocationSelected?.center[0])
        }
        : {
            latitude: 48.856614,
            longitude: 2.3522219
        }
    
    const [coordinate, setCoordinate] = useState(latLong);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        zoom: 13,
    });

    useEffect(() => {
        const geolocation = async () => {
            try {
                const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${geoLocation}.json?access_token=${process.env.MAPBOX_KEY}&autocomplete=true`;
                const response = await fetch(endpoint);
                const results = await response.json();
                setGeoSuggestList(results?.features);
            } catch (error) {
                console.log("Error fetching data, ", error);
            }
        } 
        
        if(geoLocation.length > 3) geolocation();
    }, [geoLocation]);

    const _selectGeoLocation = (item) => {
        setGeoLocation(item.place_name)
        setReturnGeoLocationSelected(item)
        setGeoSuggestList(null)
        const newCoordinate = {
            latitude: Number(item.center[1]),
            longitude: Number(item.center[0])
        }
        setCoordinate(newCoordinate);
        setViewport(Object.assign(viewport, newCoordinate))
    }

    return (
        <div className='flex flex-col'>
            <h3 className='text-lg font-semibold'>Etape 3: Localisation</h3>
            <div className='flex flex-col mt-10'>      
                <div className="w-full">
                    <input 
                        type='text' 
                        onChange={e => setGeoLocation(e.target.value)} 
                        placeholder='Geolocation ...'
                        className={`w-full p-4 font-bold uppercase border-b-2 outline-none transition duration-200 ease-out ${geoLocation.length > 0 && 'border-blue-500'}`}
                        value={geoLocation}
                    />
                </div>
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 z-50 w-full">
                        {
                            geoSuggestList?.map((item, key) => {
                                return <div key={key} className="bg-white cursor-pointer button-click-effect" onClick={e => _selectGeoLocation(item)}>
                                    <h3 className="p-4 font-bold border-b">{ item.place_name }</h3>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="mt-10 w-full max-w-[100vw] max-h-[400px] h-[50vh] border-red relative">
                    <ReactMapGL 
                        mapStyle='mapbox://styles/drenship/cl4sqyxlm000r14unlszc1voo' 
                        mapboxApiAccessToken={process.env.mapbox_key}
                        {...viewport}
                        onViewportChange={(nextViewport) => setViewport(nextViewport)}
                        onLoad={() => setLoaded(true)}
                    >
                        <Marker
                            longitude={coordinate.longitude}
                            latitude={coordinate.latitude}
                        >
                            <p role='img' className='text-2xl cursor-pointer animate-bounce' aria-label='push-pin'>
                                <LocationMarkerIcon className="text-red-700 w-7" />
                            </p>
                        </Marker>
                    </ReactMapGL>
                    {
                        !loaded && <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500">
                            <Loader />
                        </div>
                    }
                </div>
                

            </div>
        </div>
    )
}

export default Step3;