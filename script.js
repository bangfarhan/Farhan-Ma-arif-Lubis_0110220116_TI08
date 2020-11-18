function login() {
	var username    = document.getElementById("username").value;
	var password    = document.getElementById("password").value;

	if (username == "admin" && password == "admin") {
		alert("Selamat datang admin" );
	} else {
		alert("Gagal login!!!");
	}
}
function focus(){
	var input = document.getElementById("username");
	input.focus();
}
function move(){
	var move = document.getElementById("btn");
	move.style.backgroundColor = "white";
	move.style.color = "#c23616"
}
function lave(){
	var move = document.getElementById("btn");
	move.style.backgroundColor = "#c23616";
	move.style.color = "white";
}