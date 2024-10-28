const profilepic = document.getElementById("profile-photo");
// const profilepicInput = document.getElementById("photo");
const createAccBtn = document.getElementById("create-acc");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const warningDiv = document.querySelector(".warning");


createAccBtn.addEventListener('click',() =>{
    // modal.classList.add('active')
    if(emailInput.value == "" | passwordInput.value == ""){
        warningDiv.style.display = "block";
    }
})

// profilepicInput.addEventListener("load", () =>{
//     profilepic.style.background = profilepicInput.value;
// })

createAccBtn.addEventListener("click", () =>{
    swal({
        title: "Error!",
        text: "PLEASE WAIT A FEW MINUTES BEFORE YOU TRY AGAIN",
        type: "error",
        confirmButtonText: "Dissmis"
    });
})
