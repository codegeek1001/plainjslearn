window.onload = function() {
    var myInput = document.getElementById('myInput');
    var myTable = document.getElementById('myTable');

    //Initialize Typeahead
    window.typeahead = new Typeahead(myInput,myTable);

    // Set styling for input and dropdown table
    typeahead.setStyle();
 
    // Populate table with data (ajax call)
    var req = new XMLHttpRequest();
    req.open('GET','countries.json');
    req.onload = function () {
        if(req.status >= 200 && req.status < 400) {
            var data = JSON.parse(req.responseText);
            //Build Data
            typeahead.buildTypeaheadData(data,document.getElementById('myTable'));
        }
    }
    req.onerror = function() {
        console.log('error in ajax');
    }
    req.send();
    
} // End window.onload