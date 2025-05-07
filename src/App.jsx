import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MapComponent from './components/MapComponent'

function App() {
  const [locationData, setLocationData] = useState({
    ip: '192.212.174.101',
    location: 'Brooklyn, NY 10001',
    timezone: 'UTC-05:00',
    isp: 'SpaceX Starlink',
    lat: 40.7128,
    lon: -74.0060,
  });

  const updateLocation = (ip) => {
    const apiKey = '?';
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Błąd API: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (data && data.location) {
          setLocationData({
            ip: data.ip || 'Brak danych',
            location: data.location.city
              ? `${data.location.city}, ${data.location.region} ${data.location.postalCode || ''}`
              : 'Brak lokalizacji',
            timezone: data.location.timezone ? `UTC${data.location.timezone}` : 'Brak danych',
            isp: data.isp || 'Brak danych',
            lat: data.location.lat || 40.7128,
            lon: data.location.lng || -74.0060,
          });
        } else {
          throw new Error('Brak danych lokalizacji');
        }
      })
      .catch((error) => {
        console.error('Błąd API:', error);
        setLocationData({
          ip: 'Błąd ładowania',
          location: 'Błąd ładowania',
          timezone: 'Błąd ładowania',
          isp: 'Błąd ładowania',
          lat: 40.7128,
          lon: -74.0060,
        });
      });
  };

  return (
    <div>
      <Header updateLocation={updateLocation} locationData={locationData} />
      <MapComponent position={[locationData.lat, locationData.lon]} />
    </div>
  );
}

export default App;