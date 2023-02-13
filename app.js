
const startButton = document.querySelector(".btn-danger");
const fireParagraph = document.querySelector(".row").querySelectorAll(".col-5")[0].querySelector("p");
const waterParagraph = document.querySelector(".row").querySelectorAll(".col-5")[1].querySelector("p");
const infoParagraph = document.querySelector("#infoParagraph");
const boxButtonsArray = document.querySelectorAll(".btn-outline-primary");
let numberOfFullBox = 0;
let gameFinished = false;
let isReset = false;
let lastFilledBox = [];


setTheGame();



function setTheGame() {
    addElementsListener();
    openOrCloseBoxButtons(false);
}




function addElementsListener() {
    startButton.addEventListener('click', startButtonListener);

    for (const box of boxButtonsArray) {
        box.addEventListener("click", boxButtonListener);
    }
    
    
}


function startButtonListener() {
    startButton.style.display = "none";
    startGame();
}

function boxButtonListener() {
    if (numberOfFullBox == 9) { return; }
    
    let ind;

    for (const key in boxButtonsArray) {
        if(this === boxButtonsArray[key]){
            ind = key;
            break;
        }
    }

    lastFilledBox[0] = ind;
    lastFilledBox[1] = "O";

    if (this.querySelector("h1").textContent === "") {
        this.querySelector("h1").textContent = "O";

        numberOfFullBox++;
        checkAnyOneWin("O");
        if(gameFinished){return};
        if(gameFinished || isReset){
            isReset = false;
            return;
        }

        if(numberOfFullBox === 9){
            endTheGame("N");
            return;
        }
    
        makeMove();
    }

}
    

function checkAnyOneWin(l) {

    let isAnyOneWin = false;
    if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[2].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }
    else if (boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }
    else if (boxButtonsArray[6].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }
    else if (boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === l + l + l) {
        isAnyOneWin = true;
    }

    if(isAnyOneWin){
        gameFinished = true;
        endTheGame(l);
    }
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function endTheGame(l){
    
    if(l === "X"){
        infoParagraph.textContent = "Winner is 🔥 ";
        boxButtonsArray[lastFilledBox[0]] = "X";
    }
    else if ( l === "O"){
        infoParagraph.textContent = "Winner is 💧";
        boxButtonsArray[lastFilledBox[0]] = "O";
    }
    else{
        infoParagraph.textContent = "No one win the game";
    }



    wait(2000);

    
    //resetTheGame();
    location.reload();
    
}


function resetTheGame(){
    startButton.style.display = "inline";
    numberOfFullBox = 0;
    gameFinished = false;
    for (const box of boxButtonsArray) {
        box.disabled = true;
        box.querySelector("h1").textContent = "";
    }
    isReset = true;
}

function openOrCloseBoxButtons(b) {
    for (const box of boxButtonsArray) {
        box.disabled = !b;
    }
}


function startGame() {
    infoParagraph.textContent = "💧";
    setTheStarter();
}


function setTheStarter() {
    let rN;
    rN = Math.floor(Math.random() * 2);

    if (rN == 0) {
        makeMove();
        openOrCloseBoxButtons(true);
    }
    else {
        openOrCloseBoxButtons(true);
    }
}


function makeMove() {

    if(gameFinished){
        return;
    }
    let rN;

    while (true) {

        if (numberOfFullBox == 9) { return; }

        if(checkComputerWin()){break;}
        if(checkOrecaution()){break;}
        

        rN = Math.floor(Math.random() * 9);
        if (boxButtonsArray[rN].querySelector("h1").textContent === "") {
            boxButtonsArray[rN].querySelector("h1").textContent = "X";
            break;
        }
    }
    numberOfFullBox++;
    checkAnyOneWin("X");

    if(numberOfFullBox === 9){
        endTheGame("N");
        return;
    }

}



function checkComputerWin(){

    if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[2].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[0].querySelector("h1").textContent == ""){
            boxButtonsArray[0].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[1].querySelector("h1").textContent == ""){
            boxButtonsArray[1].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[2].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[3].querySelector("h1").textContent == ""){
            boxButtonsArray[3].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[5].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[6].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[6].querySelector("h1").textContent == ""){
            boxButtonsArray[6].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[7].querySelector("h1").textContent == ""){
            boxButtonsArray[7].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[8].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[0].querySelector("h1").textContent == ""){
            boxButtonsArray[0].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[3].querySelector("h1").textContent == ""){
            boxButtonsArray[3].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[6].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[1].querySelector("h1").textContent == ""){
            boxButtonsArray[1].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[7].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[2].querySelector("h1").textContent == ""){
            boxButtonsArray[2].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[5].querySelector("h1").textContent == ""){
            boxButtonsArray[5].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[8].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[0].querySelector("h1").textContent == ""){
            boxButtonsArray[0].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[8].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === "XX") {
        if(boxButtonsArray[2].querySelector("h1").textContent == ""){
            boxButtonsArray[2].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[6].querySelector("h1").textContent = "X";
            return true;
        }
    }

}


function checkOrecaution(){

    if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[2].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[0].querySelector("h1").textContent == ""){
            boxButtonsArray[0].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[1].querySelector("h1").textContent == ""){
            boxButtonsArray[1].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[2].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[3].querySelector("h1").textContent == ""){
            boxButtonsArray[3].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[5].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[6].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[6].querySelector("h1").textContent == ""){
            boxButtonsArray[6].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[7].querySelector("h1").textContent == ""){
            boxButtonsArray[7].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[8].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[0].querySelector("h1").textContent == ""){
            boxButtonsArray[0].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[3].querySelector("h1").textContent == ""){
            boxButtonsArray[3].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[6].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[1].querySelector("h1").textContent == ""){
            boxButtonsArray[1].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[7].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[2].querySelector("h1").textContent == ""){
            boxButtonsArray[2].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[5].querySelector("h1").textContent == ""){
            boxButtonsArray[5].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[8].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[0].querySelector("h1").textContent == ""){
            boxButtonsArray[0].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[8].querySelector("h1").textContent = "X";
            return true;
        }
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === "OO") {
        if(boxButtonsArray[2].querySelector("h1").textContent == ""){
            boxButtonsArray[2].querySelector("h1").textContent = "X";
            return true;
        }
        else if(boxButtonsArray[4].querySelector("h1").textContent == ""){
            boxButtonsArray[4].querySelector("h1").textContent = "X";
            return true;
        }
        else{
            boxButtonsArray[6].querySelector("h1").textContent = "X";
            return true;
        }
    }
}






