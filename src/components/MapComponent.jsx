import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapUpdater = ({ position }) => {
  const map = useMap(); // Hook do dostępu do instancji mapy Leaflet
  useEffect(() => {
    map.setView(position, 13); // Przesuń mapę do nowej pozycji z zoomem 13
  }, [position, map]); // Wykonaj przy każdej zmianie position
  return null; // Komponent pomocniczy nie renderuje nic
};

const MapComponent = ({ position = [52.2297, 21.0122] }) => {
  return (
    <MapContainer
      center={position} // Początkowa pozycja
      zoom={13}
      style={{ height: 'calc(100vh - 291px)', width: '100%', zIndex: 1 }}
      zoomControl={false}
    >
      <MapUpdater position={position} /> {/* Komponent aktualizujący widok */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          There it is
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;