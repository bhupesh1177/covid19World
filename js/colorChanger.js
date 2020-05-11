function changeBGcolor() {
    console.log("function called");
    var chartdivvar = document.getElementById('chartdiv');
    var infovar = document.getElementById('info');
    var graphdivvar = document.getElementById('graphdiv');
    var div1var = document.getElementById('div1');
    var div2var = document.getElementById('div2');
    var div3var = document.getElementById('div3');
    var div4var = document.getElementById('div4');
    var div5var = document.getElementById('heading');

    console.log(chartdivvar.style.backgroundColor);
    if (chartdivvar.style.backgroundColor.match("white") &&
        infovar.style.backgroundColor.match("white") &&
        graphdivvar.style.backgroundColor.match("white")) {

        chartdivvar.style.backgroundColor = "gray";
        infovar.style.backgroundColor = "gray";
        graphdivvar.style.backgroundColor = "gray";
        div1var.style.backgroundColor = "gray";
        div2var.style.backgroundColor = "gray";
        div3var.style.backgroundColor = "gray";
        div4var.style.backgroundColor = "gray";
        div5var.style.backgroundColor = "gray";
        document.body.style.backgroundColor = "gray";
        
    } else {
        chartdivvar.style.backgroundColor = "white";
        infovar.style.backgroundColor = "white";
        graphdivvar.style.backgroundColor = "white";
        bodyvar = "white";
        div1var.style.backgroundColor = "white";
        div2var.style.backgroundColor = "white";
        div3var.style.backgroundColor = "white";
        div4var.style.backgroundColor = "white";
        div5var.style.backgroundColor = "white";
        document.body.style.backgroundColor = "white";
    }
  }