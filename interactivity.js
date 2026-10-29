var globalData = [];
d3.csv("ExampleData.csv", function(data) {
    globalData.push(data);
});

function sort(compareObject,display) {
    var table = document.getElementById("recordsTable"),
    tbody = table.getElementsByTagName("tbody")[0];
    
}

function highlightHighest(compareObject){

}

function dropLowest(compareObject){
}


function compareDate(a, b){
    var aDate = new Date(a.PurchaseDate)
    var bDate = new Date(b.PurchaseDate)

}

function compareAmount(a,b){
    var aAmount = parseFloat(a.PurchaseAmount.replace("$", ""))
    var bAmount = parseFloat(b.PurchaseAmount.replace("$", "")) 

}

function compareName(a,b){

}

function populateTable(){
    var table = document.getElementById("recordTable");
    var tbody = table.getElementsByTagName("tbody")[0];

    for (var i = 0; i<globalData.length; i++){
        var row = document.createElement("tr");
        row.id = globalData[i].ID;
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");

        cell1.innerHTML = globalData[i].Customer;
        cell2.innerHTML = globalData[i].PurchaseDate;
        cell3.innerHTML = globalData[i].PurchaseAmount;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        tbody.appendChild(row);
    }
}

