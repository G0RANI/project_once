//미니차트
	// end am4core.ready()
		/*am4core.ready(function() {
			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end
			var chart = am4core.create("chartdiv", am4charts.XYChart);
			var data = [];
			var value = 0;
				$.ajax({
					url : '/web/ngh/ch',
					type : 'get',
				    dataType:'json',
					 success : d=>{
							 for(let i = 0; i < d.ls.length; i++){
								  let date = new Date();
								  date.setHours(0,0,0,0);
								  date.setDate(i);
								  //value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
								  //let date = Date.parse(d.ls[i].date);
								  data.push({date:d.ls[i].odate,
									  		value:d.ls[i].price});

								  
									  chart.validateData();
						}
						  chart.data = data;
					 },
					 error : e =>{
						alert('ajax 실팩'); 
						console.log(e);
					 }
				});
				//setInterval( function() {
				chart.dataSets[ 0 ].dataProvider.push( {
				    date: d.ls[i].odate,
				    value: d.ls[i].price
				  });
			//}, 2000);
				
				
			// Create axes
			var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
			dateAxis.renderer.minGridDistance = 60;
			var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
			// Create series
			var series = chart.series.push(new am4charts.LineSeries());
			series.dataFields.valueY = "value";
			series.dataFields.dateX = "date";
			series.tooltipText = "{value}"
			series.tooltip.pointerOrientation = "vertical";
			chart.cursor = new am4charts.XYCursor();
			chart.cursor.snapToSeries = series;
			chart.cursor.xAxis = dateAxis;
			//chart.scrollbarY = new am4core.Scrollbar();
			chart.scrollbarX = new am4core.Scrollbar();
			}); */
		
/*메인차트*/
    
var chartData1 = [];

// Create the chart
var chart;

function generateChartData() {
	let firstDate = new Date();
	firstDate.setDate( firstDate.getDate() - 721);
	firstDate.setHours(0, 0, 0, 0);
//setInterval( function() {
  $.ajax({
		url : '/web/ngh/ch',
		type : 'get',
	  dataType:'json',
		success : d =>{
					let i = 0;
					let ls = d.ls;
					for ( i = 0; i < ls.length; i++ ) {
					    newDate = ls[i].date;
					    let a1 = ls[i].price;
					    chartData1.push({"date": newDate, "value": a1});
				  }
					
					chart = AmCharts.makeChart( "chartdiv",{
						  "type": "stock",
						  "theme": "light",

						  // This will keep the selection at the end across data updates
						  "glueToTheEnd": true,
						  
					    "categoryAxesSettings": {
					        "minPeriod": "ss", // set minimum to milliseconds
					        "groupToPeriods": [ 'ss', 'ss' ], // specify period grouping
					        "autoGridCount" : false, 
					        //"dashLength" : 100,
//					        "dashLength" : 1,
//					        "parseDate" : true,
					        //"autoGridCount" : false,
					        "dateFormats" : [{
					            "period": 'fff',
					            "format": 'JJ:NN:SS'
					        }, {
					            "period": 'ss',
					            "format": 'HH:NN:SS'
					        }, {
					            "period": 'mm',
					            "format": 'JJ:NN'
					        }, {
					            "period": 'hh',
					            "format": 'JJ:NN'
					        }, {
					            "period": 'DD',
					            "format": 'MMM DD'
					        }, {
					            "period": 'WW',
					            "format": 'MMM DD'
					        }, {
					            "period": 'MM',
					            "format": 'MMM YYYY'
					        }, {
					            "period": 'YYYY',
					            "format": 'MMM YYYY'
					        }],
					    },
					    
					    "valueAxesSettings": {
					    	"inside" : false,
					    	"showLastLabel" : false, 
					    	//"dashLength" : 10,
					    },
					    
					  "chartCursorSettings": {
						    "valueBalloonsEnabled": true
						  },
						"panelsSettings" : {
							  "marginLeft" : 50,
						},

						  // Defining data sets
						  "dataSets": [{
						    "title": "coin price",
						    "fieldMappings": [ {
						      "fromField": "value",
						      "toField": "value"
						    }, {
						      "fromField": "volume",
						      "toField": "volume"
						    } ],
						    
						    "dataProvider": chartData1,
						    "categoryField": "date",
						  }
						  ],
//						  "chartScrollbar": {
//							  "enabled" : false,
//							   //"updateOnReleaseOnly": false
//							},
						  // Panels
						  "panels": [ {
						    "showCategoryAxis": true,
						    "marginLeft" : 100,
						    "title": "Price",
						    "percentHeight": 60,
						    //"zoomOutAxes": false,
						    "stockGraphs": [ {
						      "id": "g1",
						      "valueField": "value",
//						      "comparable": true,
//						      "compareField": "value"
						    } ],
						    "stockLegend": {}
						  }
						  ],
						  // Scrollbar settings
						  "chartScrollbarSettings": {
							"enabled" : false,
//						    "graph": "g1",
//						    "usePeriod": "ss"
						  },


						// 	"periodSelector": {
						// 		"position": "left",
						// 		"dateFormat": "JJ:NN:SS",
						// 		"periods": [ {
						// 			"period": "ff",
						// 			"count": 10,
						// 			"label": "10 Second",
						// 			"selected": true,
						// 		},
						// 		{
						// 			"period": "MAX",
						// 			"label": "MAX"
						// 		} ]
						// },

						  // "periodSelector": {
							//     "position": "left",
							//     "periods": [ {
							//       "period": "DD",
							//       "count": 10,
							//       "label": "10 days"
							//     }, {
							//       "period": "MM",
							//       "selected": true,
							//       "count": 1,
							//       "label": "1 month"
							//     }, {
							//       "period": "YYYY",
							//       "count": 1,
							//       "label": "1 year"
							//     }, {
							//       "period": "YTD",
							//       "label": "YTD"
							//     }, {
							//       "period": "MAX",
							//       "label": "MAX"
							//     } ]
							// },

//						// Data Set Selector
//						  "dataSetSelector": {
//						    "position": "left"
//						  },

						  // Event listeners
						  "listeners": [{
						    "event": "rendered",
						    "method": function( event ) {
						    	
//						      chart.mouseDown = false;
//						      chart.containerDiv.onmousedown = function() {
//						        chart.mouseDown = true;
//						      }
//						      chart.containerDiv.onmouseup = function() {
//						        chart.mouseDown = false;
//						      }
						    }
						  }]
						} );
					setInterval( function() {
//						  // if mouse is down, stop all updates
//						  if ( chart.mouseDown )
//						    return;
						  // add new datapoint at the end
						  //var newDate = new Date(chartData1[ chartData1.length - 1 ].date );
						$.getJSON('/web/ngh/once',d=>{
							   	newDate = d.ls[0].date;
							   	//console.log(newDate.toLocaleString());
							   	var realltimeDate = new Date(newDate);
							   	console.log(realltimeDate.toString());
							    let a1 = d.ls[0].price;
							    let b1 = d.ls[0].price;
							  chart.dataSets[0].dataProvider.push( {
							    date: newDate,
							    value: a1
							  });
						})
						  chart.validateData();
						}, 1000 * 10 );
		
					//chart.chartScrollbarSettings.enabled = false;
					//chart.hideXScrollbar = true;
		 },
		 error : e =>{
			alert('ajax 실패'); 
			console.log(e);
		 }
	}
	
  );
  //}, 6000);
}
generateChartData();


