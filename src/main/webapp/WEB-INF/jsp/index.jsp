<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" %> <%@ taglib
uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<link
	href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
	rel="stylesheet" id="bootstrap-css">
<script src="https://d3js.org/d3.v4.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<style>
.vertical_col {
	background-color: #F9F9F9;
}

/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : Oct 9, 2021, 4:31:41 PM
    Author     : Lusoma Joseph
*/
body {
	color: #154d88;
	background: rgba(233, 237, 241, 0.27);
	font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
	font-size: 13px;
	font-weight: 400;
	line-height: 1.471;
}

.box-inner {
	border: 1px solid #DEDEDE;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	box-shadow: 0 0 10px rgba(189, 189, 189, 0.4);
	-webkit-box-shadow: 0 0 10px rgba(189, 189, 189, 0.4);
	-moz-box-shadow: 0 0 10px rgba(189, 189, 189, 0.4);
}

.box-header {
	border: none;
	padding-top: 5px;
	border-bottom: 1px solid #DEDEDE;
	border-radius: 3px 3px 0 0;
	-webkit-border-radius: 3px 3px 0 0;
	-moz-border-radius: 3px 3px 0 0;
	height: 35px;
	min-height: 35px !important;
	margin-bottom: 0;
	font-weight: bold;
	font-size: 16px;
	background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%,
		rgba(0, 0, 0, 0.1) 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255,
		255, 255, 0)), color-stop(100%, rgba(0, 0, 0, 0.1)));
	background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%,
		rgba(0, 0, 0, 0.1) 100%);
	background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0%,
		rgba(0, 0, 0, 0.1) 100%);
	background: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 0%,
		rgba(0, 0, 0, 0.1) 100%);
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%,
		rgba(0, 0, 0, 0.1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',
		endColorstr='#1a000000', GradientType=0);
}

.box {
	margin-top: 10px;
	margin-bottom: 10px;
}

.box-header h2 {
	font-size: 15px;
	width: auto;
	clear: none;
	float: left;
	line-height: 25px;
	white-space: nowrap;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0;
}

.box-header h3 {
	font-size: 13px;
	width: auto;
	clear: none;
	float: left;
	line-height: 25px;
	white-space: nowrap;
}

.box-header h2>i {
	margin-top: 1px;
}

.box-icon {
	float: right;
}

.box-icon a {
	clear: none;
	float: left;
	margin: 0 2px;
	height: 20px;
	width: 5px;
	margin-top: 1px;
}

.box-icon a i {
	margin-left: -6px;
	top: -1px;
}

.box-content {
	padding: 10px;
}

.panel-actions {
	margin-top: -20px;
	margin-bottom: 0;
	text-align: right;
}

.panel-actions a {
	color: #333;
}

.panel-fullscreen {
	display: block;
	z-index: 9999;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	overflow: auto;
}

.ajax-loader {
	visibility: hidden;
	background-color: rgba(255, 255, 255, 0.7);
	position: absolute;
	z-index: +100 !important;
	width: 100%;
	height: 100%;
}

.ajax-loader img {
	position: relative;
	top: 50%;
	left: 50%;
}

.box1 h3 {
	text-align: center;
	position: relative;
	top: 80px;
}

.box1 {
	width: 100%;
	height: 140px;
	background: #FFF;
	margin: 40px auto;
}

/*==================================================
 * Effect 1
 * ===============================================*/
.effect1 {
	-webkit-box-shadow: 0 10px 6px -6px #777;
	-moz-box-shadow: 0 10px 6px -6px #777;
	box-shadow: 0 10px 6px -6px #777;
}

input.post_input_text {
	font-family: Tahoma;
	font-size: 11px;
	font-weight: normal;
	color: #000000;
	width: 90%;
	height: 20px;
	padding-left: 5px;
	padding-top: 2px;
	padding-bottom: 0px;
	border: 1px solid #b1cadb;
	background-color: white;
}
</style>

<link rel="stylesheet"
	href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<style>
#map {
	height: 500px;
}
</style>

<style>
/* Add any custom styling here */
.bar {
	fill: steelblue;
}

.bar:hover {
	fill: orange;
}

.legend {
	font-size: 12px;
}

