import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as d3 from 'd3';
import chroma from 'chroma-js';

const MapComponent = () => {
  useEffect(() => {
    // Load the CSV data
    d3.csv('processed.csv')
      .then(data => {
        // Create a Leaflet map
        const map = L.map('map').setView([0.3476, 32.5825], 7); // Set the initial map view coordinates and zoom level
        // Add a tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 18
        }).addTo(map);
        // Define the color scale for the choropleth
        const colorScale = chroma.scale(['green', 'yellow', 'red']).domain([0, 100, 500]);
        // Create a color legend
        const legend = L.control({ position: 'bottomright' });
        legend.onAdd = function () {
          const div = L.DomUtil.create('div', 'legend');
          const labels = ['Low', 'Medium', 'High'];
          const colors = ['#00ff00', '#ffff00', '#ff0000'];
          div.innerHTML += '<div><strong>Legend</strong></div>';
          // Loop through the labels and colors to create the legend items
          for (let i = 0; i < labels.length; i++) {
            div.innerHTML += `<div><span class="legend-color" style="background-color:${colors[i]}"></span><span class="legend-label">${labels[i]}</span></div>`;
          }
          return div;
        };
        legend.addTo(map);
        // Iterate over the data points and create markers for each one
        data.forEach(point => {
          const lat = parseFloat(point.latitude);
          const lng = parseFloat(point.longitude);
          // Ignore data points with NaN coordinates
          if (isNaN(lat) || isNaN(lng)) {
            console.warn('Invalid coordinates for data point:', point);
            return;
          }
          try {
            // Create a marker with a popup containing information about the data point
            const marker = L.marker([lat, lng]).addTo(map);
            marker.bindPopup(`
              <strong>Village:</strong> ${point.village}<br>
              <strong>District:</strong> ${point.district}<br>
              <strong>E. coli:</strong> ${point.ecoli}<br>
              <strong>pH:</strong> ${point.ph}<br>
              <strong>Turbidity:</strong> ${point.turbidity}<br>
              <strong>Total Dissolved Salts:</strong> ${point.total_dissolved_salts}
            `);
            // Determine the fill color based on the value of total_dissolved_salts
            const fillColor = colorScale(Number(point.total_dissolved_salts));
            // Create a circle marker with the corresponding fill color
            const circleMarker = L.circleMarker([lat, lng], { fillColor, color: 'black', fillOpacity: 0.8, radius: 8 });

            // Add hover event to display values on hover
            circleMarker.on('mouseover', function (e) {
              this.openPopup();
            });
            circleMarker.on('mouseout', function (e) {
              this.closePopup();
            });
            circleMarker.addTo(map);
          } catch (error) {
            console.error('Error creating marker:', error);
          }
        });
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default MapComponent;
