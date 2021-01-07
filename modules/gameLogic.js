// eslint-disable-next-line consistent-return
const gameLogic = (gameBoard, scoreX, scoreO) => {
    const restartDiv = document.querySelector(".restartDiv");
    const restartButton = document.querySelector(".restartButton");

    if (
        (gameBoard[0][0] === "X" && gameBoard[0][1] === "X" && gameBoard[0][2] === "X") ||
        (gameBoard[1][0] === "X" && gameBoard[1][1] === "X" && gameBoard[1][2] === "X") ||
        (gameBoard[2][0] === "X" && gameBoard[2][1] === "X" && gameBoard[2][2] === "X") ||
        (gameBoard[0][0] === "X" && gameBoard[1][0] === "X" && gameBoard[2][0] === "X") ||
        (gameBoard[0][1] === "X" && gameBoard[1][1] === "X" && gameBoard[2][1] === "X") ||
        (gameBoard[0][2] === "X" && gameBoard[1][2] === "X" && gameBoard[2][2] === "X") ||
        (gameBoard[0][0] === "X" && gameBoard[1][1] === "X" && gameBoard[2][2] === "X") ||
        (gameBoard[0][2] === "X" && gameBoard[1][1] === "X" && gameBoard[2][0] === "X")
    ) {
        // eslint-disable-next-line no-param-reassign
        scoreX += 1;

        if (scoreX === 3) {
            restartDiv.classList.remove("hide");
            restartDiv.classList.add("showDiv");

            restartButton.innerHTML = `Player X Wins! <br> <span>Restart Game</span>`;
        } else {
            return [scoreX, "X", false];
        }
    } else if (
        (gameBoard[0][0] === "O" && gameBoard[0][1] === "O" && gameBoard[0][2] === "O") ||
        (gameBoard[1][0] === "O" && gameBoard[1][1] === "O" && gameBoard[1][2] === "O") ||
        (gameBoard[2][0] === "O" && gameBoard[2][1] === "O" && gameBoard[2][2] === "O") ||
        (gameBoard[0][0] === "O" && gameBoard[1][0] === "O" && gameBoard[2][0] === "O") ||
        (gameBoard[0][1] === "O" && gameBoard[1][1] === "O" && gameBoard[2][1] === "O") ||
        (gameBoard[0][2] === "O" && gameBoard[1][2] === "O" && gameBoard[2][2] === "O") ||
        (gameBoard[0][0] === "O" && gameBoard[1][1] === "O" && gameBoard[2][2] === "O") ||
        (gameBoard[0][2] === "O" && gameBoard[1][1] === "O" && gameBoard[2][0] === "O")
    ) {
        // eslint-disable-next-line no-param-reassign
        scoreO += 1;

        if (scoreO === 3) {
            // myCanvas.classList.add("hide");
            restartDiv.classList.remove("hide");
            restartDiv.classList.add("showDiv");

            restartButton.innerHTML = `Player O Wins! <br>  <span>Restart Game</span>`;
        } else {
            return [scoreO, "O", false];
        }
    }

    // eslint-disable-next-line no-use-before-define
    else if (allMarkersSet(gameBoard)) {
        return ["", "", true];
    }
};

function allMarkersSet(gameBoard) {
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            if (gameBoard[i][j] === "") {
                return false;
            }
        }
    }
    return true;
}

export default gameLogic;
