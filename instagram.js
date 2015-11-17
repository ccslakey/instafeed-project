$(function(){

	var defaultOptions = {
		limit: 50,
	    resolution: "thumbnail",
	    get: 'tagged',
	    sortBy: "most-liked",
	    tagName: 'funny',
	    clientId: '90f3cb97b92b4ee0b847996ec7aa9264'
	}

	var assignTags = function () {
		var feed = new Instafeed(defaultOptions);
		// get user input
		var inputTag = $("#search-box").val();
		var defaultTag = feed.options.tagName;
		// if there is something we'll use it, if not use default
		finalTag = inputTag || defaultTag;

		// set feed to whatever we decided to use
		feed.options.tagName = finalTag
		console.log("the tag is: " + feed.options.tagName);	
		feed.run();	
	}

	$("#get-photos").click(function() {
		
		$("#instafeed").empty()

		assignTags();
		
	});
	
	$("#clear-photos").click(function() {
		$("#instafeed").empty()
	});

});