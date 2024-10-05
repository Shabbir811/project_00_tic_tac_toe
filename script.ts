const boxes  =  document.querySelectorAll(".boxes") as NodeListOf<HTMLButtonElement>
const winnerdiv = document.querySelector("#winnerdiv") as HTMLDivElement;
const gameBox = document.querySelector(".gamebox") as HTMLDivElement
let winner = document.createElement("h1")as HTMLHeadingElement
const resetbtn = document.getElementById("reset") as HTMLButtonElement;
let newGame = document.createElement("button")as HTMLButtonElement;


console.log(resetbtn);


// winning petterns
const winPetterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


// toggle turns
let Xtrun = true;

// toggle logic
boxes.forEach((box)=>{
    let btn = box as HTMLButtonElement;
    btn.addEventListener("click",()=>{
        
        
        if(Xtrun){
          btn.innerHTML =   btn.value = "X"
          btn.classList.add("trunX") 
          btn.classList.remove("trun0")
            Xtrun = false;

        }else{
           btn.innerHTML =  btn.value = "0"
           btn.classList.add("trun0") 
          btn.classList.remove("trunX")
           
            Xtrun = true;

        }
        
        btn.classList.add("dbox")
        winnerChecker()

    
    })

})
   //logic of checking winner 
let winnerChecker = ()=>{
    winPetterns.forEach((pettern)=>{
        let p1= boxes[pettern[0]].innerText
        let p2 = boxes[pettern[1]].innerText
        let p3 = boxes[pettern[2]].innerText
        
      
       if(p1 != "" && p2 != "" && p3 != ""){

        if(p1 === p2 && p2 == p3){

            winner.innerText = `Congratulations
                                                      Winner is : ${p1}`
            winnerdiv.appendChild(winner)
            winnerdiv.classList.add("winnerdiv")
            newGame.innerHTML ="new game"
            newGame.classList.add("new-game")
            winnerdiv.appendChild(newGame)
            boxes.forEach((box)=>{
                (box as HTMLButtonElement).classList.add("dbox")
            
            })
            gameBox.classList.add("hide-game-box")
            resetbtn.classList.add("hide-game-box")



        

        }
       }

       
     })
    
    
} 


    
    boxes.forEach(box=>{
        
        let btn = box as HTMLButtonElement;
        newGame.addEventListener("click",()=>{
        
            btn.classList.remove("dbox");
            btn.innerHTML = "";
            winnerdiv.removeChild(winner);
            winnerdiv.classList.remove("winnerdiv")
            winnerdiv.removeChild(newGame)
            gameBox.classList.remove("hide-game-box")
            resetbtn.classList.remove("hide-game-box")
            
        })
    
       
    })



    // logic for rest btn
boxes.forEach(box=>{
        
    let btn = box as HTMLButtonElement;
    resetbtn.addEventListener("click",()=>{
    
        btn.classList.remove("dbox");
        btn.innerHTML = "";
        winnerdiv.removeChild(winner);
        winnerdiv.classList.remove("winnerdiv")
        
    })

   
})

console.log(gameBox.children);
