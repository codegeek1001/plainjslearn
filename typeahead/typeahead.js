
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

function startSearch(e,myInput,myTable) {
	  myInput.value=e.target.textContent;
    myTable.style.display="none";
}// End function startSearch

function buildTypeaheadData(data,myTable) {
    for(i=0;i<data.length;i++) {
        var node = document.createElement("tr");
        var node2 = document.createElement("td");
        var textnode = document.createTextNode(data[i]);  
        node.appendChild(node2)
        node2.appendChild(textnode);                            
        myTable.appendChild(node);   
   }
}// End function buildTypeaheadData


