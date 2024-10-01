let gameSeq = [];
let userSeq = [];
let btnColor = ["pink", "green", "orange", "blue"];

let level = 0;
let gameStart = false


document.addEventListener('keypress', function() {
    if (gameStart == false) {
        console.log('game started');
        gameStart = true;
        levelUp();
    }
});

// ********************This function is used for Leveling Score*********************************||
function levelUp() {
    userSeq = [];
    let h2 = document.querySelector('h2');
    level++;
    h2.innerText = `Level ${level}`;
    let ranInx = Math.floor(Math.random() * 3);
    let ranColor = btnColor[ranInx];
    let ranbt = document.querySelector(`.${ranColor}`); //Element Selector    
    gameSeq.push(ranColor);
    console.log(gameSeq)
    gameFlash(ranbt);

}

// ********************This function is used for flash*********************************||
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(() => {
        btn.classList.remove('userFlash');
    }, 250);
}

function checkAns(inx) {
    if (userSeq[inx] === gameSeq[inx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerHTML = `Game Over!! Your Score was  <b> ${level}.</b> <br>  Press Any Key to Start Game`
        let body = document.querySelector("body");
        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 600);
        body.style.backgroundColor = "red";
        reset();
    }
}
// ********************This function is used for AddEVentListner*********************************||
function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    userFlash(btn);
    checkAns(userSeq.length - 1)
}

let allBtn = document.querySelectorAll(".btn");
for (let fbtn of allBtn) {
    fbtn.addEventListener('click', btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    gameStart = false;
}