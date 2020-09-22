/// all variables I used to put global are tugged into this "revealing module pattern"

let setup = (()=>{
    let body = document.querySelector("body");
    let restartGame = document.querySelector(".restartGame");
    let restartButton = document.querySelector("#restartButton");

    restartButton.addEventListener("click", ()=> {
        location.reload();
    });

    
//
    let myCanvas = document.createElement("canvas");
    myCanvas.setAttribute("tabindex","1");
    let ctx = myCanvas.getContext("2d");
    body.appendChild(myCanvas);
    myCanvas.setAttribute("width", "600");
    myCanvas.setAttribute("height", "600");
    ctx.font = "120px Arial";

    let gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    
    return {ctx, myCanvas, gameBoard, restartButton, restartGame};
})();

/////////// Players
let players = (score, turn)=>{

    let setMarker = (marker)=> {

        for(i = 0; i < 3; i++) {
            for(j = 0; j < 3; j++) {

                if (setup.gameBoard[i][j] == marker) {

                    if      (i == 0)    v=1/6;
                    else if (i == 1)    v=1/2;
                    else if (i == 2)    v=5/6;
                    
                    if      (j == 0)    w=1/6;
                    else if (j == 1)    w=1/2;
                    else if (j == 2)    w=5/6;

                    setup.ctx.fillText(marker, setup.myCanvas.width*w,setup.myCanvas.height*v);
                }
            }
        }
        swapTurns();
        gameLogic();
    }
    
    return{turn, score, setMarker};
}
let playerX = players(0, true);
let playerO = players(0, false);

//////////Setting up the grid
let drawGrid = (()=>{
    let width = setup.myCanvas.width;
    let height = setup.myCanvas.height;
    for(i = 0; i < 4; i++) {
        setup.ctx.beginPath();
        if(i==0) {setup.ctx.moveTo(width/3,0);setup.ctx.lineTo(width/3,height);}
        if(i==1) {setup.ctx.moveTo(width*2/3,0);setup.ctx.lineTo(width*2/3,height);}
        if(i==2) {setup.ctx.moveTo(0,height/3);setup.ctx.lineTo(width,height/3);}
        if(i==3) {setup.ctx.moveTo(0,height*2/3);setup.ctx.lineTo(width,height*2/3);}
        setup.ctx.lineWidth = 6;
        setup.ctx.stroke();
    }
})();


