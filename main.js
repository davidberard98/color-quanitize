window.onload = function() {
	var p1 = Point(1,2,3);
	var p2 = Point(4,5,6);
	var p3 = p2.subtract(p1);
	document.getElementById("h").innerHTML = p3;
};
