function pilih(){
    var change    = document.getElementById("change");
    var image     = change.selectedIndex;
    var area      = document.getElementById("img");
    if (change[image].value == 5) {
        area.src="image/"+change[image].value+".jpg";
        change.style.backgroundColor = "pink";
    } else {
        area.src="image/"+change[image].value+".jpg";
        change.style.backgroundColor = "white";
    }
}