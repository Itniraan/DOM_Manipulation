// Image Gallery JavaScript
// This code adapted from Jeremy Keith's DOM Scripting book (http://domscripting.com/book/), chapter 4

function prepareGallery() {
	// The following lines are for capability detection (a good idea, but not strictly required    )
	if (!document.getElementsByTagName) return false; 
	if (!document.getElementById) return false; 
	if (!document.getElementById("imagegallery")) return false;
	// Grab the #imagegallery UL and assign it to the variable 'gallery'
	var gallery = document.getElementById("imagegallery");
	// Inside that UL, create an array composed of all the A (anchor) elements
	var links = gallery.getElementsByTagName("a");
	// For each one of those A elements, attach an onclick attribute that calls a function showPic (below)
	for ( var i=0; i < links.length; i++) {
		links[i].onclick = function() {
			showPic(this);
			return false;
		}
	}
}

function showPic(whichpic) { 
	// For the link that was clicked, capture the value of the href attribute as a variable called 'source'
	var source = whichpic.getAttribute("href"); 
	// Grab the IMG element with the id 'placeholder' and assign it to the variable of the same name
	var placeholder = document.getElementById("placeholder"); 
	// Change the image file that the IMG element points to in the src attribute based on the link clicked
	placeholder.setAttribute("src",source);
	// Capture the title attribute of the link clicked and assign it as the value for the variable 'text'
	var text = whichpic.getAttribute("title");
	// Grab the P element with the id 'description'
	var description = document.getElementById("description");
	// Set the content of that paragraph to the value of the title attribute for the link clicked
	description.firstChild.nodeValue = text; 
} 

window.onload = function()
{
    prepareGallery();
}