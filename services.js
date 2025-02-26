const openav = document.getElementById("openav")

const serviceslink = document.getElementById("servicetag")
serviceslink.addEventListener("mouseenter",()=>{


    openav.classList.remove("hidden")

   
})



openav.addEventListener("mouseleave",()=>{
    openav.classList.add("hidden")
})