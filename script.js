// Selectors
let body = document.querySelector("body");
let restartGame = document.querySelector(".restartGame");
let restartButton = document.querySelector("#restartButton");
// 

let setup = (()=>{
    let myCanvas = document.createElement("canvas");
    myCanvas.setAttribute("tabindex","1");
    let ctx = myCanvas.getContext("2d");
    body.appendChild(myCanvas);
    myCanvas.setAttribute("width", "600");
    myCanvas.setAttribute("height", "600");
    let gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    // return {ctx, myCanvas, gameBoard};
})();
let playerX = ()=>{
    let score = 0;
    return{};
};
let playerO = ()=>{
    let score = 0;
    return{};
};
