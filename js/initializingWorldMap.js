am4core.ready(function() {
    
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create map instance
var mainContainer = am4core.create("chartdiv", am4core.Container);
mainContainer.width = am4core.percent(100);
mainContainer.height = am4core.percent(100);
mainContainer.layout = "horizontal";
var chart = mainContainer.createChild(am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();

var label = chart.createChild(am4core.Label);


// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());


polygonSeries.useGeodata = true;
polygonSeries.exclude = ["AQ"];

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{series.id} {series.value} {id}[/]:[bold]{value}";
label.fontSize = 20;
label.align = "right";
label.isMeasured = false;
label.x = 70;
label.y = 20;

polygonSeries.events.on("over", over);
polygonSeries.events.on("out", out);

var info = document.getElementById("info");
info.innerHTML = "<h5> Click/Tap on map for country specific data.</h5>";




function over(ev) {
  ev.target.mapPolygons.each(function(polygon) {
    polygon.setState("highlight");
  });
}

function out(ev) {
  ev.target.mapPolygons.each(function(polygon) {
    polygon.setState("default");
  });
}

// Add heat rule
polygonSeries.heatRules.push({
  "property": "fill",
  "target": polygonSeries.mapPolygons.template,
  "min": am4core.color("#ff9999"),
  "max": am4core.color("#660000")
});

// Add expectancy data
polygonSeries.events.on("beforedatavalidated", function(ev) {
  var source = ev.target.data;
  if (source.maybe) {
    ev.target.data = source.maybe.here.values;
  }
});

polygonSeries.data = {
  something: "Useless",
  maybe: {
    here: {
      values: covid19Data
    }
  }
};

label.data = polygonSeries.data
console.log(label.data)

var mainChartContainer = am4core.create("graphdiv", am4core.Container);
mainChartContainer.width = am4core.percent(100);
mainChartContainer.height = am4core.percent(100);
mainChartContainer.layout = "horizontal";
var graph = mainChartContainer.createChild( am4charts.XYChart);

// Add data
graph.data = worldAddedData

// Set input format for the dates
graph.dateFormatter.inputDateFormat = "yyyy-MM-dd";

// Create axes
var dateAxis = graph.xAxes.push(new am4charts.DateAxis());
var valueAxis = graph.yAxes.push(new am4charts.ValueAxis());

// Create series
var series1 = graph.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "value";
series1.dataFields.dateX = "date";


var selectedStateId = "UAS";
var selectedPolygon;
var selectedStateName;

polygonTemplate.events.on("hit", function(ev) {
  var data = ev.target.dataItem.dataContext;

  var info = document.getElementById("info");
  info.innerHTML = "<h3>" + data.id +"(" + data.countryName + ")" + "</h3>"+
  "<h4>"+"Total Cases " + data.value  + "</h4>"+
  "<h4>"+"Total Population " + data.population  + "</h4>"+
  "<h4>"+"First Case " + data.firstCase  + "</h4>";
  var stateId = data.id;
  showState(stateId, data.name, event.target);
});

series1.tooltipText = "{value}"
series1.strokeWidth = 2;
series1.minBulletDistance = 15;

// Drop-shaped tooltips
series1.tooltip.background.cornerRadius = 20;
series1.tooltip.background.strokeOpacity = 0;
series1.tooltip.pointerOrientation = "vertical";
series1.tooltip.label.minWidth = 40;
series1.tooltip.label.minHeight = 40;
series1.tooltip.label.textAlign = "middle";
series1.tooltip.label.textValign = "middle";

// Make bullets grow on hover
var bullet = series1.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make a panning cursor
graph.cursor = new am4charts.XYCursor();
graph.cursor.behavior = "panXY";
graph.cursor.xAxis = dateAxis;
graph.cursor.snapToSeries = series1;

// Create vertical scrollbar and place it before the value axis
graph.scrollbarY = new am4core.Scrollbar();
graph.scrollbarY.parent = graph.leftAxesContainer;
graph.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
graph.scrollbarX = new am4charts.XYChartScrollbar();
graph.scrollbarX.series.push(series1);
graph.scrollbarX.parent = graph.bottomAxesContainer;

function showState(id, stateName, polygon) {
  if(selectedStateId != id){
    var newData = cWDW[id];
    if (selectedPolygon) {
      selectedPolygon.isActive = false;
    }
    var minVar;

    if (graph.data.length>=newData.length) {
      minVar = newData.length;
    } else {
      minVar = graph.data.length;
    }

    var count = 0;
    for (var i = 0; i < minVar; i++) {
      graph.data[i].date = newData[i].date;
      graph.data[i].value = newData[i].value;
      count = count+1;
    }
    console.log(count);
    console.log(graph.data.length);



    graph.invalidateRawData();

    selectedStateName = stateName;
    selectedStateId = id;
    selectedPolygon = polygon;

   }
}

console.log(graph.data);
});