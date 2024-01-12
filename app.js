let us=0
let cs=0

let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#m")
let usp=document.querySelector("#us")
let csp=document.querySelector("#cs")

const compchoice=()=>{
    const option=["rock","paper","scissor"]
    const idx=Math.floor(Math.random()*3);
    return option[idx]

}
const drawgame=()=>{
    // console.log("Game was draw")
    msg.innerText=("Game was Draw. Play Again!")
    msg.style.backgroundColor="#1A1B41"
}

const showWinner=(userwin,compch,userch)=>{
    if(userwin){
        // console.log("You Won")
        us++
        usp.innerText=us
        msg.innerText=(`You Won! Your ${userch} beats ${compch}`)
        msg.style.backgroundColor="green"
    }else{
        // console.log("You Lose")
        cs++
        csp.innerText=cs
        msg.innerText=(`You Lose! ${compch} beats your ${userch}`)
        msg.style.backgroundColor="red"
    }


}

const playgame=(userch)=>{
    const compch=compchoice()
    // console.log("user choice=",userch);
    // console.log("comp choice=",compch);
    if(userch===compch){
        drawgame()
    }else{
        let userwin=true
        if(userch==="rock")
        userwin= compch==="paper"?false:true;
        else if(userch==="paper"){
            userwin= compch==="scissor"?false:true;
        }else if(userch==="scissor"){
            userwin= compch==="rock"?false:true;
        }
        showWinner(userwin,compch,userch)
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    })

});
 