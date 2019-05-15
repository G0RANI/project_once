am4core.ready(function() {

	am4core.useTheme(am4themes_material);
	am4core.useTheme(am4themes_animated);

	var chart = am4core.create("chartdiv_2", am4charts.XYChart);

	var data = [];
	var value = 1000;
	for(let i = 0; i < 300; i++){
	  let date = new Date();
	  date.setHours(0,0,0,0);
	  date.setDate(i);
	  value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
	  data.push({date:date, value: value});
	  
	}
	
	$('.app__header--2OuvG span').text(JSON.stringify(data[299].value));
	$('.app__header--2OuvG span').attr('class','');
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


	}); 