"use strict";

function toggleLabel(){
    const button = document.getElementById("button");
    if(button.innerText == "Hallo!"){
        button.innerHTML = "Tot ziens!";
    }else{
        button.innerHTML = "Hallo!";
    } 
}