//////////// Canvas clickEvent
setup.myCanvas.addEventListener("click", (e)=> { 
    let rect = setup.myCanvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let width = setup.myCanvas.width;
    let height = setup.myCanvas.height;

if (playerX.turn == true) {
// First Row
    if(x < width/3 && y < height/3 && setup.gameBoard[0][0] == "")                      {setup.gameBoard[0][0] = "X";playerX.setMarker("X");}
    if(x > width/3 && x<width*2/3 && y<height/3 && setup.gameBoard[0][1] == "")         {setup.gameBoard[0][1] = "X";playerX.setMarker("X");}
    if(x>width*2/3 && y<height/3 && setup.gameBoard[0][2] == "")                        {setup.gameBoard[0][2] = "X";playerX.setMarker("X");}
// Second Row
    if(x<width/3 && y>height/3 && y<height*2/3 && setup.gameBoard[1][0] == "")          {setup.gameBoard[1][0] = "X";playerX.setMarker("X");}
    if(x>width/3&&x<width*2/3&&y>height/3&&y<height*2/3 && setup.gameBoard[1][1] == "") {setup.gameBoard[1][1] = "X";playerX.setMarker("X");}
    if(x>width*2/3 && y>height/3 &&y<height*2/3 && setup.gameBoard[1][2] == "")         {setup.gameBoard[1][2] = "X";playerX.setMarker("X");}
// Third Row
    if(x<width/3 && y>height*2/3 && setup.gameBoard[2][0] == "")                        {setup.gameBoard[2][0] = "X";playerX.setMarker("X");}
    if(x>width*1/3 && x<width*2/3 && y>height*2/3 && setup.gameBoard[2][1] == "")       {setup.gameBoard[2][1] = "X";playerX.setMarker("X");}
    if(x>width*2/3 && y>height*2/3 && setup.gameBoard[2][2] == "")                      {setup.gameBoard[2][2] = "X";playerX.setMarker("X");}
    }

else if(playerX.turn == false){
// First Row
    if(x < width/3 && y < height/3 && setup.gameBoard[0][0] == "")                       {setup.gameBoard[0][0] = "O";playerO.setMarker("O");}
    if(x > width/3 && x<width*2/3 && y<height/3 && setup.gameBoard[0][1] == "")          {setup.gameBoard[0][1] = "O";playerO.setMarker("O");}
    if(x>width*2/3 && y<height/3 && setup.gameBoard[0][2] == "")                         {setup.gameBoard[0][2] = "O";playerO.setMarker("O");}
// Second Row
    if(x<width/3 && y>height/3 &&y<height*2/3 && setup.gameBoard[1][0] == "")            {setup.gameBoard[1][0] = "O";playerO.setMarker("O");}
    if(x>width/3&&x<width*2/3&&y>height/3 && y<height*2/3 && setup.gameBoard[1][1] == ""){setup.gameBoard[1][1] = "O";playerO.setMarker("O");}
    if(x>width*2/3 && y>height/3 && y<height*2/3 && setup.gameBoard[1][2] == "")         {setup.gameBoard[1][2] = "O";playerO.setMarker("O");}
// Third Row
    if(x<width/3 && y>height*2/3 && setup.gameBoard[2][0] == "")                         {setup.gameBoard[2][0] = "O";playerO.setMarker("O");}
    if(x>width*1/3 && x<width*2/3 && y>height*2/3 && setup.gameBoard[2][1] == "")        {setup.gameBoard[2][1] = "O";playerO.setMarker("O");}
    if(x>width*2/3 && y>height*2/3 && setup.gameBoard[2][2] == "")                       {setup.gameBoard[2][2] = "O";playerO.setMarker("O");}
}
    
}, false);
////////////////////////
function swapTurns(){
    if (playerX.turn == true)            {playerX.turn = false;}
    else if (playerX.turn == false)      {playerX.turn = true};
}
///////////////////////
function gameLogic(){
    if ((setup.gameBoard[0][0] == "X" && setup.gameBoard[0][1] == "X" && setup.gameBoard[0][2] == "X")    || 
        (setup.gameBoard[1][0] == "X" && setup.gameBoard[1][1] == "X" && setup.gameBoard[1][2] == "X")    ||
        (setup.gameBoard[2][0] == "X" && setup.gameBoard[2][1] == "X" && setup.gameBoard[2][2] == "X")    ||
        (setup.gameBoard[0][0] == "X" && setup.gameBoard[1][0] == "X" && setup.gameBoard[2][0] == "X")    ||
        (setup.gameBoard[0][1] == "X" && setup.gameBoard[1][1] == "X" && setup.gameBoard[2][1] == "X")    ||
        (setup.gameBoard[0][2] == "X" && setup.gameBoard[1][2] == "X" && setup.gameBoard[2][2] == "X")    ||
        (setup.gameBoard[0][0] == "X" && setup.gameBoard[1][1] == "X" && setup.gameBoard[2][2] == "X")    ||
        (setup.gameBoard[0][2] == "X" && setup.gameBoard[1][1] == "X" && setup.gameBoard[2][0] == "X")) {

            console.log("Player X wins!");
            setup.myCanvas.classList.add("hide");
            setup.restartGame.classList.remove("hide");
            setup.restartGame.classList.add("showDiv");
            setup.restartButton.classList.remove("hide");
    }
    else if (   (setup.gameBoard[0][0] == "O" && setup.gameBoard[0][1] == "O" && setup.gameBoard[0][2] == "O")    || 
                (setup.gameBoard[1][0] == "O" && setup.gameBoard[1][1] == "O" && setup.gameBoard[1][2] == "O")    ||
                (setup.gameBoard[2][0] == "O" && setup.gameBoard[2][1] == "O" && setup.gameBoard[2][2] == "O")    ||
                (setup.gameBoard[0][0] == "O" && setup.gameBoard[1][0] == "O" && setup.gameBoard[2][0] == "O")    ||
                (setup.gameBoard[0][1] == "O" && setup.gameBoard[1][1] == "O" && setup.gameBoard[2][1] == "O")    ||
                (setup.gameBoard[0][2] == "O" && setup.gameBoard[1][2] == "O" && setup.gameBoard[2][2] == "O")    ||
                (setup.gameBoard[0][0] == "O" && setup.gameBoard[1][1] == "O" && setup.gameBoard[2][2] == "O")    ||
                (setup.gameBoard[0][2] == "O" && setup.gameBoard[1][1] == "O" && setup.gameBoard[2][0] == "O")) {
        
                    console.log("Player O wins!");
                    setup.myCanvas.classList.add("hide");
                    setup.restartGame.classList.remove("hide");
                    setup.restartGame.classList.add("showDiv");
                    setup.restartButton.classList.remove("hide");
    }   
}