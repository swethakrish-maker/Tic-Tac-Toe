const arr=[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [0,4,8]
];
const boxes=document.querySelectorAll("#box");
const msg=document.querySelector(".winner");
const btnres=document.querySelector("#reset");
let turno=true;
let count=0;
btnres.addEventListener("click",()=>{
    for(let p of boxes){
    p.disabled=false;
    p.innerText="";
    count=0;
    turno=true;
    msg.style.display = 'none';

    }
})
const draw=()=>{
    msg.style.display = 'block';
    msg.innerText=`The match is draw`;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        count++;
        let checkwinner=winner();
        if(count===9 &&  !checkwinner){
            draw();
        }
    })
})
const winner=()=>{
    for(let val of arr){
        const p1=boxes[val[0]].innerText;
        const p2=boxes[val[1]].innerText;
        const p3=boxes[val[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
        if(p1===p2 && p2===p3){
            showwinner(p1);
            return true;
        }
    }
    }
}
const showwinner=(val)=>{
    msg.style.display = 'block';

    msg.innerText=`congratulations!! the winner is ${val}`;
}
