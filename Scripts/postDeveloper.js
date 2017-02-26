$("#postDeveloperBtn").click(function (){
    var name = $("#Name").val();
    var email = $("#Email").val();
    $.post("http://www.centisoft.dk/api/Developer",{Name: name, Email: email} )
    .done(function(){
        alert("Created");
    })
    .fail(function(){
        alert("Shits fucked m8");
    })
});
