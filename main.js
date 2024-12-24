console.log("welcome to Tic Tac Toe");

let turn = "x"
let gameover = false;
//function to change the turn

 const changeTurn = () =>{
return turn === "x"?"0": "x"
}

//function to check for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
win.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!== "")){   
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
    gameover = true
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px" 
}
})
}

//game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext = element.querySelector('.boxtext');
element.addEventListener('click',() =>{
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;
       turn = changeTurn();
        checkWin();
        if(!gameover){
        document.getElementsByClassName("info")[0].innerText = "turn for" +  turn;
        
        }
    }
})

})

// add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "x";
    gameover = false 
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0" 
})