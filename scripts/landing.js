var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    
    var revealPoint = function(point){
        points[point].style.opacity = 1;
        points[point].style.transform = "scaleX(1) translateY(0)";
        points[point].style.msTransform = "scaleX(1) translateY(0)";
        points[point].style.WebkitTransform = "scaleX(1) translateY(0)";
        
        points[point].style.transform = "rotate(350deg)";
        points[point].style.msTransform = "rotate(350deg)";
        points[point].style.WebkitTransform = "rotate(350deg)";
        points[point].style.transition = "1s";
        points[point].style.msTransition = "1s";
        points[point].style.WebkitTransition = "1s";    
        }; 
    
    for ( var i = 0; i <= points.length -1; i++){
        revealPoint(i);
        }
};

window.onload = function() {
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
    });
}