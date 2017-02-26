var a = 5 + 6;
console.log(a);
a = 22;
console.log(a);
console.log('meme');

function myTestFunction(){
    document.getElementById("test").innerHTML = "Hello World";
}

function myTestAlertFunction(){
    window.setTimeout(sleeperText,2000);
}

function sleeperText(){
    alert("test")
}
function colorChange(){
    document.getElementById("texttest").style.color = "blue";
}
function rotatePage(){
    ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	document.body.style[prefix + 'transform'] = 'rotate(180deg)';
});
}


function myClock() {
    var myVar = setInterval(myClock,1000);
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}