$(function(){
 
 $.ajax({
 	url:"./credentials.js",
 	type: "GET",
 	crossDomain: true,
 	dataType: "jsonp"
 }).done(function (data) {
 	console.log(data);
 })
	
	


	$("#get-photos").click(function() {
		
		$("#instafeed").empty()

		$.ajax({
			url:"https://api.instagram.com/v1/tags/nofilter/media/recent?client_id="+client_id,
			type: "GET",
			crossDomain: true,
			dataType: "jsonp"
		}).done(function (data) {
			console.log(data);
		})
		
	});
	
	$("#clear-photos").click(function() {
		$("#instafeed").empty()
	});
});