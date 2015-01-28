document.addEventListener("DOMContentLoaded", function(){


    if (navigator.geolocation) {
        var params = {enableHighAccuracy: true, timeout: 4000000, maximumAge: 0};
            navigator.geolocation.getCurrentPosition(watchPosition, gpsError, params);
    } 
    else {
        console.log("fail");
    }
});


function watchPosition(position) {
    
    
    var bod = document.getElementById("bodbod");
        bod.innerHTML += "<div id='latlong'>" + "Latitude: " + position.coords.latitude.toFixed(2) + "&deg;<br/>"
        + "Longitude: " + position.coords.longitude.toFixed(2) + "&deg;<br/>" + "</div";
    var canvas = document.createElement('canvas');
        canvas.setAttribute("id", "cancan");
        canvas.setAttribute("width", "400px");
        canvas.setAttribute("height", "400px");
    
    var latlat = position.coords.latitude;
    var longlong = position.coords.longitude;
    
    var imgimg = document.createElement("img");
        imgimg.setAttribute("width", "400px");
        imgimg.setAttribute("heigh", "400px");
        imgimg.setAttribute("src", "https://maps.googleapis.com/maps/api/staticmap?center=" + latlat + "," + longlong + "&zoom=14&size=400x400");
    
    var footsie = document.createElement("footer");
        footsie.innerHTML += "<div id='kenz'>McKenzie McGilchrist™</div>"
        
        bod.appendChild(canvas);
        bod.appendChild(footsie);
        canvas.appendChild(imgimg);
    
    
    var getcanvas = document.getElementById("cancan");
    var context = getcanvas.getContext('2d');
    
        imgimg.onload = function() {
    
            context.drawImage(imgimg, 0, 0);
        
    };
    
}


/*function watchPosition( position ){ 
  console.log( position.coords.latitude );
  console.log( position.coords.longitude );
  console.log( position.coords.accuracy );
  console.log( position.coords.altitude );
}
*/

function gpsError(error) {
    var errors = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
  };
    alert("Error: " + errors[error.code]);
}