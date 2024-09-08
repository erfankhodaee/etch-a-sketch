const container = document.querySelector(".container")
const clear = document.querySelector("#clear")
const btn = document.querySelector("#btn")



btn.addEventListener("click", (event)=>{
  createDivs()
})

function createDivs(){
  const numOfDivs = document.querySelector("#numOfDivs").value
  container.innerHTML = '';
  for(let i = 1; i<=(numOfDivs*numOfDivs); i++){
    let div = document.createElement("div")
    div.id = "div" + i
    div.className = "flex-div"
    div.style.width = (800/numOfDivs) + 'px';
    div.style.height = (800/numOfDivs) + 'px';
    div.addEventListener("mouseover", (event)=>{
      div.style.background = "red"
    })
    container.appendChild(div)
  }
}


clear.addEventListener("click", (event)=>{
  const divs = document.querySelectorAll(".flex-div")
  divs.forEach(div=>{
    div.style.background = "white";
  })
})