.tooltip {
	background-color: #333;
	color: #fff;
	padding: 5px;
	display: none;
	position: absolute;
	z-index: 10;
}

.chart {
	height: 500px;
	overflow: auto;
}

.pie-legend {
	list-style: none;
	margin: 0;
	padding: 0;
}

.pie-legend span {
	display: inline-block;
	width: 14px;
	height: 14px;
	border-radius: 100%;
	margin-right: 16px;
	margin-bottom: -2px;
}

.pie-legend li {
	margin-bottom: 10px;
}
</style>
<style>
#imageContainer {
	height: 400px;
	overflow-y: scroll;
}

img {
	width: 100%;
	height: auto;
	margin-bottom: 10px;
	display: block;
}
</style>

<title>Water Quality Visualisation - Joseph Lusoma</title>
</head>

<body>

	<div id="maincontent" class="row">

		<div id="teminalDetailsDiv"></div>
		<div class="row" style="margin-left: 1.5%">
			<div class="box row panel panel-default" style="width: 100%">
				<div class="box-inner" style="height: 100%">
					<div data-original-title="" class="box-header well panel-heading">
						<h2>
							<i class="glyphicon glyphicon-credit-card panel-title"></i> WATER
							QUALITY VISUALIZATIONS BY JOSEPH LUSOMA, 2022/HD05/1194U
							
						</h2>

						<ul class="list-inline panel-actions pull-right"
							style="margin-top: 2px">
							<li><a href="#" id="panel-fullscreen" role="button"
								title="Toggle fullscreen"><i
									class="glyphicon glyphicon-resize-full"></i></a></li>
						</ul>
					</div>



					<div class="box-content panel-body" id="box_content">
						<div class="row" style="margin-left: 0%" id="respDiv1">
							<ul class="nav nav-tabs">
								<li class="active"><a data-toggle="tab" href="#info" onclick="showCharts();">Data
										Visualization</a></li>
								<li>
								<li><a data-toggle="tab" href="#resultDiv" onclick="showMap();"> Map
										Visualizations</a></li>

							</ul>

							<div class="tab-content"
								style="margin-top: -15px; border-style: none" id="viewcontents">
								<div id="info" class="tab-pane fade in active">

									<div class="row">&nbsp;</div>
									<div class="row">&nbsp;</div>

									<div id='searchview' style="float: left"
										class="col-lg-12 col-md-12 col-sm-12">
										<div class="row" id="searchBox">

											<div class="col-lg-12 col-md-12 col-sm-12">


												<table class="table table-bordered table-full-width">
													<tbody>
														<tr>

															<td class="vertical_col">DISTRICT<span
																class="symbol required"></span></td>
															<td class="vertical_row" style="background-color: white">
																<select class="form-control selectpicker"
																name="district" id="district">
																	<option value="">SELECT DISTRICT</option>
																	<c:forEach items="${model.districts}" var="district">
																		<option value="${district}">${district}</option>
																	</c:forEach>
															</select>
															</td>


														</tr>

													</tbody>
												</table>


												<table class="pull-right">
													<tbody>
														<tr>

															<td class="post_section_footer_left"><select
																class="form-control selectpicker" name="column"
																id="column">
																	<option value="0">SOURCE</option>
																	<option value="1">VILLAGE</option>
																	<option value="2">PARISH</option>
																	<option value="3">SUBCOUNTY</option>
																	<option value="4">COUNTY</option>
															</select></td>
															<td class="post_section_footer_left"><select
																class="form-control selectpicker" name="location"
																id="location">
																	<option value="">SELECT LOCATION</option>
																	<c:forEach items="${model.districts}" var="district">
																		<option value="${district}">${district}</option>
																	</c:forEach>
															</select></td>
															<td class="post_section_footer_right"><select
																class="form-control selectpicker" name="measurement"
																id="measurement">
																	<option value="">SELECT MEASUREMENTS</option>

															</select></td>
														</tr>
													</tbody>
												</table>
											</div>


											<div class="col-lg-8 col-md-8 col-sm-8 pull-left"
												style="margin-top: 10dp; height: 500dp; overflow: auto;">
												<div class="chart" id="histogram"></div>
												<div class="chart" id="linechart"></div>
												<div class="chart" id="barchart"></div>
												<div id="map"></div>
												<div class="chart" id="piechart"></div>
											</div>
											<div class="col-lg-4 col-md-4 col-sm-4 pull-right"
												style="margin-top: 10dp; height: 500dp; overflow: auto;">
												<h1>An Overview of the district's data</h1>
												<div id="imageContainer" style="margin-top: 10dp;overflow:auto"></div>
											</div>
										</div>
									</div>
									<div id='searchResult' style="float: left; margin-top: 1%"
										class="col-lg-12 col-md-12 col-sm-12"></div>


								</div>

								<div id="resultDiv" class="tab-pane fade in active"
									style="display: none">
									<div class="col-lg-12 col-md-12 col-sm-12"
										style="margin_top: 10dp">
										
										<img class="chart" src="img/uganda.png"
											alt="Uganda, Water Quality Districts" style="width:500px;">
									</div>
								</div>


							</div>
						</div>



					</div>


				</div>



			</div>
		</div>
	</div>

	</div>
	<!-- jQuery (load it before Bootstrap JavaScript) -->
	<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>

	<!-- Bootstrap JavaScript -->
	<script
		src="https://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

	<script src="js/general.js"></script>
	<script src="js/dhtmlwindow.js"></script>

	<script src="js/ajaxCalls.js"></script>
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
	<script>
		var header = "";
		var recordData = "";
		var recordsArr = [];
		var districtname = ""
		function clearInputs() {
			document.getElementById('cardnumber').value = '';
			document.getElementById('customerId').value = '';
			document.getElementById('accountId').value = '';
		}

		function validateB4Submit() {
			valError = false;
			var pan = document.getElementById('cardnumber').value;
			var customerId = document.getElementById('customerId').value;
			var accountId = document.getElementById('accountId').value;
			var firstname = '';// document.getElementById('firstname').value;
			var lastname = '';//document.getElementById('lastname').value;

			//console.log('pan ' + pan);
			//console.log('CustomerId: '+customerId);
			//console.log('AccountId: '+accountId);

			clearDiv('searchResult');
			ajaxSubmitData('cardmanagement.htm', 'searchResult',
					'act=searchresults&pan=' + pan + '&customerId='
							+ customerId + '&lastname=' + lastname
							+ '&firstname=' + firstname + '&accountId='
							+ accountId
							+ '&i=0&b=a&c=a&d=0&ofst=1&maxR=100&sStr=', 'GET');

		}
	</script>

	<script type="text/javascript">
		$(document).ready(
				function() {
					//Toggle fullscreen
					$("#panel-fullscreen").click(
							function(e) {
								e.preventDefault();
								var $this = $(this);
								if ($this.children('i').hasClass(
										'glyphicon-resize-full')) {
									$this.children('i').removeClass(
											'glyphicon-resize-full');
									$this.children('i').addClass(
											'glyphicon-resize-small');
								} else if ($this.children('i').hasClass(
										'glyphicon-resize-small')) {
									$this.children('i').removeClass(
											'glyphicon-resize-small');
									$this.children('i').addClass(
											'glyphicon-resize-full');
								}
								$(this).closest('.panel').toggleClass(
										'panel-fullscreen');
							});
				});
	</script>




	<script type="text/javascript">
	function showMap(){
		 document.getElementById('info').style.display = 'none';
		 document.getElementById('resultDiv').style.display = 'block';
	}
	function showCharts(){
		 document.getElementById('info').style.display = 'block';
		 document.getElementById('resultDiv').style.display = 'none';
	}
	
	$('#column')
	.on(
			'change',
			function(e) {
				if (this.value.length > 0) {
					console.log('Value: '+this.value);
					createchat(this.value);
				}
			});
		$('#district')
				.on(
						'change',
						function(e) {
							
							 header = "";
						     recordData = "";
							 recordsArr = [];
							//console.log(this.value,this.options[this.selectedIndex].value,$(this).find("option:selected").val(), );
							//alert(this.value)
							if (this.value.length > 0) {
								districtname = this.value;

								$
										.ajax({
											type : "GET",
											cache : false,
											url : "getdistrictdataheader.htm",
											data_type : 'JSON',
											data : {
												"districtname" : districtname
											},
											success : function(response) {

												//console.log(response);
												//alert(response);
												//const cleanedJsonString = removeBadControlCharacters(response);

												result = JSON.parse(response);

												//console.log(result);
												// var result = JSON.parse(response);

												for (index in result) {
													header = result[index].header;
													console.log(header);
												}

												//Fetching the District Data

												$.ajax({
															type : "GET",
															cache : false,
															url : "getdistrictdata.htm",
															data_type : 'JSON',
															data : {
																"districtname" : districtname
															},
															success : function(
																	response) {

																//console.log(response);
																//alert(response);
																const cleanedJsonString = removeBadControlCharacters(response);
																const result = JSON
																		.parse(cleanedJsonString);

																//console.log(result);
																// var result = JSON.parse(response);

																/*for (record in result) {
																	recordData = result[record].record;
																	recordsArr .push(recordData);
																	console.log(recordData);
																}*/
																
																var keys = Object.keys(result);
																for (var i = 0; i < keys.length - 1; i++) {
																  var recordData = result[keys[i]].record;
																  recordsArr.push(recordData);
																  console.log(recordData);
																}
																
																createchat(0);
																															    
															
															}
														});

											}
										});
							}
						});

		
			function createchat(source, location=null,measure=null){
				clearDiv("barchart");
				clearDiv("linechart");
				clearDiv("histogram");
				clearDiv("piechart");
				
				
				var headerArr = header.split(",");
			    var numericColumns = headerArr.slice(6); // Get all columns starting from the 7th column (index 6)

			   
			    if (districtname==='Jinja' || districtname==='Bugiri' || districtname==='Iganga' || districtname==='Mukono') {
			    	numericColumns = headerArr.slice(7);
			    	} 
			    
			    var data = recordsArr.map(record => {
			      var dataArr = record.split(",");
			      var obj = {
			        village: dataArr[source]?.trim() // Get the village from the record (Assuming it's in the 2nd column)
			      };
			      numericColumns.forEach((col, index) => {
			        obj[col?.trim()] = parseFloat(dataArr[index + 6]?.trim());
			      });
			      return obj;
			    });

			    if(location != null){
			    	data = location;
			    }
			    if(measure != null){
			    	var measureIndex = headerArr.indexOf(measure);
			    	numericColumns = numericColumns[measureIndex];
			    	
			    	//data =  location.map(record => record[measureIndex]);
			    }
			    
			    
			    // Set up chart dimensions
			    var margin = { top: 20, right: 150, bottom: 50, left: 60 };
			    var width = 800 - margin.left - margin.right;
			    var height = 400 - margin.top - margin.bottom;

			    // Create SVG element
			    var svg = d3.select("#linechart")
			      .append("svg")
			      .attr("width", width + margin.left + margin.right)
			      .attr("height", height + margin.top + margin.bottom)
			      .append("g")
			      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			    // Define x and y scales
			    var x = d3.scaleBand()
			      .domain(numericColumns)
			      .range([0, width])
			      .padding(0.1);

			    var y = d3.scaleLinear()
			      .domain([0, d3.max(data, d => d3.max(numericColumns, col => d[col]))])
			      .nice()
			      .range([height, 0]);

			    // Color scale for the lines
			    var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

			    // Create a line generator for each village
			    var line = d3.line()
			      .x(d => x(d.column) + x.bandwidth() / 2)
			      .y(d => y(d.value));

			    // Draw the lines
			    var villageLines = svg.selectAll(".line")
			      .data(data)
			      .enter().append("g")
			      .attr("class", "line");

			    villageLines.append("path")
			      .datum(d => numericColumns.map(col => ({ village: d.village, column: col, value: d[col] })))
			      .attr("fill", "none")
			      .attr("stroke", d => colorScale(d[0].village))
			      .attr("stroke-width", 2)
			      .attr("d", line);

			    // Draw the x-axis with slanted labels
			    svg.append("g")
			      .attr("transform", "translate(0," + height + ")")
			      .call(d3.axisBottom(x))
			      .selectAll("text")
			      .style("text-anchor", "end")
			      .attr("dx", "-.8em")
			      .attr("dy", ".15em")
			      .attr("transform", "rotate(-45)");

			    // Draw the y-axis
			    svg.append("g")
			      .call(d3.axisLeft(y));

			    // Add chart title
			    svg.append("text")
			      .attr("x", (width / 2))
			      .attr("y", 0 - (margin.top / 2))
			      .attr("text-anchor", "middle")
			      .style("font-size", "16px")
			      .text("Line Chart");

			    // Draw the legends
			    var legends = svg.selectAll(".legend")
			      .data(data)
			      .enter().append("g")
			      .attr("class", "legend")
			      .attr("transform", (d, i) => "translate(" + (width + 10) + "," + (i * 20) + ")");

			    legends.append("circle")
			      .attr("cx", 0)
			      .attr("cy", 5)
			      .attr("r", 5)
			      .style("fill", d => colorScale(d.village));

			    legends.append("text")
			      .attr("x", 15)
			      .attr("y", 10)
			      .text(d => d.village);	
			    
			
			    //Plotting Histogram ......................................
			    
			   // Set up chart dimensions
var margin = { top: 20, right: 100, bottom: 50, left: 60 };
var width = 800 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

// Create SVG element
var svg = d3.select("#histogram")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define x and y scales
var x0 = d3.scaleBand()
.domain(numericColumns)
.range([0, width])
.padding(0.1);


var x1 = d3.scaleBand()
.domain(data.map(d => d.village))
.range([0, x0.bandwidth() - 10])
.padding(0.05);

var y = d3.scaleLinear()
.domain([0, d3.max(data, d => d3.max(numericColumns, col => d[col]))])
.nice()
.range([height, 0]);

// Color scale for the bars
var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

// Draw the bars
svg.selectAll(".group")
.data(data)
.enter().append("g")
.attr("class", "group")
.attr("transform", d => "translate(" + x1(d.village) + ",0)")
.selectAll("rect")
.data(d => numericColumns.map(col => ({ village: d.village, column: col, value: d[col] })))
.enter().append("rect")
.attr("class", "bar")
.attr("x", d => x0(d.column))
.attr("width", x0.bandwidth())
.attr("y", d => y(d.value))
.attr("height", d => height - y(d.value))
.style("fill", d => colorScale(d.village))
.on("mouseover", function(d) {
var xPos = parseFloat(d3.select(this).attr("x")) + x0.bandwidth() / 2;
var yPos = parseFloat(d3.select(this).attr("y")) + 5;

d3.select(this).attr("stroke", "#000").attr("stroke-width", 2);
d3.select(".tooltip")
.style("left", xPos + "px")
.style("top", yPos + "px")
.style("display", "inline-block")
.text(d.column + " (" + d.village + "): " + d.value);
})
.on("mouseout", function(d) {
d3.select(this).attr("stroke", "none");
d3.select(".tooltip").style("display", "none");
});

// Draw the x-axis with slanted labels
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x0))
.selectAll("text")
.style("text-anchor", "end")
.attr("dx", "-.8em")
.attr("dy", ".15em")
.attr("transform", "rotate(-45)");

