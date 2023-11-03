import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const listings = [
    {
        lat: 40.7128,
        lng: -74.0060,
        name: 'Luxury Apartment',
        price: '$1,200,000',
        furniture: 'Furnished',
        image: 'img/1.png',
    },
    {
        lat: 40.7142,
        lng: -74.0119,
        name: 'Cozy House',
        price: '$750,000',
        furniture: 'Unfurnished',
        image: 'img/2.png',
    },
    {
        lat: 40.7189,
        lng: -74.0056,
        name: 'Modern Condo',
        price: '$950,000',
        furniture: 'Partially Furnished',
        image: 'img/3.png',
    },
];

const Map = () => {
    const listings = [
        {
            lat: 40.7128,
            lng: -74.0060,
            name: 'Luxury Apartment',
            price: '$1,200,000',
            furniture: 'Furnished',
            image: 'img/1.png',
        },
        {
            lat: 40.7142,
            lng: -74.0119,
            name: 'Cozy House',
            price: '$750,000',
            furniture: 'Unfurnished',
            image: 'img/2.png',
        },
        {
            lat: 40.7189,
            lng: -74.0056,
            name: 'Modern Condo',
            price: '$950,000',
            furniture: 'Partially Furnished',
            image: 'img/3.png',
        },
    ];

    const customIcon = L.divIcon({
        className: 'custom-icon',
        html: '',
        iconSize: [36, 36],
    });

    const [selectedListing, setSelectedListing] = useState<any>(null);

    return (
        <div>
            <style>
                {`
                .custom-icon {
                    background-color: #414548;
                    opacity: 0.8;
                    color: #fff;
                    border: 1px solid #c8c8c8;
                    border-radius: 7%;
                    text-align: center;
                    padding: 5px;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 12px;
                    cursor: pointer;
                }

                #property-details {
                    position: absolute;
                    z-index: 9999;
                    border: 1px solid #878787;
                    border-radius: 5%;
                    top: 60px;
                    left: 10px;
                    background-color: #fff;
                    opacity: 0.9;
                    padding: 10px;
                    max-width: 250px;
                    display: none;
                }

                #search {
                    position: absolute;
                    z-index: 9999;
                    border: 1px solid #878787;
                    border-radius: 2%;
                    top: 10px;
                    left: 10px;
                    background-color: #fff;
                    opacity: 0.9;
                    padding: 10px;
                    width: 250px;
                }

                .leaflet-control-zoom-in, .leaflet-control-zoom-out {
                    background-color: #fff;
                    opacity: 0.8;
                    border: 1px solid #ccc;
                    border-radius: 10%;
                }

                .image {
                    border-radius: 5%;
                    opacity: 1;
                }
                `}
            </style>
            <MapContainer
                style={{ height: '80vh', width: 'auto' }}
                center={[40.7128, -74.0060]}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {listings.map((listing, index) => (
                    <Marker
                        key={index}
                        position={[listing.lat, listing.lng]}
                        icon={L.divIcon({
                            className: 'custom-icon',
                            html: listing.price,
                            iconSize: [100, 24],
                        })}
                        eventHandlers={{
                            click: () => {
                                setSelectedListing(listing);
                            },
                        }}
                    />
                ))}

                {selectedListing && (
                    <div id="property-details">
                        <h1>{selectedListing.name}</h1>
                        <h4>Price: {selectedListing.price}</h4>
                        <p>Furniture: {selectedListing.furniture}</p>
                    </div>
                )}
            </MapContainer>
        </div>
    );
};

export default Map;
