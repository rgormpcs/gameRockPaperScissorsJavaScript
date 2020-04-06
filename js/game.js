let playAgain = true;
let name = "";
name = prompt("Hi what is your name:");



function gameRockPapperScissors(Player1, Player2, name) {

    if (Player1 == "rock") {
        if (Player2 == "scissors") {
            document.getElementById("result").innerHTML = name + ' you win.!!'
            askYourName(playAgain);
        } else if (Player2 == "paper") {
            document.getElementById("result").innerHTML = "Computer win!!";
            askYourName(playAgain);
        } else
            document.getElementById("result").innerHTML = "Play again";
        askYourName(playAgain);
    }
    if (Player1 == "paper") {
        if (Player2 == "scissors") {
            document.getElementById("result").innerHTML = "Computer win!!";
            askYourName(playAgain);
        } else if (Player2 == "paper") {
            document.getElementById("result").innerHTML = "Play again";
            askYourName(playAgain);
        } else
            document.getElementById("result").innerHTML = name + ' you win.!!'
        askYourName(playAgain);
    }

    if (Player1 == "scissors") {
        if (Player2 == "scissors") {
            document.getElementById("result").innerHTML = "Play again";
            askYourName(playAgain);
        } else if (Player2 == "paper") {
            document.getElementById("result").innerHTML = name + ' you win.!!'
            askYourName(playAgain);
        } else
            document.getElementById("result").innerHTML = "Computer win!!";
        askYourName(playAgain);
    }

}

function choiseOption(number) {

    if (number / 1 === number) {
        if (0 < number < 4) {
            let option = {
                1: "rock",
                2: "paper",
                3: "scissors",
            };
            var player1 = option[number];
            var player2 = option[parseInt(Math.random() * (+3 - +1) + +1)];

            gameRockPapperScissors(player1, player2, name);

            document.getElementById("player1").value = player1;
            document.getElementById("player1").style.font = "font-family: Arial, Helvetica, sans-serif";
            document.getElementById("computer").value = player2;
            document.getElementById("computer").style.font = "font-family: Arial, Helvetica, sans-serif";

        } else {
            alert("Sorry This number is not an option");
        }
    } else {
        alert("Sorry This is not a number");
    }
}


function askYourName(playAgain) {
    function comfirm() {
        if (confirm('Do you want play again')) {
            playAgain = true;
            clean();
        } else {
            playAgain = false;
            name = prompt("Hi what is your name:");
            clean();
        }
    }

    setTimeout(comfirm, 1000);
}


function clean() {
    document.getElementById("player1").value = "";
    document.getElementById("computer").value = "";
}