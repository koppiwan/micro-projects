let myleads = []
const inputEL = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsfromlocalstoreage = JSON.parse(localStorage.getItem("myleads"))
const deleteEl = document.getElementById("delete-btn")

if  (leadsfromlocalstoreage) {
    myleads = leadsfromlocalstoreage
    renderleades()
}

deleteEl.addEventListener( "click", function(){
    localStorage.clear()
    myleads = [] 
    ulEl.innerHTML = "" 
} )



inputbtn.addEventListener( "click", function(){
    myleads.push(inputEL.value)
    inputEL.value = " "
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleades()
    console.log(localStorage.getItem("myleads"))
  } )
  
function renderleades() {

let listitems = " "
for (let i=0 ; i < myleads.length ; i++) {

  listitems += `<li> 
  <a target='_blank' href="${myleads[i]}"> 
  ${myleads[i]}
  </a> 
  </li>`
}
ulEl.innerHTML = listitems

}