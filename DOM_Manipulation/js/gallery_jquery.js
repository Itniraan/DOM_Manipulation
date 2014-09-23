//alert('External JavaScript');
// Image Gallery JavaScript
// This code adapted from Jeremy Keith's DOM Scripting book (http://domscripting.com/book/), chapter 4
// This is the jQuery version

// 1a. Wait until the DOM is ready to be manipulated
$(document).ready(function(){
	//alert('DOM ready.');
	// 2a. Add an onclick handler to all anchor elements inside the #imagegallery
	$("#imagegallery a").click(function(event){
		// 4. When an anchor is clicked, capture the href attribute node value
		var href = $(this).attr("href");
		console.log(href);
		// 5a. Fade out the #placeholder where the current image is contained, 
		// then when that animation is complete, run an anonymous function
		$("#placeholder").fadeOut('fast', function(){
			// 6. Set the #placeholder IMG element src attribute node value to the href captured from the anchor clicked
			$(this).attr("src", href);
			// 7. Fade in the #placeholder IMG element
			$(this).fadeIn('fast');
		// 5b. End the fade out anonymous function
		});
		// 8. Capture the value of the title attribute for the anchor element clicked
		var desc = $(this).attr("title");
		// 9. Set the text node of the #description element to that value
		$("#description").text(desc);
		// 3. Stop the default anchor event, which is the follow the href URL, from happening
		event.preventDefault();
	// 2b. End the onclick event handler function
	});
// 1b. End the DOM ready function
});
