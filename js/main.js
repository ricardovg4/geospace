function leftup(elem){
    // var anim = document.getElementsByClassName("left-content-container");
    // for (i = 0; i < anim.length; i++){
    //     anim[i].style.opacity = '1';
    //     anim[i].style.transform = "translateY(0)";
    // }
    var el = elem.querySelector('.left-content-container');
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
}

function leftout(){
    var anim = document.getElementsByClassName("left-content-container");
    for (i = 0; i < anim.length; i++){
        anim[i].style.opacity = '0';
        anim[i].style.transform = "translateY(100px)";
    }
}

var left = document.getElementsByClassName('left-container');
var right = document.getElementsByClassName('right-w-container');
var butnback = document.getElementsByClassName('butn-back');
var sect = document.getElementsByClassName('hero');
var state = "closed";

function home1(elem){
    
    if (state == "closed"){
        sect[0].style.width = "100%";
        left[0].style.width = "50%";
        right[0].style.transform = "translateX(100%)";
        
        butnback[0].style.opacity = "1";
        state = "open";

        sect[0].style.zIndex= "10";
        sect[1].style.zIndex= "-1";
        sect[2].style.zIndex= "-1";

    }

    else{
        sect[0].style.width = "33.33%";
        left[0].style.width = "100%"
        right[0].style.transform = "translateX(-100%)";

        butnback[0].style.opacity = "0";
        state = "closed";

        sect[0].style.zIndex= "0";
        sect[1].style.zIndex= "0";
        sect[2].style.zIndex= "0";
        


    }
}



function home2(elem){
    if (state == "closed"){
        sect[0].style.transform = "translateX(-100%)";
        sect[2].style.transform = "translateX(100%)";

        sect[1].style.width = "100%";
        sect[1].style.left = "0%";   

        left[1].style.width = "50%";
        right[1].style.transform = "translateX(100%)";
        
        butnback[1].style.opacity = "1";
        state = "open";

        sect[1].style.zIndex= "10";
        sect[2].style.zIndex= "-1";
        sect[0].style.zIndex= "-1";


    }

    else{
        sect[0].style.transform = "translateX(0%)";
        sect[2].style.transform = "translateX(0%)";
        
        sect[1].style.width = "33.4%";
        sect[1].style.left = "33.3%";

        left[1].style.width = "100%"
        sect[1].style.left = "33.34";
        
        right[1].style.transform = "translateX(-100%)";

        butnback[1].style.opacity = "0";
        state = "closed";

        sect[0].style.zIndex= "0";
        sect[1].style.zIndex= "0";
        sect[2].style.zIndex= "0";

    }
}


function home3(elem){
    
    if (state == "closed"){
        sect[2].style.width = "100%";
        left[2].style.transform = "translateX(100%)";
        left[2].style.width = "50%";
        sect[2].style.left = "0%";
        right[2].style.transform = "translateX(0%)";
        
        butnback[2].style.opacity = "1";
        state = "open";
        sect[2].style.zIndex= "10";
        sect[1].style.zIndex= "-1";
        sect[0].style.zIndex= "-1";
    }

    else{
        sect[2].style.width = "33.33%";
        left[2].style.transform = "translateX(0%)";
        left[2].style.width = "100%"
        sect[2].style.left = "66.66%";
        right[2].style.transform = "translateX(200%)";

        butnback[2].style.opacity = "0";
        state = "closed";

        sect[2].style.zIndex= "0";
        sect[1].style.zIndex= "0";
        sect[0].style.zIndex= "0";

    }
}
