
const startButton = document.querySelector(".btn-danger");
const fireParagraph = document.querySelector(".row").querySelectorAll(".col-5")[0].querySelector("p");
const waterParagraph = document.querySelector(".row").querySelectorAll(".col-5")[1].querySelector("p");
const infoParagraph = document.querySelector("#infoParagraph");
const boxButtonsArray = document.querySelectorAll(".btn-outline-primary");
const delay = ms => new Promise(res => setTimeout(res, ms));
let WhoPlay;
let numberOfMoves = 0;
let whoWin;
let winnerBoxList = [];


if(localStorage.getItem("numberOfFireWin") === null){
    localStorage.setItem("numberOfFireWin",0);
}

if(localStorage.getItem("numberOfWaterWin") === null){
    localStorage.setItem("numberOfWaterWin",0);
}

fireParagraph.innerHTML = "🔥 " + localStorage.getItem("numberOfFireWin");
waterParagraph.innerHTML = "💧 " + localStorage.getItem("numberOfWaterWin");


openOrCloseBoxButtons(false);

startButton.addEventListener('click', startButtonListener);
for (const box of boxButtonsArray) {
        box.addEventListener("click", boxButtonListener);
    }

function startButtonListener() {
    startButton.style.display = "none";
    infoParagraph.textContent = "🔥 GOOD LUCK 💧";
    if(rN = Math.floor(Math.random() * 2) === 0){
        WhoPlay = 0;
    }
    else{
        WhoPlay = 1;
    }
    runTheGame();
}

async function boxButtonListener() {
    

    if (this.querySelector("h1").textContent === "") {
        this.querySelector("h1").textContent = "O";
        await delay(100);
        numberOfMoves++;
        WhoPlay = 0;
        runTheGame();
    }

}

async function runTheGame(){

    let controlLetter;

    if(WhoPlay === 0){
        controlLetter = "O";
        whoWin = 1;
    }
    else{
        controlLetter = "X";
        whoWin = 0;
    }

    if(checkAnyOneWin(controlLetter)){
        openOrCloseBoxButtons(false);
        
        if(whoWin == 0){
            infoParagraph.innerHTML = "The winner is 🔥";
            localStorage.setItem("numberOfFireWin",parseInt(localStorage.getItem("numberOfFireWin"))+1);
        }
        else{
            infoParagraph.innerHTML = "The winner is 💧";
            localStorage.setItem("numberOfWaterWin",parseInt(localStorage.getItem("numberOfWaterWin"))+1);
        }

        for (const wb of winnerBoxList) {
            boxButtonsArray[wb].style.backgroundColor = "blue";
            await delay(500);
        }

        await delay(4000);
        location.reload();
        return;
    }

    if(numberOfMoves == 9){
        infoParagraph.innerHTML = "The winners are 🔥 💧";
        openOrCloseBoxButtons(false);
        await delay(5000);
        location.reload();
        return;
    }

    if(WhoPlay === 0){
        makeMove();
    }
    else{
        openOrCloseBoxButtons(true);
    }
    
}




async function makeMove() {

    while (true) {

        let rN;
        if(checkComputerWin()){break;}
        if(checkOrecaution()){break;}
        

        rN = Math.floor(Math.random() * 9);
        if (boxButtonsArray[rN].querySelector("h1").textContent === "") {
            boxButtonsArray[rN].querySelector("h1").textContent = "X";
            break;
        }
    }
    
    await delay(100);
    numberOfMoves++;
    WhoPlay = 1;
    runTheGame();
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

function checkAnyOneWin(l) {

 
    if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[2].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 0;
        winnerBoxList[1] = 1;
        winnerBoxList[2] = 2;
    }
    else if (boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 3;
        winnerBoxList[1] = 4;
        winnerBoxList[2] = 5;
    }
    else if (boxButtonsArray[6].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 6;
        winnerBoxList[1] = 7;
        winnerBoxList[2] = 8;
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[3].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 0;
        winnerBoxList[1] = 3;
        winnerBoxList[2] = 6;
    }
    else if (boxButtonsArray[1].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[7].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 1;
        winnerBoxList[1] = 4;
        winnerBoxList[2] = 7;
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[5].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 2;
        winnerBoxList[1] = 5;
        winnerBoxList[2] = 8;
    }
    else if (boxButtonsArray[0].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[8].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 0;
        winnerBoxList[1] = 4;
        winnerBoxList[2] = 8;
    }
    else if (boxButtonsArray[2].querySelector("h1").textContent + boxButtonsArray[4].querySelector("h1").textContent + boxButtonsArray[6].querySelector("h1").textContent === l + l + l) {
        winnerBoxList[0] = 2;
        winnerBoxList[1] = 4;
        winnerBoxList[2] = 6;
    }

    if(winnerBoxList.length != 0){
        return true;
    }

    return false;
}

function openOrCloseBoxButtons(b) {
    for (const box of boxButtonsArray) {
        box.disabled = !b;
    }
}








