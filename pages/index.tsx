import React, { useState } from 'react';
import { Basemap } from "../devlink"
import { NavbarTest } from "../devlink"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Info } from "../devlink";
import * as _Builtin from "../devlink";
import { Img } from "../devlink";
import { Name } from "../devlink";
import { Detail } from "../devlink";
import { Price } from "../devlink";
import * as _utils from "../devlink";
import _styles from "./Info.module.css";
import { Menu } from "../devlink";
import { PriceDiv } from "../devlink";
import { PointGreen } from "../devlink";


const listings = [
  {
    lat: 40.7128,
    lng: -74.0060,
    name: 'Sunnydale Heights',
    price: '$1,200,000',
    furniture: '4 bed | 3 bath | 5635 sqft',
    image: '/img/1.png',
  },
  {
    lat: 40.7142,
    lng: -74.0119,
    name: 'Silverstone Park',
    price: '$750,000',
    furniture: '2 bed | 2 bath | 2032 sqft',
    image: '/img/2.png',
  },
  // Add more properties with unique names
  {
    lat: 40.70535806086409,
    lng: -74.013422631434,
    name: 'Greenwood Manor',
    price: '$950,000',
    furniture: '3 bed | 2 bath | 3104 sqft',
    image: '/img/3.png',
  },
  {
    lat: 40.7185,
    lng: -74.0080,
    name: 'Riverside Retreat',
    price: '$1,500,000',
    furniture: '5 bed | 4 bath | 4500 sqft',
    image: '/img/4.png',
  },
  {
    lat: 40.71625442609324,
    lng: -73.99587724156416,
    name: 'Sunset Haven',
    price: '$2,500,000',
    furniture: '6 bed | 5 bath | 6800 sqft',
    image: '/img/5.png',
  },
  {
    lat: 40.7210,
    lng: -74.0075,
    name: 'Historic Charm House',
    price: '$1,800,000',
    furniture: '4 bed | 3 bath | 3800 sqft',
    image: '/img/6.png',
  },
  {
    lat: 40.7148389082538,
    lng: -73.98400709281515,
    name: 'Waterfront Paradise',
    price: '$3,200,000',
    furniture: '7 bed | 6 bath | 7500 sqft',
    image: '/img/7.png',
  },
  {
    lat: 40.72256304521797,
    lng: -73.9934262415134,
    name: 'Skyline Penthouse',
    price: '$4,500,000',
    furniture: '8 bed | 7 bath | 8000 sqft',
    image: '/img/8.png',
  },
  {
    lat: 40.7225,
    lng: -74.0135,
    name: 'Mountain Retreat',
    price: '$1,350,000',
    furniture: '3 bed | 2 bath | 2400 sqft',
    image: '/img/9.png',
  },
];



export default function Page() {
  const [selectedListing, setSelectedListing] = useState(null);

  const handleMarkerClick = (listing) => {
    setSelectedListing(listing);
  };

  return (
    <>
      <Basemap
        mapbase={
          <MapContainer
            style={{ height: '100vh', width: 'auto' }}
            center={[40.7128, -74.0060]}
            zoom={15}
          >
            <NavbarTest />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <style>
              {`
                .leaflet-container a{
                  color: black;
                  font-weight: normal;
                }
                .custom-icon {
                  position: relative;
                  z-index: 99999;

                  display: block;
                  width: 100px;
                  height: 25px;
                  min-height: 25px;
                  min-width: 100px;
                  margin: auto;
                  padding: 3px;
                  text-align: center;
                  color: white;

                  border-style: solid;
                  border-width: 1px;
                  border-color: rgb(30, 29, 29);
                  border-radius: 30px;

                  background-color: hsla(0, 0%, 0%, 0.689);

                  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);

                  backdrop-filter: blur(5px);

                  object-fit: fill;
                }
              `}
            </style>

            {listings.map((list, index) => (
              <Marker
                key={index}
                position={[list.lat, list.lng]}
                icon={L.divIcon({
                  className: 'custom-icon',
                  html: list.price,
                  iconSize: [100, 15],
                })}
                eventHandlers={{
                  click: () => {
                    handleMarkerClick(list);
                  },
                }}
              />
            ))}
          {selectedListing && (
            <Info info={selectedListing && (
              <div id="property-details">
                <Menu />
                <Img img={selectedListing.image} />
                <Name name={selectedListing.name} />
                <Detail detail={selectedListing.furniture}/>
                <PriceDiv>
                  <PointGreen />
                  <Price price={selectedListing.price}/>
                </PriceDiv>
              </div>
            )} />
            // <Info/>
              
          )}
          </MapContainer>
        }
      />
    </>
  );
}
