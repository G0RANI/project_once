

//미니차트
	// end am4core.ready()
		am4core.ready(function() {
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
				/*//setInterval( function() {
				chart.dataSets[ 0 ].dataProvider.push( {
				    date: d.ls[i].odate,
				    value: d.ls[i].price
				  });*/
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
			}); 

/*메인차트*/
 /**
 * Generate random chart data
 */
/*var chartData1 = [];
function generateChartData() {
	let firstDate = new Date();
	firstDate.setDate( firstDate.getDate() - 721);
	firstDate.setHours(0, 0, 0, 0);
//setInterval( function() {
  $.ajax({
		url : '/web/ngh/ch',
		type : 'get',
	    dataType:'json',
		 success : d=>{
			 		let i = 0;
				  for ( i = 0; i < d.ls.length; i++ ) {
				    let newDate = new Date();
				    newDate.setDate(newDate.getDate());
				    newDate.setHours(0,0,0,0);
				    newDate = d.ls[i].odate;
				    console.log('시간 : '+newDate);
				    let a1 = d.ls[i].price;
				    let b1 = d.ls[i].price;
				    consol.log(newDate);
				    chartData1.push({
				      "date": newDate,
				      "value": a1,
				      "volume": b1
				    });
				    
					  chart.dataSets[0].dataProvider.push( {
						  date: newDate,
						  value: a1,
						  volume: b1
					  });
					  
					  chart.validateData();
				  }
					  if (chart.mouseDown)
						  return;
				   	  var newDate = new Date( chartData1[ chartData1.length - 1 ].date );
				      newDate.setDate( newDate.getDate() + 1 );
					   i = chartData1.length;
		 },
		 error : e =>{
			alert('ajax 실패'); 
			console.log(e);
		 }
	});
 // }, 6000 );
}
generateChartData();


 // Create the chart
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "stock",
  "theme": "light",

  // This will keep the selection at the end across data updates
  "glueToTheEnd": true,

  // Defining data sets
  "dataSets": [{
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
  "listeners": [{
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
  }]
} );*/


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
							 for(let i = 0; i < d.ls.length; i++){
								  let date = new Date();
								  date.setHours(0,0,0,0);
								  date.setDate(i);
								  //value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
								  //let date = Date.parse(d.ls[i].date);
								  data.push({date:d.ls[i].odate,
									  		value:d.ls[i].price});
						}
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
	
	
	
