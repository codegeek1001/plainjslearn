window.onload = function() {
  
    setStyle(document.getElementById('myInput'),document.getElementById('myTable'))

    var req = new XMLHttpRequest();
    req.open('GET','countries.json');
    req.onload = function () {
        if(req.status >= 200 && req.status < 400) {
            var data = JSON.parse(req.responseText);
            //Build Data
            buildTypeaheadData(data,document.getElementById('myTable'));
        }
    }
    req.onerror = function() {
        console.log('error in ajax');
    }
    req.send();
    
} // End window.onload