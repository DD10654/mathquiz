player1 = 0;
player2 = 0;

function login() {
    player1 = document.getElementById("pl1").value
    player2 = document.getElementById("pl2").value
    localStorage.setItem("player1", player1)
    localStorage.setItem("player2", player2)
    window.location = "newScreen.html"
}