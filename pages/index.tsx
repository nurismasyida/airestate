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





export default function Page() {
  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <>
      <NavbarTest/>
    </>
  );
}
