$("#postCustomerBtn").click(function (){
    var name = $("#Name").val();
    var address = $("#Address").val();
    var address2 = $("#address2").val();
    var zip = $("#Zip").val();
    var city = $("#City").val();
    var country = $("#Country").val();
    var email = $("#Email").val();
    var phone = $("#Phone").val();
    $.post("http://www.centisoft.dk/api/Customer",{Name: name, Address: address, Address2: address2, Zip: zip, City: city, Country: country, Email: email, Phone: phone} )
    .done(function(){
        alert("Created");
    })
    .fail(function(){
        alert("Shits fucked m8");
    })
});
