const loginbtn = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const warningDiv = document.querySelector(".warning");


loginbtn.addEventListener('click',() =>{
    if(emailInput.value == "" | passwordInput.value == ""){
        warningDiv.style.display = "block";
    }
})

emailInput.addEventListener("focus", () =>{
    warningDiv.style.display = "none";
})
passwordInput.addEventListener("focus", () =>{
    warningDiv.style.display = "none";
})

loginbtn.addEventListener("click", () =>{
    window.location.href = "profile page.html"
})
/////////ERROR POP UP///////

// loginbtn.addEventListener("click", () =>{
//     swal({
//         title: "Error!",
//         text: "PLEASE WAIT A FEW MINUTES BEFORE YOU TRY AGAIN",
//         type: "error",
//         confirmButtonText: "Dissmis"
//     });
// })