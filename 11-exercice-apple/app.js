const changePhone = document.querySelector("div.img > img")
const clickPhones = document.querySelectorAll(".model_content")
const logo = document.querySelector(".logo")
console.log(logo);


clickPhones.forEach((clickPhone)=>{
    clickPhone.addEventListener("click", (e)=>{
        switch(e.target.id){
            case "un":
                uno.style.left = "0";
                duo.style.top = "400px";
                trio.style.top = "-400px";
                break
            case "deux":
                uno.style.left = "-400px";
                duo.style.top = "0";
                trio.style.top = "400px";
                break
            case "trois":
                uno.style.left = "-400px";
                duo.style.top = "400px";
                trio.style.top = "0";
                break
            default : null
        }
            
    })
})

window.addEventListener("load", ()=>{
    logo.classList.add("afterAnim")
})