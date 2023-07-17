import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

export const colors = [
  "#FF0000FF", // Red
  "#FFA500FF", // Orange
  "#FFFF00FF", // Yellow
  "#00FF00FF", // Lime
  "#0000FFFF", // Blue
  "#8A2BE2FF", // Blue Violet
  "#4B0082FF", // Indigo
  "#FF00FFFF", // Magenta
  "#FF69B4FF", // Hot Pink
  "#DC143CFF", // Crimson
  "#FF7F50FF", // Coral
  "#FF4500FF", // Orange Red
  "#FFFF00FF", // Yellow
  "#ADFF2FFF", // Green Yellow
  "#00FA9AFF", // Deep Sky Blue
  "#9400D3FF", // Dark Violet
  "#8B008BFF", // Dark Magenta
  "#FF1493FF", // Deep Pink
  "#00CED1FF", // Dark Turquoise
  "#1E90FFFF", // Dodger Blue
  "#00BFFFFF", // Cyan
  "#B0E0E6FF", // Powder Blue
  "#2E8B57FF", // Sea Green
  "#32CD32FF", // Lime Green
  "#FFD700FF", // Gold
  "#FF8C00FF", // Dark Orange
  "#8B0000FF", // Dark Red
  "#FF00FFFF", // Magenta
  "#BA55D3FF", // Medium Orchid
  "#A0522DFF"  // Sienna
];


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const  D3RadarChart = ({ options, dataset, name, lebels}) => {

const data = {
  labels: lebels,
  datasets: [
    {
      label: name,
      data: dataset,
      backgroundColor: colors,
      borderWidth: 1,
    },
  ],
};


  return <PolarArea options={options} style={{ width: '300px !important', height: '100% !important' }} data={data} />;
}

export default D3RadarChart
