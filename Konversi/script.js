function convert() {

    var nilai         = document.getElementById("nilai").value;
    
    var uang1         = document.getElementById("matauang1");
    var uang1value    = uang1.options[uang1.selectedIndex].value;
    var uang1text     = uang1.options[uang1.selectedIndex].text;

    var uang2         = document.getElementById("matauang2");
    var uang2value    = uang2.options[uang2.selectedIndex].value;
    var uang2text     = uang2.options[uang2.selectedIndex].text;

    var bantu3        = uang2value*nilai;

    document.getElementById("hasil").value = bantu3;
    document.getElementById("textarea").value = nilai +" "+ uang2text +" ....... "+ bantu3 +" "+ uang1text;

}
function focus(){
    var input = document.getElementById("nilai");
    input.focus();
}
document.getElementById('nilai').addEventListener("keyup", function(event){
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("btn").click();
	}
})