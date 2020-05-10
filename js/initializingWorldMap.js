am4core.ready(function() {
    
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
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

polygonTemplate.events.on("hit", function(ev) {
  var data = ev.target.dataItem.dataContext;
  var info = document.getElementById("info");
  info.innerHTML = "<h3>" + data.id +"(" + data.countryName + ")" + "</h3>"+
  "<h4>"+"Total Cases : " + data.value  + "</h4>"+
  "<h4>"+"Total Population : " + data.population  + "</h4>"+
  "<h4>"+"First Case : " + data.firstCase  + "</h4>";
});


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
    
});