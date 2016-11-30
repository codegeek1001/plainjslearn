function showSearchValues(input) {
 var filter, table, tr, td, i;
 //input = document.getElementById("myInput");
if(input.value == "") {
document.getElementById("myTable").style.display="none";
} else {
document.getElementById("myTable").style.display="block";
}
//alert(input.value)
 
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
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
}
function startSearch(e,myInput,myTable) {
   
	myInput.value=e.target.textContent;
    myTable.style.display="none";
    
    //fire actual search

}

function buildTypeaheadData(data,myTable) {


      for(i=0;i<data.length;i++) {
   var node = document.createElement("tr");
   var node2 = document.createElement("td");
var textnode = document.createTextNode(data[i]);  
node.appendChild(node2)
node2.appendChild(textnode);                            
myTable.appendChild(node);   
   }
}


