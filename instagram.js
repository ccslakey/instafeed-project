$(function(){
	// console.log("your jQuery is ready sir");


	var feed = new Instafeed({
	    resolution: "thumbnail",
	    get: 'tagged',
	    sortBy: "most-liked",
	    tagName: 'funny',
	    clientId: '90f3cb97b92b4ee0b847996ec7aa9264'
	});

	$("#get-photos").click(function() {
		// get user input
		var inputTag = $("#search-box").val();
		var defaultTag = feed.options.tagName;
		// if there is something we'll use it, if not use default
		finalTag = inputTag || defaultTag;

		// set feed to whatever we decided to use
		feed.options.tagName = finalTag
		console.log("the tag is: " + feed.options.tagName);
		feed.run();	
	});
	
	$("#clear-photos").click(function() {
		$("#instafeed").empty()
	});

});