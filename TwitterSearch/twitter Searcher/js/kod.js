$(document).ready(function() {
    /*
	$.getJSON('https://twitter.com/search?q=samsung&src=typd?callback=?', function(result) {
		var response = $.parseJSON(result);
		alert(response);
        //alert(result[0]);
    });

	*/
	   /*
	$.getJSON('https://twitter.com/i/search/typeahead.json?count=10&filters=true&q=batman&result_type=topics%2Cusers&src=SEARCH_BOX?callback=?', function(result) {
		//alert(result);
		var response = JSON.parse(result);
	alert(response.users[0].id);
        //alert(result[0]);
    });
	
	*/
	
	/*
	$.ajax({
    url: "https://twitter.com/search?q=samsung&src=typd",

    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",

    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",

    // Tell YQL what we want and that we want JSON
    data: {
        q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },

    // Work with the response
    success: function( response ) {
        console.log( response ); // server response
//		alert(response);
    }
});*/



 $.ajax({
	
    url: "https://twitter.com/search?q=samsung&src=typd?callback=?",
    dataType:"jsonp",
	overrideMimeType:"text/html",
	//jsonpCallback : 'callback',
    success: function(responseData) {
	   var proba = responseData;
		$("#omot").html(
			responseData.users[0].id +
			responseData.users[0].id_str +
			responseData.users[0].name +
			responseData.users[0].screen_name +
			responseData.users[0].profile_image_url +
			responseData.users[0].profile_image_url_https +
			responseData.users[0].location +
			responseData.users[0].rounded_score 
			
		
		);
    }
}); 



/*
"id":6096262,
"id_str":"6096262",
"verified":false,
"is_dm_able":false,
"name":"Batman",
"screen_name":"Batman",
"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/17847592\/batmanbegins_normal.png",
"profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/17847592\/batmanbegins_normal.png",
"location":"Gotham",
"is_protected":false,
"rounded_score":45255,
"social_proof":0,
"connecting_user_count":0,
"connecting_user_ids":[
*/


});
