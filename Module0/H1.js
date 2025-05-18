'use strict';

function changeTheme(){
    document.body.style.backgroundColor ="black";
    document.body.style.color="white";
    let link = document.getElementsByTagName("a");
    for (i = 0; i < link.length; i++){
        link[i].style.color = "green";
    }
}

function changetext(){
    let button = document.getElementById("themaKnop");
    if (button.innerText == "Donker thema"){
        button.innerText = "Licht thema";
    }else{
        button.innerText = "Donker thema";
    }
}
