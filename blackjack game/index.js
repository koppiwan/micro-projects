//let firstCard =  getrandomecard()
//let secondCard =  getrandomecard()
let player = {
    name:"Curry",
    chip: 123
}

let card = []
let sum = 0
let blackjack = false
let isalive = true
let msg = ""
let msgEl = document.getElementById("msg-el")
let cardEl = document.getElementById("card-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

let playerEl = document.getElementById("player-el")

playerEl.textContent=player.name  + " -"  +"  "+  player.chip


function getrandomecard() {
    let randomnum =  Math.floor(Math.random() * 13) + 1 

    if (randomnum > 10 ) {
        return 10
    } 
    else if (randomnum === 1) {
        return 11 
    }
    else
    return randomnum
}
     



function startgame() {
    isalive = true
    let firstCard = getrandomecard()
    let secondCard = getrandomecard()
    sum = firstCard + secondCard
    card = [firstCard , secondCard]



    rendergame()
}



function rendergame() {
    cardEl.textContent= " Cards : "

    for (i=0 ; i<card.length ; i++) {
        cardEl.textContent += card[i] + "    "
    }


    if ( sum <= 20) {
        msg = "Do u want to take another card ?" 
    }  
    
    else if (sum === 21) {
        msg = " Great ! Blackjack "
        blackjack = true
    } 
    
    else {
      msg = " Sorry better luck next time "
       isalive = false
    }    
    
    msgEl.textContent = msg;
    sumEl.textContent =  "Sum : " + sum;
}

function newcard() {

    if ( isalive===true && blackjack === false) {

    let onemore =  getrandomecard()
    sum += onemore
    card.push(onemore)

   
    rendergame()
    
        

    }

    

}