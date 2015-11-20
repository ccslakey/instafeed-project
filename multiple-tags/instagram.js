$(function() {
    var client_id = "90f3cb97b92b4ee0b847996ec7aa9264";

    // decide whether to use a default 
    // hashtag or get an array of input
    var assignTags = function() {
        // get user input
        var inputArr = $("#search-box").val();
        if(!inputArr){
        	var defaultTag = "puppy";
        } else{
        	inputArr = inputArr.split(" ")
        }
        // if there is something we'll use it, if not use default
        var hashtag = inputArr || defaultTag
        return hashtag
    }

    $("#get-photos").click(function() {
        // $("#instafeed").empty()
        var tags = assignTags();
        
        if (Array.isArray(tags)) {
        	console.log("now searching instagram for " + tags.toString());
      		// make several api calls with user input
        	tags.forEach(function (tag) {
        		callInstagramAPI(tag);

        	});
      
    	} else {
    	// just use the default tag
        console.log(tags);
        callInstagramAPI(tags);
        }
    });

    function callInstagramAPI(tag) {
        $.ajax({
            url: "https://api.instagram.com/v1/tags/" + tag + "/media/recent?&client_id=" + client_id,
            type: "GET",
            crossDomain: true,
            dataType: "jsonp"
        }).done(function(data) {
            console.log(data);
        });
    }	

    $("#clear-photos").click(function() {
        $("#instafeed").empty()
    });
});
