const container = document.querySelector(".container")
const clear = document.querySelector("#clear")
const btn = document.querySelector("#btn")
const rainbowbtn = document.querySelector("#rainbow")
const shadebtn = document.querySelector("#shade")

function getRandomColor(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`
}


function createDivs(){
  const numOfDivs = document.querySelector("#numOfDivs").value
  if (numOfDivs < 2 || numOfDivs > 100){
    return '';
  }
  container.innerHTML = '';
  for(let i = 1; i<=(numOfDivs*numOfDivs); i++){
    let div = document.createElement("div")
    div.id = "div" + i
    div.className = "flex-div"
    div.style.width = (800/numOfDivs) + 'px';
    div.style.height = (800/numOfDivs) + 'px';
    div.addEventListener("mouseover", (event)=>{
      div.style.background = "black"
    })
    container.appendChild(div)
  }
}


btn.addEventListener("click", (event)=>{
  createDivs()
})


clear.addEventListener("click", (event)=>{
  const divs = document.querySelectorAll(".flex-div")
  divs.forEach(div=>{
    div.style.background = "white";
  })
})

function handleMouseOverRandom(event) {
  event.target.style.background = getRandomColor();
}

function handleMouseOverBlack(event) {
  event.target.style.background = 'black';
}

rainbowbtn.addEventListener("click",(event)=>{
  const divs = document.querySelectorAll(".flex-div")
  divs.forEach(div =>{
    div.removeEventListener("mouseover", handleMouseOverBlack)
    div.addEventListener("mouseover",handleMouseOverRandom)
  })
})

shadebtn.addEventListener("click", (event)=>{
  const divs=document.querySelectorAll(".flex-div")
  divs.forEach(div =>{
    div.removeEventListener("mouseover",handleMouseOverRandom )
    div.addEventListener("mouseover", handleMouseOverBlack)
  })
})
