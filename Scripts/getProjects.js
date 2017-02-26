function jsonToUi() {
    var projectList = JSON.parse(this.responseText);
    for (var i = 0; i < projectList.length; i++) {
        var element = document.getElementById("tablebody");
        var rowElement = document.createElement("tr");

        var idColumn = document.createElement("td");
        var nameColumn = document.createElement("td");
        var dueDateColumn = document.createElement("td");
        var customerIdColumn = document.createElement("td");
        //var customerColumn = document.createElement("td");

        var idColumnText = document.createTextNode(projectList[i].Id);
        var nameColumnText = document.createTextNode(projectList[i].Name);
        var dueDateColumnText = document.createTextNode(projectList[i].dueDate);
        var customerIdColumnText = document.createTextNode(projectList[i].customerId);
        //var customerColumnText = document.createTextNode(projectList[i].customer);

        rowElement.appendChild(idColumn);
        rowElement.appendChild(nameColumn);
        rowElement.appendChild(dueDateColumn);
        rowElement.appendChild(customerIdColumn);
        //rowElement.appendChild(customer);

        idColumn.appendChild(idColumnText);
        nameColumn.appendChild(nameColumnText);
        dueDateColumn.appendChild(dueDateColumnText);
        customerIdColumn.appendChild(customerIdColumnText);
        //customerColumn.appendChild(customerColumnText);

        element.appendChild(rowElement);
    }
}

var customerLoadButton = document.getElementById("loadProjectsBtn");
customerLoadButton.addEventListener("click", function () {
    $("tbody").children().remove();
    var oReq = new XMLHttpRequest();
    //event listeners
    oReq.addEventListener("load", jsonToUi);
    //open and send
    oReq.open("GET", "http://www.centisoft.dk/api/Project");
    oReq.send();
});