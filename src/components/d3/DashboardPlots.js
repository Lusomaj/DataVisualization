import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
// import RadarChart from './RadarChart';
// import { Tree } from "@d3/tree"
import { ReactRadarChart } from 'd3-radarchart';
import { Col, Row } from 'react-bootstrap';
import { Loader } from 'rsuite';


const DashBoardPlots = (props) => {
    const { districtData, limits, district } = props;
    const [activeDistrict, setActiveDistrict] = useState(district);
    const [radarData, setRadarData] = useState({});
    const [districtProps, setDistrictProps] = useState([]);
    const [districtPropValues, setDistrictPropValues] = useState([]);

    const convertData = (data) => {
        const treeData = {
            name: 'Uganda(16)',
            type: "black",
            level: "yellow",
            value: 16,
            children: []
        };

        for (var key in data) {
            const district = {
                name: key.charAt(0).toUpperCase() + key.slice(1),
                type: "black",
                level: "yellow",
                children: []
            }
            district['value'] = data[key].length
            district['color'] = data[key].length < 5 ? 'red' : (data[key].length < 10 ? '#ffc107' : '#28a745')
            treeData.children.push(district);
        }

        return treeData;
    };

    useEffect(() => {
        const treeData = convertData(districtData);

        // set the dimensions and margins of the diagram
        const margin = { top: 30, right: 90, bottom: 35, left: 150 },
            width = 1324 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        var treemap = d3.tree().size([width, height]);

        //  assigns the data to a hierarchy using parent-child relationships
        var nodes = d3.hierarchy(treeData);

        // maps the node data to the tree layout
        nodes = treemap(nodes);

        // append the svg obgect to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        // document.getElementById('treeWrapper').innerHTML = '';
        // var svg = d3.select("#treeWrapper").append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom),
        //     g = svg.append("g")
        //         .attr("transform",
        //             "translate(" + margin.left + "," + margin.top + ")");

        // adds the links between the nodes
        // g.selectAll(".link")
        //     .data(nodes.descendants().slice(1))
        //     .enter().append("path")
        //     .attr("class", "link")
        //     .style("stroke", d => d.data.color)
        //     .attr("d", function (d) {
        //         return "M" + d.x + "," + d.y
        //             + "C" + d.x + "," + (d.y + d.parent.y) / 2
        //             + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
        //             + " " + d.parent.x + "," + d.parent.y;
        //     });

        // // adds each node as a group
        // var node = g.selectAll(".node")
        //     .data(nodes.descendants())
        //     .enter().append("g")
        //     .attr("class", function (d) {
        //         return "node" +
        //             (d.children ? " node--internal" : " node--leaf");
        //     })
        //     .attr("transform", function (d) {
        //         return "translate(" + d.x + "," + d.y + ")";
        //     });

        // adds the circle to the node
        // node.append("circle")
        //     .attr("r", d => d.data.value)
        //     .style("fill", d => d.data.color)
        //     .style("cursor", "pointer");

        // // adds the text to the node
        // node.append("text")
        //     .attr("dy", ".35em")
        //     .attr("y", 27)
        //     .style("text-anchor", "middle")
        //     .text(function (d) { return d.data.name; });

        // node.on("click", (e, d) => {
        //     if (d.data.children.length === 0) {
        //         setActiveDistrict(d.data.name);
        //     }
        // });
    }, []);

    const generateRandomColor = () => {
        let maxVal = 0xFFFFFF;
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }

    const getDistrictProperties = () => {
        const plotData = {}
        if (activeDistrict !== '') {
            plotData['axisConfig'] = [];
            plotData['data'] = [];
            plotData['sourceTypes'] = {
                boreHoles: 0,
                wells: 0,
                springs: 0,
                piped: 0,
                others: 0
            };
            const districtValues = districtData[activeDistrict.toLocaleLowerCase()];
            for (var i = 4; i < districtValues[0].length; i++) {
                if (districtValues[1][i] !== '') {
                    plotData.axisConfig.push({
                        label: districtValues[0][i],
                        axisId: `key_${i}`,
                        position: i,
                        axisValueMax: districtValues[1][i],
                        axisValueMin: districtValues[1][i]
                    });
                }
            }

            for (var i = 1; i < districtValues.length; i++) {
                const plotPropertyValues = [];
                for (var j = 0; j < plotData.axisConfig.length; j++) {
                    plotPropertyValues.push({
                        axis: plotData.axisConfig[j]['axisId'],
                        value: districtValues[i][plotData.axisConfig[j]['position']]
                    });
                    if (districtValues[i][plotData.axisConfig[j]['position']] > plotData.axisConfig[j]['axisValueMax']) {
                        plotData.axisConfig[j]['axisValueMax'] = districtValues[i][plotData.axisConfig[j]['position']];
                    }
                    if (districtValues[i][plotData.axisConfig[j]['position']] < plotData.axisConfig[j]['axisValueMin']) {
                        plotData.axisConfig[j]['axisValueMin'] = districtValues[i][plotData.axisConfig[j]['position']];
                    }
                }
                const waterSource = {
                    name: districtValues[i][0],
                    label: districtValues[i][1].replaceAll(' ', ''),
                    seriesId: districtValues[i][0].replaceAll(' ', '').toLocaleLowerCase(),
                    dragEnabled: true,
                    showCircle: true,
                    circleHighlight: true,
                    fill: generateRandomColor(),
                    data: plotPropertyValues
                };

                if ((districtValues[i][0].toLocaleLowerCase()).includes('bore')) {
                    waterSource['sourceType'] = 'Bore Hole';
                    plotData['sourceTypes']['boreHoles'] += 1;
                } else if ((districtValues[i][0].toLocaleLowerCase()).includes('spring')) {
                    waterSource['sourceType'] = 'spring';
                    plotData['sourceTypes']['springs'] += 1;
                } else if ((districtValues[i][0].toLocaleLowerCase()).includes('well')) {
                    waterSource['sourceType'] = 'Well';
                    plotData['sourceTypes']['wells'] += 1;
                } else if ((districtValues[i][0].toLocaleLowerCase()).includes('piped') || (districtValues[i][0].toLocaleLowerCase()).includes('tap')) {
                    waterSource['sourceType'] = 'Piped';
                    plotData['sourceTypes']['piped'] += 1;
                } else {
                    waterSource['sourceType'] = 'Others';
                    plotData['sourceTypes']['others'] += 1;
                }
                plotData.data.push(waterSource);
            }
        }

        return plotData;
    };

    useEffect(() => {
        const radarPlotData = getDistrictProperties();
        const { data, axisConfig, sourceTypes } = radarPlotData;
        const options = {
            chartRootName: 'variables',
            data,
            showLegend: true,
            rootElementId: 'chart',
            axisConfig,
            dim: {
                title: 'Source Parameters'
            }
        };

        setRadarData(options);

        // Plot Source Type Distribution
        if (radarPlotData.sourceTypes) {
            var piePlots = [sourceTypes['boreHoles'], sourceTypes['wells'], sourceTypes['springs'], sourceTypes['piped'], sourceTypes['others']];
            var labels = piePlots;
            var width = 270,
                height = 300,
                radius = Math.min(width, height) / 2;
            document.getElementById('sourceTypeDistribution').innerHTML = '';
            var svg = d3.select("#sourceTypeDistribution").append("svg")
                .attr("width", width)
                .attr("height", height);
            svg.append("g")
                .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
                .append("text")
                .text("Distribution of Water Sources")
                .attr("class", "title");
            var g = svg.append("g")
                .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");

            var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#b6c5f3', '#984ea3']);

            // Generate the pie
            var pie = d3.pie();

            // Generate the arcs
            var arc = d3.arc()
                .innerRadius((radius - 30) / 2)
                .outerRadius(radius - 30);

            //Generate groups
            var arcs = g.selectAll("arc")
                .data(pie(piePlots))
                .enter()
                .append("g")
                .attr("class", "arc")

            //Draw arc paths
            arcs.append("path")
                .attr("fill", function (d, i) {
                    return color(i);
                })
                .attr("d", arc);
            arcs.on("mouseover", function (d, i) {
                var sector = d3.select(this);
                var path = sector.select('path');
                path.style("fill", "grey");
            }).on("mouseout", function (d, i) {
                var sector = d3.select(this);
                var path = sector.select('path');
                path.style("fill", color(i));
            });
            arcs.append('text')
                .attr("transform", function (d, i) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .text(function (d, i) {
                    return (((labels[i] * 100) / (labels[0] + labels[1] + labels[2] + labels[3] + labels[4]))).toFixed(2) + '%';
                });
        }

        if (typeof axisConfig !== 'undefined') {
            setDistrictProps(axisConfig);
            setDistrictPropValues(data);
        }
    }, [activeDistrict]);

    const generateScatterValues = (key) => {
        const scatterValues = {
            ticks: [''],
            values: [],
            max: 0,
        };
        for (var x = 0; x < districtPropValues.length; x++) {
            scatterValues['ticks'].push(districtPropValues[x]['label']);

            // Get property value
            for (var y = 0; y < districtPropValues[x]['data'].length; y++) {
                if (districtPropValues[x]['data'][y]['axis'] === key) {
                    scatterValues['values'].push({
                        source: districtPropValues[x]['label'],
                        value: districtPropValues[x]['data'][y]['value'],
                        sourceType: districtPropValues[x]['sourceType']
                    });
                    if (scatterValues['max'] < districtPropValues[x]['data'][y]['value']) {
                        scatterValues['max'] = districtPropValues[x]['data'][y]['value'];
                    }
                    break;
                }
            }
        }

        return scatterValues;
    };
    const toggleDistrictProps = (e) => {
        const key = e.target.value;

        const margin = { top: 10, right: 30, bottom: 75, left: 60 },
            width = 600 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        document.getElementById('propLineAnchor').innerHTML = '';
        const svg = d3.select("#propLineAnchor")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const scatterValues = generateScatterValues(key);

        var x = d3.scalePoint()
            .domain(scatterValues['ticks'])
            .range([0, width]);

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", `translate(-10, 10)rotate(-55)`)
            .style("text-anchor", "end");

        // Draw property Limits
        const prop = document.getElementById(`prop_${key}`).innerHTML;
        const limit = limits[prop];
        var scaleMax = scatterValues['max'];
        if (limit['max'] > scatterValues['max']) {
            scaleMax = limit['max']
        }


        // Add Y axis
        const y = d3.scaleLinear()
            .domain([0, scaleMax])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Add dots
        svg.append('g')
            .selectAll("dot")
            .data(scatterValues['values'])
            .join("circle")
            .attr("cx", function (d) { return x(d.source); })
            .attr("cy", function (d) { return y(d.value); })
            .attr("r", 5)
            .style("fill", (d) => {
                if (d.sourceType === 'spring') {
                    return '#ff7f00';
                }

                if (d.sourceType === 'Well') {
                    return '#377eb8';
                }
                if (d.sourceType === 'Bore Hole') {
                    return '#4daf4a';
                }
                if (d.sourceType === 'Piped') {
                    return '#b6c5f3';
                }

                return '#984ea3';
            });

        // X label
        svg.append('text')
            .attr('x', width / 2)
            .attr('y', height + 73)
            .style('font-size', 12)
            .text('Water Sources');

        svg.append('text')
            .attr('transform', 'translate(-40,225)rotate(-90)')
            .style('font-size', 12)
            .text('Parameter Value');


        if (limit['max'] > 0) {
            svg.append("path")
                .datum(scatterValues['values'])
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 1)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.source) })
                    .y(function () { return y(limit['max']) })
                )
        }
        if (limit['min'] > 0) {
            svg.append("path")
                .datum(scatterValues['values'])
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 1)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.source) })
                    .y(function () { return y(limit['min']) })
                )
        }

        // Add the line
        if (limit['max'] === 0) {
            svg.append("path")
                .datum(scatterValues['values'])
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.source) })
                    .y(function () { return y(scatterValues['max'] / 2) })
                )
        }
    };

    return (
        <>
            <div className='row'>
                <hr className='divider' />
                {activeDistrict !== '' &&
                    <>
                        <div className='col-md-12'>
                            {/* <h5 className='text-success text-center'>District Statistics:&nbsp;{activeDistrict}</h5> */}
                        </div>
                        <div className='col'>&nbsp;</div>
                        {/* {radarData.data &&
                            <>
                                <div className='col-md-8'>
                                    <ReactRadarChart
                                        key={activeDistrict}
                                        rootElementProps={{ className: 'chartRootClass' }}
                                        {...radarData} />
                                </div>
                            </>
                        } */}
                        
                        <Row style={{position: 'relative'}}>
                             <div className='col-md-4 text-center inner-graph'>
                                <div id='sourceTypeDistribution'>
                                    {/* Anchor for Pie Plot */}
                                </div>
                                <table className='pie-key-table text-center row justify-content-md-center' >
                                    <tbody className=' text-center col justify-content-md-center'>
                                        <tr>
                                            <td className='bore-holes'></td>
                                            <td className='text-muted'>Bore Holes</td>
                                        </tr>
                                        <tr>
                                            <td className='wells'></td>
                                            <td className='text-muted'>Wells</td>
                                        </tr>
                                        <tr>
                                            <td className='springs'></td>
                                            <td className='text-muted'>Springs</td>
                                        </tr>
                                        <tr>
                                            <td className='piped'></td>
                                            <td className='text-muted'>Tap</td>
                                        </tr>
                                        <tr>
                                            <td className='labels-unknown'></td>
                                            <td className='text-muted'>Others</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        {districtProps.length > 0 ? (<Col style={{position: 'relative'}} className='inner-graph'>
                                <div className='col text-right' style={{float: 'right'}}>
                                    <select
                                        id='district_prop'
                                        onChange={toggleDistrictProps} selected='pH'>
                                        <option value='prop'>Select Property</option>
                                        {
                                            districtProps.map((property) => (
                                                <option id={`prop_${property.axisId}`} key={property.axisId} value={property.axisId}>{property.label}</option>
                                            ))
                                        }
                                    </select>
                                     <div id='propLineAnchor' className='mr-auto' style={{float: 'right'}}></div>
                          
                                </div>
                               
                            </Col>): (<Loader center size='md' content="Fetching parameter data..."></Loader>)
                            
                        }
                        
                        
                        
                        </Row>
                        
                        
                    </>
                }
            </div>
        </>
    );
}
export default DashBoardPlots;
