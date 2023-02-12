
const startButton = document.querySelector(".btn-danger");
const fireParagraph = document.querySelector(".row").querySelectorAll(".col-5")[0].querySelector("p");
const waterParagraph = document.querySelector(".row").querySelectorAll(".col-5")[1].querySelector("p");
const infoParagraph = document.querySelector("#infoParagraph");
const boxButtonsArray = document.querySelectorAll(".btn-outline-primary");


setTheGame();

function setTheGame(){

    openOrCloseBoxButton(false);
    addElementsListener();
}


function openOrCloseBoxButton(b){

    for (const box of boxButtonsArray) {
        box.disabled = !b;
    }
    
}


function addElementsListener(){
    startButton.addEventListener("click",startButtonClick);
    for (const box in boxButtonsArray) {
        boxButtonsArray[box].addEventListener("click",function(){
            boxButtonClick(box);
        });
    }
}

function startButtonClick(){
    this.disabled = true;
    this.style.display = "none";
    openOrCloseBoxButton(true);
}

function boxButtonClick(index){
    console.log(index);
}