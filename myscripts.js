
function myNavFunc(){
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1) 
        || (navigator.platform.indexOf("iPod") != -1)
        || (navigator.platform.indexOf("iPad") != -1))
         window.open("maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=40.876831326507, 15.187468160466818");
    else
         window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=40.876831326507, 15.187468160466818");
}


//@use "@material/card";

//@include card.core-styles;