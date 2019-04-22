function leftup(){
    var anim = document.getElementsByClassName("left-content-container");
    anim[0].style.opacity = '1';
    anim[0].style.transform = "translateY(0)";
}

function leftout(){
    var anim = document.getElementsByClassName("left-content-container");
    anim[0].style.opacity= '0';
    anim[0].style.transform = "translateY(100px)";
}

var state = "open";
function home(){
    var right = document.getElementsByClassName('right-w-container');
    var left = document.getElementsByClassName('left-container');
    var butnback = document.getElementsByClassName('butn-back');

    if (state == "open"){
        right[0].style.transition= "500ms";
        right[0].style.transform = "translateX(-200%)";

        left[0].style.transition = "500ms";
        left[0].style.transform = "translateX(-33%)";

        butnback[0].style.opacity = "0";

        state = "closed";
    }

    else{
        right[0].style.transition= "800ms";
        right[0].style.transform = "translateX(0%)";
        left[0].style.transform = "translateX(0%)";

        butnback[0].style.opacity = "1";

        state = "open";
    }
}