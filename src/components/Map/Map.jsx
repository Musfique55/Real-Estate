// import { useCallback, useMemo, useState } from "react";
// import { render } from "react-dom";
// import { MapContainer, Rectangle, TileLayer, useMap, useMapEvent } from "react-leaflet";
// 
// import { render } from "react-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import css from "../../index.css"
// import { MapContainer } from 'react-leaflet';
const Map = () => {
        return(
            <div>
           <MapContainer>
           <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
           </MapContainer>
      </div>
        )
};

export default Map;