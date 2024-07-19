let next = document.getElementById("next")
let prev = document.getElementById("prev")

next.addEventListener("click",function(){
    let item = document.querySelectorAll(".item")
    document.querySelector(".container").appendChild(item[0])
})

prev.addEventListener("click",function(){
    let item = document.querySelectorAll(".item")
    document.querySelector(".container").prepend(item[item.length-1])
})