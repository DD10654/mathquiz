player1name = localStorage.getItem("player1");
player2name = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

document.getElementById("player1Score").innerHTML = player1name + " Score is " + player1score;
document.getElementById("player2Score").innerHTML = player2name + " Score is " + player2score;

question_turn = "player1"
answer_turn = "player2"


document.getElementById("question").innerHTML = "Question Turn : " + player1name;
document.getElementById("answer").innerHTML = "Answer Turn : " + player2name;

function send() {
    num1 = document.getElementById("nu1").value
    num2 = document.getElementById("nu2").value
    
    document.getElementById("player1Score").innerHTML = player1name + " Score is " + player1score;
    document.getElementById("player2Score").innerHTML = player2name + " Score is " + player2score;
    
    question = "<h4 id='word_display'> Q. " + num1 + "X" + num2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='check'>";
    button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";

    row = question + input_box + button;
    document.getElementById("output").innerHTML = row;
}


function check() {
    answer = num1 * num2;
    player_answer = document.getElementById("check").value;

    if (answer = player_answer) {
        if (answer_turn == "player1") {
            player1score = player1score + 1;
            player2score = player2score - 1;

            document.getElementById("player1Score").innerHTML = player1name + " Score is " + player1score;
            document.getElementById("player2Score").innerHTML = player2name + " Score is " + player2score;

        }

        else {
            player1score = player1score - 1;
            player2score = player2score + 1;

            document.getElementById("player1Score").innerHTML = player1name + " Score is " + player1score;
            document.getElementById("player2Score").innerHTML = player2name + " Score is " + player2score;

        }
    }

    else {
        if (answer_turn == "player1") {
            player1score = player1score - 1;
            player2score = player2score + 1;

            document.getElementById("player1Score").innerHTML = player1name + " Score is " + player1score;
            document.getElementById("player2Score").innerHTML = player2name + " Score is " + player2score;

        }

        else {
            player2score = player2score + 1;
            player1score = player1score - 1;

            document.getElementById("player1Score").innerHTML = player1name + " Score is " + player1score;
            document.getElementById("player2Score").innerHTML = player2name + " Score is " + player2score;

        }
    }

    document.getElementById("output").innerHTML = " "

    if (question_turn == "player1") {
        answer_turn = "player1"
        question_turn = "player2"
        document.getElementById("question").innerHTML = "Question Turn : " + player2name;
        document.getElementById("answer").innerHTML = "Answer Turn : " + player1name;
    }

    else {
        question_turn = "player1"
        answer_turn = "player2"
        document.getElementById("question").innerHTML = "Question Turn : " + player1name;
        document.getElementById("answer").innerHTML = "Answer Turn : " + player2name;
    }
}