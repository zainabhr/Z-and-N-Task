const menubtn = document.querySelector(".menubar");

menubtn.addEventListener("click", () =>{
    if(document.querySelector(".dropdown-content").style.display === "none"){
        document.querySelector(".dropdown-content").style.display = "block"
        document.querySelector(".bar1").style.transform = "translate(0px, 4px) rotate(45deg)";
        document.querySelector(".bar2").style.display = "none";
        document.querySelector(".bar3").style.transform = "translate(0px, -4px) rotate(-45deg)";
    }else{
        document.querySelector(".dropdown-content").style.display = "none"
        document.querySelector(".bar1").style.transform = " rotate(-0.1deg)";
        document.querySelector(".bar2").style.display = "block";
        document.querySelector(".bar3").style.transform = " rotate(0.1deg)";
    }
})