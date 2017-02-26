function jsonToUi() {
    var developerList = JSON.parse(this.responseText);
    for (var i = 0; i < developerList.length; i++) {
        var element = document.getElementById("tablebody");
        var rowElement = document.createElement("tr");
        var firstColumn = document.createElement("td");
        var secondColumn = document.createElement("td");
        var firstColumnText = document.createTextNode(developerList[i].Name);
        var secondColumnText = document.createTextNode(developerList[i].Email);
        rowElement.appendChild(firstColumn);
        rowElement.appendChild(secondColumn);
        firstColumn.appendChild(firstColumnText);
        secondColumn.appendChild(secondColumnText);
        element.appendChild(rowElement);
    }
}

var loadButton = document.getElementById("loadDevelopersBtn");
loadButton.addEventListener("click", function () {
    $("tbody").children().remove();
    var oReq = new XMLHttpRequest();
    //event listeners
    oReq.addEventListener("load", jsonToUi);
    //open and send
    oReq.open("GET", "http://www.centisoft.dk/api/developer");
    oReq.send();
});
