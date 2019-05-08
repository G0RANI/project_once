


/*메인차트*/

 /**
 * Generate random chart data
 */
var chartData1 = [];
function generateChartData() {
 /* var firstDate = new Date();
  firstDate.setDate( firstDate.getDate() - 30 );
  firstDate.setHours( 0, 0, 0, 0 );*/
setInterval( function() {
  $.ajax({
		url : '/web/ngh/ch',
		type : 'get',
	    dataType:'json',
		 success : d=>{
				 alert('once의 값 : 성공 ');
				  for ( var i = 0; i < d.ls.length; i++ ) {
				  function convert(str) {
					  var date = new Date(str),
					      mnth = ("0" + (date.getMonth()+1)).slice(-2),
					      day  = ("0" + date.getDate()).slice(-2),
					      hours  = ("0" + date.getHours()).slice(-2),
					      minutes = ("0" + date.getMinutes()).slice(-2);
					  return [ date.getFullYear(), mnth, day, hours, minutes ].join("-");
					}
					var newDate = new Date();
					console.log(convert(d.ls[i].odate));
				    /*newDate.setDate( newDate.getDate() + i );*/
					var date1 = d.ls[i].odate;
				    var a1 = d.ls[i].price;
				    var b1 = d.ls[i].price;
				    chartData1.push({
				      "date": date1,
				      "value": a1,
				      "volume": b1
				    });
					  chart.dataSets[ 0 ].dataProvider.push( {
						  date: date1,
						  value: a1,
						  volume: b1
					  } );
					  chart.validateData();
				  }
					  if ( chart.mouseDown )
						  return;
				   /*	  var newDate = new Date( chartData1[ chartData1.length - 1 ].date );
				      newDate.setDate( newDate.getDate() + 1 );
					  var i = chartData1.length;*/
		 },
		 error : e =>{
			alert('ajax 실팩'); 
			console.log(e);
		 }
	});
  }, 6000 );
  //ajax
}
generateChartData();


 // Create the chart
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "stock",
  "theme": "light",

  // This will keep the selection at the end across data updates
  "glueToTheEnd": true,

  // Defining data sets
  "dataSets": [ {
    "title": "first data set",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "volume",
      "toField": "volume"
    } ],
    "dataProvider": chartData1,
    "categoryField": "date"
  }
  
  ],
  // Panels
  "panels": [ {
    "showCategoryAxis": false,
    "title": "Value",
    "percentHeight": 60,
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "comparable": true,
      "compareField": "value"
    } ],
    "stockLegend": {}
  }, {
    "title": "Volume",
    "percentHeight": 40,
    "stockGraphs": [ {
      "valueField": "volume",
      "type": "column",
      "showBalloon": false,
      "fillAlphas": 1
    } ],
    "stockLegend": {}
  } ],

  // Scrollbar settings
  "chartScrollbarSettings": {
    "graph": "g1",
    "usePeriod": "WW"
  },

  // Period Selector
  "periodSelector": {
    "position": "left",
    "periods": [ {
      "period": "DD",
      "count": 10,
      "label": "10 days"
    }, {
      "period": "MM",
      "selected": true,
      "count": 1,
      "label": "1 month"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 year"
    }, {
      "period": "YTD",
      "label": "YTD"
    }, {
      "period": "MAX",
      "label": "MAX"
    } ]
  },

  // Data Set Selector
  "dataSetSelector": {
    "position": "left"
  },
  // Event listeners
  "listeners": [ {
    "event": "rendered",
    "method": function( event ) {
      chart.mouseDown = false;
      chart.containerDiv.onmousedown = function() {
        chart.mouseDown = true;
      }
      chart.containerDiv.onmouseup = function() {
        chart.mouseDown = false;
      }
    }
  } ]
} );

/**
 * Set up interval to update the data periodically
 */


