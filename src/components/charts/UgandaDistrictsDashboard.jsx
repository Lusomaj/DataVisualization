import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const UgandaDistrictsDashboard = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Data representing the districts and their coordinates
    const districts = [
      { name: 'Bugiri', coordinates: [0.5712, 33.7425] },
      { name: 'Bugweri', coordinates: [0.8266, 33.5689] },
      { name: 'Buikwe', coordinates: [0.2662, 32.9324] },
      { name: 'Iganga', coordinates: [0.6094, 33.4812] },
      { name: 'Jinja', coordinates: [0.4551, 33.2041] },
      { name: 'Kamuli', coordinates: [0.9387, 33.1212] },
      { name: 'Kamwenge', coordinates: [0.2213, 30.4217] },
      { name: 'Kayunga', coordinates: [0.7024, 32.8785] },
      { name: 'Lamwo', coordinates: [3.5167, 32.3500] },
      { name: 'Luuka', coordinates: [0.7072, 33.3009] },
      { name: 'Luwero', coordinates: [0.8494, 32.4731] },
      { name: 'Mubende', coordinates: [0.5901, 31.3722] },
      { name: 'Mukono', coordinates: [0.3546, 32.7556] },
      { name: 'Nakaseke', coordinates: [1.1714, 32.2333] },
      { name: 'Nakasongola', coordinates: [1.3083, 32.4678] },
      { name: 'Wakiso', coordinates: [0.4046, 32.4594] }
    ];

    // Set up the map container
    const mapContainer = d3.select(mapRef.current);

    // Define the projection for the map (you can customize the projection type)
    const projection = d3.geoMercator()
      .center([32.3, 1.2])
      .scale(4000);

    // Create the SVG element and set its dimensions
    const svg = mapContainer.append('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    // Load the map data (GeoJSON format) and draw the districts
    d3.json('uganda.geojson')
      .then(function (geojson) {
        // Create a path generator
        const path = d3.geoPath().projection(projection);

        // Draw the map
        svg.selectAll('path')
          .data(geojson.features)
          .enter().append('path')
          .attr('d', path)
          .attr('fill', '#ddd')
          .attr('stroke', '#888')
          .attr('stroke-width', 0.5);

        // Add labels for the districts
        svg.selectAll('text')
          .data(districts)
          .enter().append('text')
          .attr('x', function (d) { return projection(d.coordinates)[0] + 10; })
          .attr('y', function (d) { return projection(d.coordinates)[1]; })
          .text(function (d) { return d.name; })
          .attr('font-size', '10px')
          .attr('fill', 'black');

        // Add pins representing the districts
        svg.selectAll('circle')
          .data(districts)
          .enter().append('circle')
          .attr('cx', function (d) { return projection([d.coordinates[1], d.coordinates[0]])[0]; })
          .attr('cy', function (d) { return projection([d.coordinates[1], d.coordinates[0]])[1]; })
          .attr('r', 5)
          .attr('fill', 'red')
          .attr('stroke', 'black')
          .attr('stroke-width', 1)
          .on('mouseover', function (d) {
            // Show district name on mouseover
            console.log(d.name);
          })
          .on('mouseout', function (d) {
            // Remove district name on mouseout
            console.log('');
          });
      })
      .catch(function (error) {
        console.log(error);
      });

    // Cleanup function
    return () => {
      // Remove the SVG element
      svg.remove();
    };
  }, []);

  return (
    <div>
      <h1>Uganda Districts Dashboard</h1>
      <div ref={mapRef} id="map" style={{ width: '800px', height: '600px' }}></div>
    </div>
  );
};

export default UgandaDistrictsDashboard;
