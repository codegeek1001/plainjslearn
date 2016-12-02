
function showSearchValues(input,myTable) {
    var filter, tr, td, i;
    if(input.value == "") {
        myTable.style.display="none";
    } else {
        myTable.style.display="block";
    }
    filter = input.value.toUpperCase();
   
    tr = myTable.getElementsByTagName("tr");
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
}// End function showSearchValues

function setSearch(e,myInput,myTable) {
    
    var countryCode = e.target.getElementsByTagName("span")[0].textContent;
    var searchStr = e.target.textContent;
    var re = new RegExp(e.target.getElementsByTagName("span")[0].textContent,"g");
    var finalSearchStr = searchStr.replace(re,"");
	  myInput.value= finalSearchStr;
    myTable.style.display="none";
}// End function setSearch

function buildTypeaheadData(data,myTable) {
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
}// End function buildTypeaheadData

function setStyle(myInput,myTable) {
    document.styleSheets[0].insertRule("* { box-sizing: border-box; }",1);
     myInput.style.width = "80%";
   myInput.style.backgroundPosition = "10px 10px";
  myInput.style.backgroundRepeat ="no-repeat";
  myInput.style.fontSize = "16px";
  myInput.style.padding = "12px 20px 12px 40px";
  myInput.style.border = "1px solid #ddd";
  myInput.style.marginBottom = "0px";
  myInput.style.borderRadius = "30px";

   myTable.style.borderCollapse = "collapse";
  myTable.style.width = "80%";
  myTable.style.border = "1px solid #ddd";
  myTable.style.fontSize = "18px";
  myTable.style.marginTop = "0px";

  myTable.style.display = "none";
  myTable.style.cursor="pointer";
  var re = "#"+myTable.id;
  var reTR =  re + " tr";
  var reHover = reTR+":hover";
  var reTD = re + " td";
  document.styleSheets[0].insertRule(reTR + "{ border-bottom: 1px solid #ddd; }",1);
  document.styleSheets[0].insertRule(reHover + "{ background-color: #f1f1f1; }",1);
  document.styleSheets[0].insertRule(reTD + "{ text-align: left; }",1);
    document.styleSheets[0].insertRule(reTD + "{ padding: 10px; }",1);
}

