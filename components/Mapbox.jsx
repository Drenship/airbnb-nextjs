import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import Image from 'next/image';

function Mapbox({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    
    // The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates);

    
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });


    return (
        <ReactMapGL 
            mapStyle='mapbox://styles/drenship/cl4sqyxlm000r14unlszc1voo' 
            mapboxApiAccessToken={process.env.mapbox_key}
           {...viewport}
           onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >


        {
            searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                    >
                        <p 
                            role='img'
                            className='text-2xl cursor-pointer animate-bounce'
                            onClick={() => setSelectedLocation(result)}
                            aria-label='push-pin'
                        >
                            📌
                        </p>
                    </Marker>

                    {/* The popup that should show if we click on Marker */}
                    {
                        selectedLocation.long === result.long && (
                            <Popup
                                onClose={() => setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={result.lat}
                                longitude={result.long}
                                className="z-50 w-[230px]"
                                
                            >
                                <div className='flex-col'>
                                    <div className='relative w-full h-24'>
                                        <Image src={result.img}
                                            layout='fill'
                                            objectFit='cover'
                                            className='rounded-lg'
                                        />
                                    </div>
                                    <h4 className='text-sm font-semibold text-gray-500'>{result.title}</h4>
                                </div>
                                
                            </Popup>
                        )
                    }
                </div>
        ))}

        </ReactMapGL>
    )
}

export default Mapbox;