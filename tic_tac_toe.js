let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turnO =true; //playerX, playerO

const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6], 
];


const resetgame=()=>{
    true0=true;
    enableboxes();
    msgContainer.classList.add("hide");   
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        // console.log("box was clicked");
        // box.innerText="abcd";
        if(turnO){
            box.innerText="O";
            turnO=false;//here it will converted into turnO
        } else{
            box.innerText="X";
            turnO=true;//it will gopes to turnO
        }
        box.disabled =true;//it stores only one value when we click it wont stores second value it stores X or O
         
        checkwinner();
    });
 
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner) =>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};


const checkwinner=() =>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=boxes[pattern[0]].innerText;  
        let pos2val=boxes[pattern[1]].innerText; 
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                // console.log("winner",pos1val); 
                showWinner(pos1val);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

