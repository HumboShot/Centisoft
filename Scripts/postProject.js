$("#postProjectBtn").click(function (){
    var name = $("#Name").val();
    var dueDate = $("#DueDate").val();
    var customerId = $("#CustomerId").val();
    $.post("http://www.centisoft.dk/api/Project",{Name: name, DueDate: dueDate, CustomerId: customerId} )
    .done(function(){
        alert("Created");
    })
    .fail(function(){
        alert("Shits fucked m8");
    })
});