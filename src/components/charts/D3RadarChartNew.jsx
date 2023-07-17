import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

function UgandaMap() {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch('uganda-with-regions_.geojson')
      .then(response => response.json())
      .then(data => setGeojsonData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Uganda Map</h1>
      <MapContainer style={{ height: '400px', width: '100%' }} center={[0.3476, 32.5825]} zoom={6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        />
        {geojsonData && (
          <GeoJSON data={geojsonData} style={{ color: 'green', weight: 2 }} />
        )}
      </MapContainer>
    </div>
  );
}

export default UgandaMap;
