function jsonToUi() {
    var customerList = JSON.parse(this.responseText);
    for (var i = 0; i < customerList.length; i++) {
        var element = document.getElementById("tablebody");
        var rowElement = document.createElement("tr");

        var idColumn = document.createElement("td");
        var nameColumn = document.createElement("td");
        var addressColumn = document.createElement("td");
        var address2Column = document.createElement("td");
        var zipColumn = document.createElement("td");
        var cityColumn = document.createElement("td");
        var countryColumn = document.createElement("td");
        var emailColumn = document.createElement("td");
        var phoneColumn = document.createElement("td");
        var clientIdColumn = document.createElement("td");

        var idColumnText = document.createTextNode(customerList[i].Id);
        var nameColumnText = document.createTextNode(customerList[i].Name);
        var addressColumnText = document.createTextNode(customerList[i].Address);
        var address2ColumnText = document.createTextNode(customerList[i].Address2);
        var zipColumnText = document.createTextNode(customerList[i].Zip);
        var cityColumnText = document.createTextNode(customerList[i].City);
        var countryColumnText = document.createTextNode(customerList[i].Country);
        var emailColumnText = document.createTextNode(customerList[i].Email);
        var phoneColumnText = document.createTextNode(customerList[i].Phone);
        var clientIdColumnText = document.createTextNode(customerList[i].ClientId);

        rowElement.appendChild(idColumn);
        rowElement.appendChild(nameColumn);
        rowElement.appendChild(addressColumn);
        rowElement.appendChild(address2Column);
        rowElement.appendChild(zipColumn);
        rowElement.appendChild(cityColumn);
        rowElement.appendChild(countryColumn);
        rowElement.appendChild(emailColumn);
        rowElement.appendChild(phoneColumn);
        rowElement.appendChild(clientIdColumn);

        idColumn.appendChild(idColumnText);
        nameColumn.appendChild(nameColumnText);
        addressColumn.appendChild(addressColumnText);
        address2Column.appendChild(address2ColumnText);
        zipColumn.appendChild(zipColumnText);
        cityColumn.appendChild(cityColumnText);
        countryColumn.appendChild(countryColumnText);
        emailColumn.appendChild(emailColumnText);
        phoneColumn.appendChild(phoneColumnText);
        clientIdColumn.appendChild(clientIdColumnText);
        element.appendChild(rowElement);
    }
}

var customerLoadButton = document.getElementById("loadCustomersBtn");
customerLoadButton.addEventListener("click", function () {
    $("tbody").children().remove();
    var oReq = new XMLHttpRequest();
    //event listeners
    oReq.addEventListener("load", jsonToUi);
    //open and send
    oReq.open("GET", "http://www.centisoft.dk/api/Customer");
    oReq.send();
});