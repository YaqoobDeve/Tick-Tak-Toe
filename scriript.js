let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".upcontainer")
let msg = document.querySelector("#msg")
let turn0 = true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame =()=> {
turn0 = true;
enablebosxes();
msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText="O"
            box.style.color="#c60000e3"
            turn0=false;
        } else{
            box.innerText="X"
            box.style.color="blue"
            turn0=true;
        }
        box.disabled=true;
        checkwinner()
    });
});
const disablebosxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebosxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const sowwinner = (pos1val) =>{
    msg.innerText = `Congrats winner is ${pos1val} `;
    msgcontainer.classList.remove("hide");
    disablebosxes();
}



const checkwinner = ()=>{
for(pattern of winpattern){
    let pos1val = boxes[pattern[0]].innerText
    let pos2val = boxes[pattern[1]].innerText
    let pos3val = boxes[pattern[2]].innerText
    if( pos1val!="" && pos2val!="" && pos3val!="" ){
        if(pos1val==pos2val&&pos2val==pos3val){
            console.log("winner",pos1val)
            sowwinner(pos1val);
        }
    }
}
}

newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);