    
var chartData1 = [];
var chart;
function generateChartData() {
  $.ajax({
		url : '/web/ngh/ch',
		type : 'get',
	  dataType:'json',
		success : d =>{
					var ls = d.ls;
					let i = 0;
					for ( i = 0; i < ls.length; i++ ) {
					    newDate = ls[i].date;
					    let a1 = ls[i].price;
					    chartData1.push({"date": newDate, "value": a1});
					}
					chart = AmCharts.makeChart( "chartdiv",{
						  "type": "stock",
						  "theme": "light",
						  "glueToTheEnd": true,
					    "categoryAxesSettings": {
					        "minPeriod": "ss",
					        "groupToPeriods": [ 'ss', 'ss' ], 
					        "autoGridCount" : false, 
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
					    },
					    
					  "chartCursorSettings": {
						    "valueBalloonsEnabled": true
						  },
						"panelsSettings" : {
							  "marginLeft" : 50,
						},
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
						  "panels": [ {
						    "showCategoryAxis": true,
						    "marginLeft" : 100,
						    "title": "Price",
						    "percentHeight": 60,
						    "stockGraphs": [ {
						      "id": "g1",
						      "valueField": "value",
						    } ],
						    "stockLegend": {}
						  }
						  ],
						  "chartScrollbarSettings": {
							"enabled" : false,
						  },
						  "listeners": [{
						    "event": "rendered",
						    "method": function( event ){
						    }
						  }]
						});
					setInterval( function() {
						$.getJSON('/web/ngh/once',d=>{
							   	newDate = d.ls[0].date;
							   	var realltimeDate = new Date(newDate);
							    let a1 = d.ls[0].price;
							    let b1 = d.ls[0].price;
							  chart.dataSets[0].dataProvider.push( {
							    date: newDate,
							    value: a1
							  });
						})
						  chart.validateData();
						}, 1000 * 10 );
		 },
		 error : e =>{
			alert('ajax 실패'); 
		 }
	}
  );
}
generateChartData();


am4core.ready(function() {

	am4core.useTheme(am4themes_material);
	am4core.useTheme(am4themes_animated);
	
	var chart = am4core.create("chartdiv_1", am4charts.XYChart);
	var data = [];
	 $.ajax({
			url : '/web/ngh/once/oncechart',
			type : 'get',
		  dataType:'json',
			success : d =>{
						let i = 0;
						for ( i = 0; i < d.ls.length; i++ ) {
							 let date = new Date();
						    date = d.ls[i].date;
						    value = d.ls[i].price;
						    data.push({date:date, value: value});
						}
						chart.data = data;
						var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
						dateAxis.renderer.minGridDistance = 60;
						var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
						var series = chart.series.push(new am4charts.LineSeries());
						series.dataFields.valueY = "value";
						series.dataFields.dateX = "date";
						series.tooltipText = "{value}"
						series.tooltip.pointerOrientation = "vertical";
						chart.cursor = new am4charts.XYCursor();
						chart.cursor.snapToSeries = series;
						chart.cursor.xAxis = dateAxis;

			 },
			 error : e =>{
				alert('ajax 실패'); 
			 }
		});

	}); 
