import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3PieChart = ({ dataset }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Set up the dimensions and radius for the pie chart
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    // Select the chart container using the ref
    const chartContainer = d3.select(chartRef.current);

    // Create a new pie layout
    const pie = d3.pie().value(d => d.value);

    // Create an arc generator
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.8)
      .outerRadius(radius * 0.8);

    // Create a color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Append a group element to the chart container and translate it to the center
    const chart = chartContainer
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Generate the pie slices
    const slices = chart.selectAll('path').data(pie(dataset)).enter().append('path');

    // Set the attributes for each slice
    slices
      .attr('d', arc)
      .attr('fill', (d, i) => color(i))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    // Add labels to the slices
    const labelArc = d3.arc().innerRadius(radius * 0.6).outerRadius(radius * 0.8);
    const labels = chart
      .selectAll('text')
      .data(pie(dataset))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(d => d.data.name);

    chart
      .selectAll('text')
      .data(pie(dataset))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${outerArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text(d => d.data.name);
      // Position labels outside the slices
    labels
      .attr('transform', d => {
        const pos = labelArc.centroid(d);
        const midAngle = Math.atan2(pos[1], pos[0]);
        const x = Math.cos(midAngle) * (radius * 0.9);
        const y = Math.sin(midAngle) * (radius * 0.9);
        return `translate(${x}, ${y})`;
      });

  }, [dataset]);

  return <svg width={500} height={500} ref={chartRef} />;
};

export default D3PieChart;
