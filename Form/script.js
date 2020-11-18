function validation() {
    var name    = document.getElementById("name").value;
    var email   = document.getElementById("email").value;
    var time    = document.getElementById("time").value;
    var to      = document.getElementById("destination").value;
    var ticket  = document.getElementById("ticket");
    var change  = ticket.selectedIndex;


    var name1   = document.getElementById("name1").innerHTML;
    var email1  = document.getElementById("email1").innerHTML;
    var time1   = document.getElementById("time1").innerHTML;
    var to1     = document.getElementById("destination1").innerHTML;
    var ticket1 = document.getElementById("ticket1").innerHTML;

    if (name == "admin") {
        document.getElementById("nam").innerHTML= "" ;
        if (email == "admin@gmail.com") {
            document.getElementById("ema").innerHTML= "" ;
            if (time == "07:00") {
                document.getElementById("tim").innerHTML= "" ;
                if (to == "jakarta") {
                    document.getElementById("des").innerHTML= "" ;
                    if (ticket[change].value == 3) {
                        document.getElementById("tic").innerHTML= "" ;
                        document.getElementById("name1").innerHTML   = name1 +" "+name;
                        document.getElementById("email1").innerHTML  = email1 + " " + email;
                        document.getElementById("time1").innerHTML= time1 + " " + time;
                        document.getElementById("destination1").innerHTML= to1 + " " + time;
                        document.getElementById("ticket1").innerHTML = ticket1 + " " + ticket[change].value;
                    } else {

                        document.getElementById("tic").innerHTML= "!" ;
                        document.getElementById("tic").style.fontSize="40px";
                    }
                } else {
                    document.getElementById("des").innerHTML= "!" ;
                    document.getElementById("des").style.fontSize="40px";
                }
            } else {
                document.getElementById("tim").innerHTML= "!" ;
                document.getElementById("tim").style.fontSize="40px";
            }
        } else {
            document.getElementById("ema").innerHTML= "!" ;
            document.getElementById("ema").style.fontSize="40px";
        }
    } else {
        document.getElementById("nam").innerHTML= "!" ;
        document.getElementById("nam").style.fontSize="40px";
    }

}


function focus(){
    var input = document.getElementById("name");
    input.focus();
}


document.getElementById('destination').addEventListener("keyup", function(event){
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("btn").click();
	}
})