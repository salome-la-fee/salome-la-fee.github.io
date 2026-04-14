$(document).ready(function(){

 // Get URL parameters
 const params = new URLSearchParams(window.location.search);

 // Get the value of "video" parameter
 const videoUrl = params.get("item");
 
 // Set iframe src if parameter exists
 if (videoUrl) { 
     document.getElementById("frameContainer").src = videoUrl;
 }

});