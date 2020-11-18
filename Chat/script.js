function send() {
	var pesan    = document.getElementById("message").value;
	var content  = document.getElementById('isi').innerHTML;
	if (pesan != "" && content =="") {
		document.getElementById('isi').innerHTML = pesan;
		document.getElementById("message").value = "";
		focus();
	}
	else if (pesan != "") {
		document.getElementById('isi').innerHTML = content +"<br>"+ pesan;
		document.getElementById("message").value = "";
		focus();
	}
}
function focus(){
	var input    = document.getElementById("message");
	input.focus();
}

document.getElementById('message').addEventListener("keyup", function(event){
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("btn").click();
	}
})