// Draw the y-axis
svg.append("g")
.call(d3.axisLeft(y));

// Add chart title
svg.append("text")
.attr("x", (width / 2))
.attr("y", 0 - (margin.top / 2))
.attr("text-anchor", "middle")
.style("font-size", "16px")
.text("Grouped Bar Chart");

// Add legends on the right-hand side
var legend = svg.selectAll(".legend")
.data(data.map(d => d.village))
.enter().append("g")
.attr("class", "legend")
.attr("transform", (d, i) => "translate(0," + i * 20 + ")");

legend.append("rect")
.attr("x", width + 10)
.attr("width", 18)
.attr("height", 18)
.style("fill", d => colorScale(d));

legend.append("text")
.attr("x", width + 40)
.attr("y", 9)
.attr("dy", ".35em")
.style("text-anchor", "start")
.text(d => d);
			    
			    //Plotting barchar ..................
			    var phValues = [];

			    recordsArr.forEach(record => {
			      if (!record) {
			        console.log('Empty Records');
			        return; // Skip empty records
			      }

			      var dataArr = record.split(",");
			      if (dataArr.length < headerArr.length) {
			        console.log('Incomplete Records');
			        return; // Skip incomplete records
			      }

			      var pHValue = parseFloat(dataArr[7].trim()); // Assuming "pH" is in column 7
			      if (!isNaN(pHValue)) {
			        phValues.push(pHValue);
			      }
			    });

			    // Set up chart dimensions
			    var margin = { top: 20, right: 30, bottom: 50, left: 60 };
			    var width = 500 - margin.left - margin.right;
			    var height = 400 - margin.top - margin.bottom;

			    // Create SVG element
			    var svg = d3.select("#barchart1")
			      .append("svg")
			      .attr("width", width + margin.left + margin.right)
			      .attr("height", height + margin.top + margin.bottom)
			      .append("g")
			      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			    // Define the histogram generator
			    var histogramGenerator = d3.histogram()
			      .domain(d3.extent(phValues))
			      .thresholds(10); // You can adjust the number of bins as needed

			    // Generate the bins for the histogram
			    var bins = histogramGenerator(phValues);

			    // Define x and y scales
			    var x = d3.scaleLinear()
			      .domain(d3.extent(phValues))
			      .range([0, width]);

			    var y = d3.scaleLinear()
			      .domain([0, d3.max(bins, function(d) { return d.length; })])
			      .range([height, 0]);

			    // Draw the bars
			    svg.selectAll(".bar")
			      .data(bins)
			      .enter().append("rect")
			      .attr("class", "bar")
			      .attr("x", 1)
			      .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
			      .attr("width", function(d) { return x(d.x1) - x(d.x0) - 1; })
			      .attr("height", function(d) { return height - y(d.length); });

			    // Draw the x-axis
			    svg.append("g")
			      .attr("transform", "translate(0," + height + ")")
			      .call(d3.axisBottom(x));

			    // Draw the y-axis
			    svg.append("g")
			      .call(d3.axisLeft(y));

			    // Add chart title
			    svg.append("text")
			      .attr("x", width / 2)
			      .attr("y", 0 - margin.top / 2)
			      .attr("text-anchor", "middle")
			      .style("font-size", "16px")
			      .text("pH Histogram");
			    
			    
			    
			    //Plotting Piechat
			    
			 // Set up chart dimensions
			    var margin = { top: 20, right: 150, bottom: 50, left: 60 };
			    var width = 800 - margin.left - margin.right;
			    var height = 400 - margin.top - margin.bottom;
			    var radius = Math.min(width, height) / 2;

			    // Create SVG element
			    var svg = d3.select("#piechart")
			      .append("svg")
			      .attr("width", width + margin.left + margin.right)
			      .attr("height", height + margin.top + margin.bottom)
			      .append("g")
			      .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

			    // Color scale for the slices
			    var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

			    // Create a pie generator
			    var pie = d3.pie()
			      .value(d => d.value)
			      .sort(null);

			    // Create an arc generator
			    var arc = d3.arc()
			      .outerRadius(radius - 10)
			      .innerRadius(0);

			    // Draw the slices
			    var villageSlices = svg.selectAll(".slice")
			      .data(data)
			      .enter().append("g")
			      .attr("class", "slice");

			    villageSlices.selectAll("path")
			      .data(d => pie(numericColumns.map(col => ({ village: d.village, column: col, value: d[col] }))))
			      .enter().append("path")
			      .attr("d", arc)
			      .attr("fill", d => colorScale(d.data.column))
			      .on("mouseover", function(d) {
			        d3.select(this).attr("stroke", "#000").attr("stroke-width", 2);
			        d3.select(".tooltip")
			          .style("left", (d3.event.pageX + 10) + "px")
			          .style("top", (d3.event.pageY - 25) + "px")
			          .style("display", "inline-block")
			          .text(d.data.village + " - " + d.data.column + ": " + d.data.value);
			      })
			      .on("mouseout", function(d) {
			        d3.select(this).attr("stroke", "none");
			        d3.select(".tooltip").style("display", "none");
			      });

			    // Draw the legends
			    var legends = svg.selectAll(".legend")
			      .data(numericColumns)
			      .enter().append("g")
			      .attr("class", "legend")
			      .attr("transform", (d, i) => "translate(" + (radius + 30) + "," + (-radius + i * 20) + ")");

			    legends.append("circle")
			      .attr("cx", 0)
			      .attr("cy", 5)
			      .attr("r", 5)
			      .style("fill", d => colorScale(d));

			    legends.append("text")
			      .attr("x", 15)
			      .attr("y", 10)
			      .text(d => d);

			    // Add tooltip
			    d3.select("body").append("div")
			      .attr("class", "tooltip")
			      .style("position", "absolute")
			      .style("z-index", "10")
			      .style("background", "#333")
			      .style("color", "#fff")
			      .style("padding", "5px")
			      .style("display", "none");
			    
			    
			    
			    
			 // Calculate the number of rows and columns based on the number of villages and numeric columns
			    var numVillages = data.length;
			    var numColumns = Math.ceil(Math.sqrt(numericColumns.length));

			    // Set up chart dimensions
			    var margin = { top: 20, right: 150, bottom: 50, left: 60 };
			    var width = (numColumns * 180) - margin.left - margin.right;
			    var height = (Math.ceil(numVillages / numColumns) * 180) - margin.top - margin.bottom;
			    var radius = Math.min(width, height) / 2;

			    // Create SVG element
			    var svg = d3.select("#barchart")
			      .append("svg")
			      .attr("width", width + margin.left + margin.right)
			      .attr("height", height + margin.top + margin.bottom)
			      .append("g")
			      .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

			    // Color scale for the slices
			    var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

			    // Create a pie generator
			    var pie = d3.pie()
			      .value(d => d.value)
			      .sort(null);

			    // Create an arc generator
			    var arc = d3.arc()
			      .outerRadius(radius - 10)
			      .innerRadius(0);

			    // Draw the slices
			    var villageSlices = svg.selectAll(".slice")
			      .data(data)
			      .enter().append("g")
			      .attr("class", "slice");

			    villageSlices.selectAll("path")
			      .data(d => pie(numericColumns.map(col => ({ village: d.village, column: col, value: d[col] }))))
			      .enter().append("path")
			      .attr("d", arc)
			      .attr("fill", d => colorScale(d.data.column))
			      .on("mouseover", function(d) {
			        d3.select(this).attr("stroke", "#000").attr("stroke-width", 2);
			        d3.select(".tooltip")
			          .style("left", (d3.event.pageX + 10) + "px")
			          .style("top", (d3.event.pageY - 25) + "px")
			          .style("display", "inline-block")
			          .text(d.data.village + " - " + d.data.column + ": " + d.data.value);
			      })
			      .on("mouseout", function(d) {
			        d3.select(this).attr("stroke", "none");
			        d3.select(".tooltip").style("display", "none");
			      });

			    // Draw the legends
			    var legends = svg.selectAll(".legend")
			      .data(numericColumns)
			      .enter().append("g")
			      .attr("class", "legend")
			      .attr("transform", (d, i) => "translate(" + (radius + 30) + "," + (-radius + i * 20) + ")");

			    legends.append("circle")
			      .attr("cx", 0)
			      .attr("cy", 5)
			      .attr("r", 5)
			      .style("fill", d => colorScale(d));

			    legends.append("text")
			      .attr("x", 15)
			      .attr("y", 10)
			      .text(d => d);

			    // Add tooltip
			    d3.select("body").append("div")
			      .attr("class", "tooltip")
			      .style("position", "absolute")
			      .style("z-index", "10")
			      .style("background", "#333")
			      .style("color", "#fff")
			      .style("padding", "5px")
			      .style("display", "none");
			    
			    
			    
			 //Extract and append villages to the select element
			    var villageSelect = d3.select("#location");
			 
			    $('#location').empty();
                $('#location').append('<option value="">ALL</option>');
			    data.forEach(function(d) {
			    	
                    $('#location').append('<option value="' + d.village + '">' + d.village  + '</option>');
			      
			    });

			 
			    
			    // Function to handle change in the select element
			    function handleVillageChange() {
			      var selectedVillage = villageSelect.property("value");
			      var filteredData = data;
			      if (selectedVillage !== "") {
			        filteredData = data.filter(function(d) {	
			          return d.village === selectedVillage;
			        });
			      }
			      
			      console.log("Filtered Data: "+filteredData);
			      updateChart(filteredData);
			    }

			    // Attach event listener to the select element
			    villageSelect.on("change", handleVillageChange);

			    // Function to update the chart based on selected village
			    function updateChart(filteredData) {
			      // Update the pie chart based on the filtered data
			      // You can use similar code for drawing the pie chart with filteredData
			      createchat(source,filteredData,null);
			    }

			    
			    // Extract and append villages to the select element
			    var measurementSelect = d3.select("#measurement");
			 
			    $('#measurement').empty();
                $('#measurement').append('<option value="">ALL</option>');
			   

			    
			 // Split the header string into an array of column names
			    var columns = header.split(',');

		
			    var startfrom = 6;
			    if (districtname==='Jinja' || districtname==='Bugiri' || districtname==='Iganga' || districtname==='Mukono') {
			    	startfrom = 7;
			    	} 
			    // Use forEach to loop through the columns starting from position 7 (index 6)
			    columns.forEach(function(column, index) {
			      // Check if the column value is numeric (assuming the values are float numbers or integers)
			      if (index >= startfrom) {
			        // If it's numeric, add it to the numericColumns array
			        
			        $('#measurement').append('<option value="' + column + '">' + column + '</option>');
				      
			      }else{
			    	  console.log("Colunm did not pass: "+column);
			      }
			    });
			    
			    
			    
			    // Function to handle change in the select element
			    function handleMeasureChange() {
			      var selectedMeasure = measurementSelect.property("value");
			      //var filteredData = filterDataByColumnName(selectedMeasure);;
			      
			      
			      console.log("selectedMeasure: "+selectedMeasure);
			      updateChartMeasure(selectedMeasure);
			    }

			    // Attach event listener to the select element
			    measurementSelect.on("change", handleMeasureChange);

			    // Function to update the chart based on selected village
			    function updateChartMeasure(selectedColumn) {
			      // Update the pie chart based on the filtered data
			      // You can use similar code for drawing the pie chart with filteredData
			      createchat(source,data,selectedColumn);
			    }
			    
			    
			    //Loading Images from folder.
			    clearDiv('imageContainer');
			    // Folder name where images are stored
    var folderName = "img/"+districtname;
    // Number of images in the folder
    var numImages = 5; // Change this to the actual number of images

    // Get the image container element
    var imageContainer = document.getElementById("imageContainer");

    // Loop through the image URLs and create <img> elements
    for (var i = 1; i <= numImages; i++) {
      var imageUrl = folderName + "/image" + i + ".png";

      preloadImage(imageUrl);
    
			    
			}
			}
		
			
			
			 // Function to preload an image and check if it exists
		    function preloadImage(imageUrl) {
		      var img = new Image();
		      img.onload = function() {
		        // If the image is successfully loaded, append it to the container
		        var imgElement = document.createElement("img");
		        imgElement.src = imageUrl;
		        imageContainer.appendChild(imgElement);
		      };
		      img.onerror = function() {
		        // If there's an error loading the image, do nothing (ignore it)
		      };
		      img.src = imageUrl;
		    }
			
			 
		 // Function to filter data based on column name
		    function filterDataByColumnName(data,columnName) {
		      var headerArr = header.split(",");
		      var columnIndex = headerArr.indexOf(columnName);
		      if (columnIndex === -1) {
		        console.log("Column name not found in the header.");
		        return;
		      }

		      var filteredData = [];
		      for (var i = 0; i < data.length; i++) {
		        var record = data[i].split(",");
		        if (record.length > columnIndex) {
		          var value = record[columnIndex].trim();
		          filteredData.push(value);
		        }
		      }

		      return filteredData;
		    }
			
	</script>




	<script type="text/javascript">
		function removeBadControlCharacters(inputString) {
			// Regular expression to match bad control characters
			const controlCharRegex = /[\x00-\x08\x0B\x0C\x0E-\x1F]/g;

			// Replace bad control characters with an empty string
			const sanitizedString = inputString.replace(controlCharRegex, '');

			return sanitizedString;
		}
	</script>
</body>

</html>

</body>

</html>