/*am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_material);
	am4core.useTheme(am4themes_animated);
	// Themes end

	var chart = am4core.create("chartdiv_1", am4charts.XYChart);

	var data = [];
	var value = 50;
	for(let i = 0; i < 300; i++){
	  let date = new Date();
	  date.setHours(0,0,0,0);
	  date.setDate(i);
	  value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
	  data.push({date:date, value: value});
	}

	chart.data = data;

	// Create axes
	var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	dateAxis.renderer.minGridDistance = 60;

	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

	// Create series
	var series = chart.series.push(new am4charts.LineSeries());
	series.dataFields.valueY = "value";
	series.dataFields.dateX = "date";
	series.tooltipText = "{value}"

	series.tooltip.pointerOrientation = "vertical";

	chart.cursor = new am4charts.XYCursor();
	chart.cursor.snapToSeries = series;
	chart.cursor.xAxis = dateAxis;

	//chart.scrollbarY = new am4core.Scrollbar();
	chart.scrollbarX = new am4core.Scrollbar();

	}); // end am4core.ready()
*/

//미니차트
	// end am4core.ready()
//		am4core.ready(function() {
//			// Themes begin
//			am4core.useTheme(am4themes_animated);
//			// Themes end
//			var chart = am4core.create("chartdiv_1", am4charts.XYChart);
//			var data = [];
//			var value = 0;
//				$.ajax({
//					url : '/web/ngh/ch',
//					type : 'get',
//				    dataType:'json',
//					 success : d=>{
//							 for(let i = 0; i < d.ls.length; i++){
//								  let date = new Date();
//								  date.setHours(0,0,0,0);
//								  date.setDate(i);
//								  //value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
//								  //let date = Date.parse(d.ls[i].date);
//								  data.push({date:d.ls[i].odate,
//									  		value:d.ls[i].price});
//						}
//						  chart.data = data;
//					 },
//					 error : e =>{
//						alert('ajax 실팩'); 
//						console.log(e);
//					 }
//				});
//				
//				
//			// Create axes
//			var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
//			dateAxis.renderer.minGridDistance = 60;
//			var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//			// Create series
//			var series = chart.series.push(new am4charts.LineSeries());
//			series.dataFields.valueY = "value";
//			series.dataFields.dateX = "date";
//			series.tooltipText = "{value}"
//			series.tooltip.pointerOrientation = "vertical";
//			chart.cursor = new am4charts.XYCursor();
//			chart.cursor.snapToSeries = series;
//			chart.cursor.xAxis = dateAxis;
//			//chart.scrollbarY = new am4core.Scrollbar();
//			chart.scrollbarX = new am4core.Scrollbar();
//			}); 


