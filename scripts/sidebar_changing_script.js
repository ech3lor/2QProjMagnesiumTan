var sidebarclosed = false;
var mainarticlemargin;
function closeSidebar() {
	var sidebarstate = document.getElementById("sidebar");
	mainarticlemargin = document.getElementById("main");
	if (sidebarclosed == false){
		sidebarstate.style.left ="-325px";
		mainarticlemargin.style.marginLeft = "25px";
		document.getElementsByTagName("button").textContent = ">";
		sidebarclosed = true;
	}
	else {
		sidebarstate.style.left ="0px";
		mainarticlemargin.style.marginLeft = "350px";
		document.getElementsByClassName("sidebarbtn1").textContent = "<";
		sidebarclosed = false;
	}
	
}
