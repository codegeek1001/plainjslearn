'use strict';

var Typeahead = function(myInput,myTable) {
    this.myInput = myInput;
    this.myTable = myTable;
};

Typeahead.prototype.showSearchValues = function () {
    var filter, tr, td, i;
    if(this.myInput.value == "") {
        this.myTable.style.display="none";
    } else {
        this.myTable.style.display="block";
    }
    filter = this.myInput.value.toUpperCase();
   
    tr = this.myTable.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "block";
          } else {
            tr[i].style.display = "none";
          }
        }       
    }
};// End function showSearchValues

Typeahead.prototype.setSearch = function (e) {
    var countryCode = e.target.getElementsByTagName("span")[0].textContent;
    var searchStr = e.target.textContent;
    var re = new RegExp(e.target.getElementsByTagName("span")[0].textContent,"g");
    var finalSearchStr = searchStr.replace(re,"");
	this.myInput.value= finalSearchStr;
    this.myTable.style.display="none";
};// End function setSearch

Typeahead.prototype.buildTypeaheadData = function (data,myTable) {
    var i;
    for(i=0;i<data.length;i++) {
        var node = document.createElement("tr");
        var node2 = document.createElement("td");
        var textnode = document.createTextNode( data[i].name);
       
        node.appendChild(node2)
        node2.appendChild(textnode);      
        node2.appendChild(document.createElement("br"));
        node2.appendChild(document.createElement("span"));
        node2.getElementsByTagName("span")[0].style.color="red";
        node2.getElementsByTagName("span")[0].innerHTML = data[i].code;                      
        myTable.appendChild(node);   
   }
};// End function buildTypeaheadData

Typeahead.prototype.setStyle = function () {
    document.styleSheets[0].insertRule("* { box-sizing: border-box; }",1);
    this.myInput.style.width = "80%";
    this.myInput.style.backgroundPosition = "10px 10px";
    this.myInput.style.backgroundRepeat ="no-repeat";
    this.myInput.style.fontSize = "16px";
    this.myInput.style.padding = "12px 20px 12px 40px";
    this.myInput.style.border = "1px solid #ddd";
    this.myInput.style.marginBottom = "0px";
    this.myInput.style.borderRadius = "30px";
    this.myTable.style.borderCollapse = "collapse";
    this.myTable.style.width = "80%";
    this.myTable.style.border = "1px solid #ddd";
    this.myTable.style.fontSize = "18px";
    this.myTable.style.marginTop = "0px";
    this.myTable.style.display = "none";
    this.myTable.style.cursor="pointer";
    var re = "#"+this.myTable.id;
    var reTR =  re + " tr";
    var reHover = reTR+":hover";
    var reTD = re + " td";
    document.styleSheets[0].insertRule(reTR + "{ border-bottom: 1px solid #ddd; }",1);
    document.styleSheets[0].insertRule(reHover + "{ background-color: #f1f1f1; }",1);
    document.styleSheets[0].insertRule(reTD + "{ text-align: left; }",1);
    document.styleSheets[0].insertRule(reTD + "{ padding: 10px; }",1);
}; // End function setStyle