/*메인차트*/
	/*am4core.ready(function() {
		am4core.useTheme(am4themes_animated);
		var chart = am4core.create("chartdiv", am4charts.XYChart);
		var data = [];
		var value = 0;
			$.ajax({
				url : '/web/ngh/chart',
				type : 'get',
			    dataType:'json',
				 success : d=>{
						 alert('once의 값 : 성공 ');
						 for(let i = 0; i < d.ls.length; i++){
							 console.log(d.ls[i].price);	
							  let date = new Date();
							  date.setHours(0,0,0,0);
							  date.setDate(i);
							console.log(d.ls[i].odate);
							console.log(date);
							  data.push({date:d.ls[i].odate,
								  		value:d.ls[i].price});
							  chart.data = data;
					}
					console.log(data);
				 },
				 error : e =>{
					alert('ajax 실팩'); 
					console.log(e);
				 }
			});
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
	
	
	
	
	
//미니차트
	// end am4core.ready()
		am4core.ready(function() {
			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end
			var chart = am4core.create("chartdiv_1", am4charts.XYChart);
			var data = [];
			var value = 0;
				$.ajax({
					url : '/web/ngh/ch',
					type : 'get',
				    dataType:'json',
					 success : d=>{
							 alert('once의 값 : 성공 ');
							 for(let i = 0; i < d.ls.length; i++){
								 console.log(d.ls[i].price);	
								  let date = new Date();
								  date.setHours(0,0,0,0);
								  date.setDate(i);
								  //value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
								  //let date = Date.parse(d.ls[i].date);
								console.log(d.ls[i].odate);
								console.log(date);
								  data.push({date:d.ls[i].odate,
									  		value:d.ls[i].price});

						}
						console.log(data);
						  chart.data = data;
					 },
					 error : e =>{
						alert('ajax 실팩'); 
						console.log(e);
					 }
				});
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
			}); 
	
	
	
	
	/*am4core.ready(function() {
		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end
		// Create chart
		var chart = am4core.create("chartdiv_1", am4charts.XYChart);
		chart.paddingRight = 20;
		chart.data = generateChartData();
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.baseInterval = {
		  "timeUnit": "minute",
		  "count": 1
		};
		dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.tooltip.disabled = true;
		valueAxis.title.text = "Unique visitors";
		var series = chart.series.push(new am4charts.LineSeries());
		series.dataFields.dateX = "date";
		series.dataFields.valueY = "visits";
		series.tooltipText = "Visits: [bold]{valueY}[/]";
		series.fillOpacity = 0.3;
		chart.cursor = new am4charts.XYCursor();
		chart.cursor.lineY.opacity = 0;
		chart.scrollbarX = new am4charts.XYChartScrollbar();
		chart.scrollbarX.series.push(series);
		chart.events.on("datavalidated", function () {
		    dateAxis.zoom({start:0.8, end:1});
		});
		function generateChartData() {
		    var chartData = [];
		    // current date
		    var firstDate = new Date();
		    // now set 500 minutes back
		   firstDate.setMinutes(firstDate.getDate() - 500);
		    // and generate 500 data items
		    var visits = 500;
			$.ajax({
				url : '/web/ngh/chart',
				type : 'get',
			    dataType:'json',
				 success : d=>{
						 alert('once의 값 : 성공 ');
						 for(let i = 0; i < d.ls.length; i++){
							 console.log(d.ls[i].price);
							  let newDate = new Date(firstDate);
							  newDate.setMinutes(newDate.getMinutes() + i);
							  visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
							  //let date = Date.parse(d.ls[i].date);
							console.log(d.ls[i].odate);
							chartData.push({date:newDate,
								  		visits:visits});
							return chartData;
					}
					console.log(data);
				 },
				 error : e =>{
					alert('ajax 실팩'); 
					console.log(e);
				 }
			});
		    for (var i = 0; i < 500; i++) {
		        var newDate = new Date(firstDate);
		        
		        
		        newDate.setMinutes(newDate.getMinutes() + i);
		        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
		        
		        chartData.push({
		            date: newDate,
		            visits: visits
		        });
		    }
		    return chartData;
		}
		});
	*/
		

		