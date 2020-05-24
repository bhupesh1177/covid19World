function displayVaccine23(){
    var twothreevar = document.getElementById('vaccineStatus');
    var data = vaccineData['Phase 2/3'];
    var str = "";
    for (var i=0; i<data.length; i++) {
        str = str + "<h3> Candidate : "+data[i].Candidate+ "</h3>"+
        "<h5> Sponsor : "+data[i].Sponsor+ "</h5>"+
        "<h5> Source of funding : "+data[i].SourceOfFunding+ "</h5>";
    }
    twothreevar.innerHTML = str;
}

function displayVaccine12(){
    var twothreevar = document.getElementById('vaccineStatus');
    var data = vaccineData['Phase 1/2'];
    var str = "";
    for (var i=0; i<data.length; i++) {
        str = str + "<h3> Candidate : "+data[i].Candidate+ "</h3>"+
        "<h5> Sponsor : "+data[i].Sponsor+ "</h5>"+
        "<h5> Source of funding : "+data[i].SourceOfFunding+ "</h5>";
    }
    twothreevar.innerHTML = str;
}

function displayVaccine1(){
    var twothreevar = document.getElementById('vaccineStatus');
    var data = vaccineData['Phase 1'];
    var str = "";
    for (var i=0; i<data.length; i++) {
        str = str + "<h3> Candidate : "+data[i].Candidate+ "</h3>"+
        "<h5> Sponsor : "+data[i].Sponsor+ "</h5>"+
        "<h5> Source of funding : "+data[i].SourceOfFunding+ "</h5>";
    }
    twothreevar.innerHTML = str;
}

function displayVaccinePreclinical(){
    var twothreevar = document.getElementById('vaccineStatus');
    var data = vaccineData['Pre-clinical'];
    var str = "";
    for (var i=0; i<data.length; i++) {
        str = str + "<h3> Candidate : "+data[i].Candidate+ "</h3>"+
        "<h5> Sponsor : "+data[i].Sponsor+ "</h5>"+
        "<h5> Source of funding : "+data[i].SourceOfFunding+ "</h5>";
    }
    twothreevar.innerHTML = str;
}

function displayVaccineEarlyresearch(){
    var twothreevar = document.getElementById('vaccineStatus');
    var data = vaccineData['Early research'];
    var str = "";
    for (var i=0; i<data.length; i++) {
        str = str + "<h3> Candidate : "+data[i].Candidate+ "</h3>"+
        "<h5> Sponsor : "+data[i].Sponsor+ "</h5>"+
        "<h5> Source of funding : "+data[i].SourceOfFunding+ "</h5>";
    }
    twothreevar.innerHTML = str;
}
