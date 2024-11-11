import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Coordinates for Ota, Ogun State, Nigeria
const otaCoordinates = { lat: 6.6583, lng: 3.0290 };

// Make sure to use a proper icon URL, or use a default icon for testing
const icon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // Default marker icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapComponent: React.FC = () => {
  const markerRef = useRef(null);

  useEffect(() => {
    // Open the Popup automatically when the component mounts
    if (markerRef.current) {
                //@ts-ignore
      markerRef.current.leafletElement.openPopup();
    }
  }, []);

  return (
    <MapContainer
            //@ts-ignore
      center={[otaCoordinates.lat, otaCoordinates.lng]}
      zoom={14}
      style={{ height: "400px", width: "100%" }}
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //@ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker with Popup and custom icon */}
      {/* @ts-ignore */}
      <Marker position={[otaCoordinates.lat, otaCoordinates.lng]} icon={icon} ref={markerRef}>
        <Popup>
          Plot 25 Block 7, Ogun State Housing Estate, <br />
          Off Idiroko, Ota, Ogun State, Nigeria
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;