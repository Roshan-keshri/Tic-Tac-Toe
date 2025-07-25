let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
 let newgamebtr=document.querySelector("#new-game");
 let mssgwinner=document.querySelector(".mssgwinner");
let mssg=document.querySelector("#mssg");

let turnO=true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText="O";
        turnO=false;    
        }else{
        box.innerText="X";
        turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

 const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 const showwinner=(winner)=>{
         mssg.innerText=`congratulation, Winner is ${winner}`;
         mssgwinner.classList.remove("hide");
         disablebox();
 }
 
 const resetbox=()=>{
        turnO=true;
        enablebox();
        mssgwinner.classList.add("hide");
 };

 const checkwinner = ()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val); 
            }
        } 
    }
};

 newgamebtr.addEventListener("click",()=>{
    resetbox();
})

 reset.addEventListener("click",resetbox);