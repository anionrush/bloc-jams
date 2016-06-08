var animatePoints = function() {
    var points = document.getElementsByClassName('point');
    
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
