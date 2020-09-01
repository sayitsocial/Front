let selectedUserType;
let firstName;
let lastName;
let email;
let password;

const indRadioBtn = document.getElementById("individual");
const orgRadioBtn = document.getElementById("organization");

indRadioBtn.addEventListener("click",()=>{
    selectedUserType = "individual";
    
})

orgRadioBtn.addEventListener("click",()=>{
    selectedUserType = "organization";
})

const form1_next = document.querySelector(".form1-btn-next");
const form2_back = document.querySelector(".main-form-2 .signup-form .btn-back");
const form2_next = document.querySelector(".main-form-2 .signup-form .btn-next");
const form3_back = document.querySelector(".main-form-3 .signup-form .btn-back");
const form3_next = document.querySelector(".main-form-3 .signup-form .btn-next");
const form1 = document.querySelector(".main-form-1");
const form2 = document.querySelector(".main-form-2");
const form3 = document.querySelector(".main-form-3");

function showFormOne(){
    form1.style.display = "block";
}

function showFormTwo(){
    form2.style.display = "block";
}

function showFormThree(){
    form3.style.display = "block";
}

function hideFormOne(){
    form1.style.display = "none";
}
function hideFormTwo(){
    form2.style.display = "none";
}
function hideFormThree(){
    form3.style.display = "none";
}

form1_next.addEventListener("click",()=>{
   hideFormOne();
   showFormTwo();
   hideFormThree();
})

form2_next.addEventListener("click",()=>{
    acceptUserDetails();
    hideFormTwo();
    showFormThree();
    hideFormOne();

})

form2_back.addEventListener("click",()=>{
    hideFormTwo();
    showFormOne();
    hideFormThree();
})

form3_next.addEventListener("click",()=>{
   //redirect 
   let userInfo = {
        userType:selectedUserType,
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
   }

   console.log(userInfo);
})

/*-------------------------------*/

function acceptUserDetails(){
    firstName = document.querySelector("#firstName").value;
    lastName = document.querySelector("#lastName").value;
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;
}