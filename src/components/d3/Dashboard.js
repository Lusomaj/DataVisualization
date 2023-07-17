import React, { useState, useEffect } from 'react';
import DashBoardPlots from './DashboardPlots';
import { Loader, Placeholder } from 'rsuite';


const Dashboard = ({district}) => {
    const [districts, setDistricts] = useState([]);
    const [districtData, setDistrictData] = useState({});
    const [dataReady, setDataReady] = useState(false)

    const [properties] = useState([
        'Village',
        'Lab Identifier Code',
        'GPS',
        'District',
        'pH',
        'Field Temperature',
        'Dissolved Oxygen',
        'Turbidity',
        'Electrical Conductivity',
        'Total Hardness',
        'Calcium',
        'Magnesium',
        'Sodium',
        'Potassium',
        'Bicarbonates',
        'Fluoride',
        'Nitrates as N',
        'Nitrites as N',
        'Ammonium as N',
        'Phosphates as P',
        'Manganese',
        'Total Iron',
        'Silica',
        'Mercury',
        'E.coli',
        'Color (Apparent)',
        'Total Alkalinity',
        'Flouride',
        'Sulphate',
        'Chloride',
        'Free Chlorine',
        'Calcium Hardness',
        'Total Dissolved Solids',
        'Magnesium Hardness'
    ]);
    const propertyLimits = {
        'pH': {
            min:5.5,
            max:9.5
        },
        'Field Temperature':{
            min:0,
            max: 0
        },
        'Dissolved Oxygen':{
            min:0,
            max: 0
        },
        'Turbidity':{
            min:0,
            max: 25
        },
        'Electrical Conductivity':{
            min:0,
            max: 2500
        },
        'Total Hardness':{
            min:0,
            max: 600
        },
        'Calcium':{
            min:0,
            max: 0
        },
        'Magnesium':{
            min:0,
            max: 0
        },
        'Sodium':{
            min:0,
            max: 200
        },
        'Potassium':{
            min:0,
            max: 50
        },
        'Bicarbonates':{
            min:0,
            max: 400
        },
        'Fluoride':{
            min:0,
            max: 1.5
        },
        'Sulphate':{
            min:0,
            max: 400
        },
        'Nitrates as N':{
            min:0,
            max: 10
        },
        'Nitrites as N':{
            min:0,
            max: 0.9
        },
        'Ammonium as N':{
            min:0,
            max: 0.5
        },
        'Phosphates as P':{
            min:0,
            max: 0.7
        },
        'Manganese':{
            min:0,
            max: 0.1
        },
        'Total Iron':{
            min:0,
            max: 0.5
        },
        'Silica':{
            min:0,
            max: 30
        },
        'Mercury':{
            min:0,
            max: 0
        },
        'E.coli':{
            min:0,
            max: 1
        },
        'Color (Apparent)':{
            min:0,
            max: 50
        },
        'Total Alkalinity':{
            min:100,
            max: 200
        },
        'Flouride':{
            min:0,
            max: 1.5
        },
        'Chloride':{
            min:0,
            max: 250
        },
        'Free Chlorine':{
            min:0,
            max: 0
        },
        'Calcium Hardness':{
            min:0,
            max:600
        },
        'Total Dissolved Solids':{
            min:0,
            max:1500
        },
        'Magnesium Hardness':{
            min:0,
            max:600
        }
    }
    const xlsx = require("xlsx");

    const incrementColumn = (letter) => {
        if(letter === 'Z'){
            return 'AA';
        }

        if (letter.length > 1) {
            return letter[0] + String.fromCharCode(letter.charCodeAt(1) + 1);
        }

        return String.fromCharCode(letter.charCodeAt(0) + 1);
    };

    const getWaterSources = (workSheet) => {
        const sources = [];
        for (var i = 2; i < 40; i++) {
            const cell = workSheet[`B${i}`];
            if (cell) {
                if (cell['v'].trim() === 'Source Name') {
                    let column = 'D';
                    for (var x = 0; x < 50; x++) {
                        if (!workSheet[`${column}${i}`]) {
                            continue;
                        }

                        if (!workSheet[`${incrementColumn(column)}${i}`]) {
                            break;
                        }

                        sources.push({
                            name: workSheet[`${column}${i}`]['v'].trim(),
                            column: column
                        });
                        column = incrementColumn(column);
                    }
                    break;
                }
            }
        }

        return sources;
    };

    const getDistrictData = (workSheet) => {
        const waterSources = getWaterSources(workSheet);
        const data = [properties];

        for (var index in waterSources) {
            const villageDetails = [
                waterSources[index]['name']
            ];
            for (var c = 1; c < properties.length; c++) {
                let propertyValue = '';
                for (var i = 3; i < 40; i++) {
                    const cell = workSheet[`B${i}`];
                    if (cell) {
                        let cellProperty = cell['v'].replace('Chlorides', 'Chloride').trim();
                        let property = properties[c].replace('Chlorides', 'Chloride').trim();
                        property = property.replace('Total', '');
                        property = property.replace('-N', '');
                        property = property.replace(' as CaCO3', '');
                        property = property.replace(' as P', '');
                        property = property.replace(' as N', '');
                        property = property.replace('Sulphates', 'Sulphate');
                        property = property.replace('Total disolved solids', 'Total Disolved Solids');

                        cellProperty = cellProperty.replace('Total', '');
                        cellProperty = cellProperty.replace('-N', '');
                        cellProperty = cellProperty.replace(' as CaCO3', '');
                        cellProperty = cellProperty.replace(' as P', '');
                        cellProperty = cellProperty.replace(' as N', '');
                        cellProperty = cellProperty.replace('Sulphates', 'Sulphate');
                        cellProperty = cellProperty.replace('Total disolved solids', 'Total Disolved Solids');
                        if (cellProperty.toLowerCase() === property.toLowerCase() && workSheet[`${waterSources[index]['column']}${i}`]) {
                            propertyValue = workSheet[`${waterSources[index]['column']}${i}`]['v']
                            if (typeof propertyValue === 'string' && propertyValue[0] === '<') {
                                propertyValue = parseFloat(propertyValue.replace('<', ''));
                            }
                            break;
                        }
                    }
                }
                villageDetails.push(propertyValue);
            }
            data.push(villageDetails);
        }

        return data;
    };

    useEffect(() => {
        fetch('http://localhost:3000/Water-Quality-Dataset.xlsx')
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const data = e.target.result
                    const workbook = xlsx.read(data, { type: "array" });

                    const sheets = [];
                    const sheetData = {};
                    workbook.SheetNames.forEach((sheet) => {
                        if (sheet !== '_xltb_storage_') {
                            sheets.push(sheet.toLowerCase());
                            sheetData[sheet.toLowerCase()] = getDistrictData(workbook.Sheets[sheet]);
                        }
                    });

                    setDistricts(sheets);
                    setDistrictData(sheetData);
                }
                reader.readAsArrayBuffer(blob);
                setDataReady(true)
            });
    }, []);

    return (
        <>
        
        {districtData[districts[0]] ?  (<DashBoardPlots district={district} limits={propertyLimits} districtData={districtData}/>) : (<div style={{position: 'relative'}}>
        <Placeholder.Paragraph rows={8} />
        <Loader center size="lg" content="Loading the dataset...."/>
        </div> )}
        </>
    );
}
export default Dashboard;
