$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollBar: false,
		controlArrows: true,
		navigation: false,
		slidesNavigation: true,
		slidesNavPosition: "bottom",
	});

});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
