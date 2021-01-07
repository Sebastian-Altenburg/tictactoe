import setupGrid from "../modules/setupGrid";
import gameLogic from "../modules/gameLogic";
import "./style.css";

/// all variables I used to put global are tugged into this "revealing module pattern"

const setup = (() => {
    const _restartButton = document.querySelector(".restartButton");

    _restartButton.addEventListener("click", () => {
        window.location.reload();
    });

    const scoreX = document.querySelector(".scoreX");
    const scoreO = document.querySelector(".scoreO");

    const myCanvas = document.querySelector("canvas");
    const ctx = myCanvas.getContext("2d");
    ctx.font = "120px Arial";

    const gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    return { ctx, myCanvas, gameBoard, scoreX, scoreO };
})();

/// //////// Players
const players = (score, turn) => {
    const setMarker = (marker) => {
        const { width, height } = setup.myCanvas;

        for (let i = 0; i < 3; i += 1) {
            for (let j = 0; j < 3; j += 1) {
                if (setup.gameBoard[i][j] === marker) {
                    let v;
                    let w;

                    if (i === 0) v = 1 / 6;
                    else if (i === 1) v = 1 / 2;
                    else if (i === 2) v = 5 / 6;

                    if (j === 0) w = 1 / 6;
                    else if (j === 1) w = 1 / 2;
                    else if (j === 2) w = 5 / 6;

                    setup.ctx.fillText(marker, width * w, height * v);
                }
            }
        }
    };

    return { turn, score, setMarker };
};
const playerX = players(0, true);
const playerO = players(0, false);

/// /////////////////////
function swapTurns() {
    if (playerX.turn === true) {
        playerX.turn = false;
    } else if (playerX.turn === false) {
        playerX.turn = true;
    }
}
/// ////////////////////
function clearBoard() {
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            setup.gameBoard[j][i] = "";
        }
    }
    setup.ctx.clearRect(0, 0, 1000, 1000);
    setupGrid.draw();
}
/// ///////////////////
const handleSequence = (letter) => {
    if (letter === "X") {
        playerX.setMarker("X");
    } else if (letter === "O") {
        playerO.setMarker("O");
    }

    swapTurns();

    const [score, XorO, tied] = gameLogic(setup.gameBoard, playerX.score, playerO.score);

    if (XorO === "X") {
        clearBoard();
        playerX.score = score;
    } else if (XorO === "O") {
        clearBoard();
        playerO.score = score;
    } else if (tied === true) {
        alert("TIED");
        clearBoard();
    }
};
/// /////
/// ///////// Canvas clickEvent
setup.myCanvas.addEventListener(
    "click",
    (e) => {
        const rect = setup.myCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const { width, height } = setup.myCanvas;

        if (playerX.turn === true) {
            /// First Row
            if (x < width / 3 && y < height / 3 && setup.gameBoard[0][0] === "") {
                setup.gameBoard[0][0] = "X";
                handleSequence("X");
            }
            if (
                x > width / 3 &&
                x < (width * 2) / 3 &&
                y < height / 3 &&
                setup.gameBoard[0][1] === ""
            ) {
                setup.gameBoard[0][1] = "X";
                handleSequence("X");
            }
            if (x > (width * 2) / 3 && y < height / 3 && setup.gameBoard[0][2] === "") {
                setup.gameBoard[0][2] = "X";
                handleSequence("X");
            }

            /// Second Row
            if (
                x < width / 3 &&
                y > height / 3 &&
                y < (height * 2) / 3 &&
                setup.gameBoard[1][0] === ""
            ) {
                setup.gameBoard[1][0] = "X";
                handleSequence("X");
            }
            if (
                x > width / 3 &&
                x < (width * 2) / 3 &&
                y > height / 3 &&
                y < (height * 2) / 3 &&
                setup.gameBoard[1][1] === ""
            ) {
                setup.gameBoard[1][1] = "X";
                handleSequence("X");
            }
            if (
                x > (width * 2) / 3 &&
                y > height / 3 &&
                y < (height * 2) / 3 &&
                setup.gameBoard[1][2] === ""
            ) {
                setup.gameBoard[1][2] = "X";
                handleSequence("X");
            }

            /// Third Row
            if (x < width / 3 && y > (height * 2) / 3 && setup.gameBoard[2][0] === "") {
                setup.gameBoard[2][0] = "X";
                handleSequence("X");
            }
            if (
                x > (width * 1) / 3 &&
                x < (width * 2) / 3 &&
                y > (height * 2) / 3 &&
                setup.gameBoard[2][1] === ""
            ) {
                setup.gameBoard[2][1] = "X";
                handleSequence("X");
            }
            if (x > (width * 2) / 3 && y > (height * 2) / 3 && setup.gameBoard[2][2] === "") {
                setup.gameBoard[2][2] = "X";
                handleSequence("X");
            }
        } else if (playerX.turn === false) {
            /// First Row
            if (x < width / 3 && y < height / 3 && setup.gameBoard[0][0] === "") {
                setup.gameBoard[0][0] = "O";
                handleSequence("O");
            }
            if (
                x > width / 3 &&
                x < (width * 2) / 3 &&
                y < height / 3 &&
                setup.gameBoard[0][1] === ""
            ) {
                setup.gameBoard[0][1] = "O";
                handleSequence("O");
            }
            if (x > (width * 2) / 3 && y < height / 3 && setup.gameBoard[0][2] === "") {
                setup.gameBoard[0][2] = "O";
                handleSequence("O");
            }
            /// Second Row
            if (
                x < width / 3 &&
                y > height / 3 &&
                y < (height * 2) / 3 &&
                setup.gameBoard[1][0] === ""
            ) {
                setup.gameBoard[1][0] = "O";
                handleSequence("O");
            }
            if (
                x > width / 3 &&
                x < (width * 2) / 3 &&
                y > height / 3 &&
                y < (height * 2) / 3 &&
                setup.gameBoard[1][1] === ""
            ) {
                setup.gameBoard[1][1] = "O";
                handleSequence("O");
            }
            if (
                x > (width * 2) / 3 &&
                y > height / 3 &&
                y < (height * 2) / 3 &&
                setup.gameBoard[1][2] === ""
            ) {
                setup.gameBoard[1][2] = "O";
                handleSequence("O");
            }

            /// Third Row
            if (x < width / 3 && y > (height * 2) / 3 && setup.gameBoard[2][0] === "") {
                setup.gameBoard[2][0] = "O";
                handleSequence("O");
            }
            if (
                x > (width * 1) / 3 &&
                x < (width * 2) / 3 &&
                y > (height * 2) / 3 &&
                setup.gameBoard[2][1] === ""
            ) {
                setup.gameBoard[2][1] = "O";
                handleSequence("O");
            }
            if (x > (width * 2) / 3 && y > (height * 2) / 3 && setup.gameBoard[2][2] === "") {
                setup.gameBoard[2][2] = "O";
                handleSequence("O");
            }
        }
    },
    false
);

function update() {
    setup.scoreX.innerHTML = playerX.score;
    setup.scoreO.innerHTML = playerO.score;

    window.requestAnimationFrame(update);
}
update();
