var boxes = document.querySelectorAll(".boxes");
var winnerdiv = document.querySelector("#winnerdiv");
var gameBox = document.querySelector(".gamebox");
var winner = document.createElement("h1");
var resetbtn = document.getElementById("reset");
var newGame = document.createElement("button");
console.log(resetbtn);
// winning petterns
var winPetterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
// toggle turns
var Xtrun = true;
// toggle logic
boxes.forEach(function (box) {
    var btn = box;
    btn.addEventListener("click", function () {
        if (Xtrun) {
            btn.innerHTML = btn.value = "X";
            btn.classList.add("trunX");
            btn.classList.remove("trun0");
            Xtrun = false;
        }
        else {
            btn.innerHTML = btn.value = "0";
            btn.classList.add("trun0");
            btn.classList.remove("trunX");
            Xtrun = true;
        }
        btn.classList.add("dbox");
        winnerChecker();
    });
});
//logic of checking winner 
var winnerChecker = function () {
    winPetterns.forEach(function (pettern) {
        var p1 = boxes[pettern[0]].innerText;
        var p2 = boxes[pettern[1]].innerText;
        var p3 = boxes[pettern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 == p3) {
                winner.innerText = "Congratulations\n                                                      Winner is : ".concat(p1);
                winnerdiv.appendChild(winner);
                winnerdiv.classList.add("winnerdiv");
                newGame.innerHTML = "new game";
                newGame.classList.add("new-game");
                winnerdiv.appendChild(newGame);
                boxes.forEach(function (box) {
                    box.classList.add("dbox");
                });
                gameBox.classList.add("hide-game-box");
                resetbtn.classList.add("hide-game-box");
            }
        }
    });
};
boxes.forEach(function (box) {
    var btn = box;
    newGame.addEventListener("click", function () {
        btn.classList.remove("dbox");
        btn.innerHTML = "";
        winnerdiv.removeChild(winner);
        winnerdiv.classList.remove("winnerdiv");
        winnerdiv.removeChild(newGame);
        gameBox.classList.remove("hide-game-box");
        resetbtn.classList.remove("hide-game-box");
    });
});
// logic for rest btn
boxes.forEach(function (box) {
    var btn = box;
    resetbtn.addEventListener("click", function () {
        btn.classList.remove("dbox");
        btn.innerHTML = "";
        winnerdiv.removeChild(winner);
        winnerdiv.classList.remove("winnerdiv");
    });
});
console.log(gameBox.children);
