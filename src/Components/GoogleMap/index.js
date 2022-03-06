import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import parkData from "./data.json";
import { mapStyle } from "./mapStyle";
import Fade from 'react-reveal/Fade';

function Map() {
    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 25.2108253, lng: 55.2777097 }} defaultOptions={{ styles: mapStyle }}        >
            {parkData.features.map(park => (
                <Marker
                    key={park.properties.PARK_ID}
                    position={{
                        lat: park.geometry.coordinates[1],
                        lng: park.geometry.coordinates[0]
                    }}
                    onClick={() => { setSelectedPark(park); }}
                // icon={{
                //     url: `/skateboarding.svg`,
                //     scaledSize: new window.google.maps.Size(25, 25)
                // }}
                />
            ))}

            {selectedPark && (
                <InfoWindow
                    onCloseClick={() => { setSelectedPark(null); }}
                    position={{
                        lat: selectedPark.geometry.coordinates[1],
                        lng: selectedPark.geometry.coordinates[0]
                    }}
                >
                    <div>
                        <h4>{selectedPark.properties.NAME}</h4>
                        <p>{selectedPark.properties.DESCRIPTIO}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMapSection() {
    return (
        <Fade duration={2000}>

            <div style={{ width: "100%", height: "100%" }}>
                <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_SECRET_KEY}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </Fade>
    );
}