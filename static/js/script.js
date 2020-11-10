let selectedUserType = "individual";
let userInfo;
let firstName;
let lastName;
let email;
let password;
let orgName;
let president;
let registrationNo;

const indRadioBtn = document.getElementById("individual");
const orgRadioBtn = document.getElementById("organisation");

indRadioBtn.addEventListener("click",()=>{
    selectedUserType = "individual";
    showWelcomeButtons();
    hideOrgChoice();
})

orgRadioBtn.addEventListener("click",()=>{
    selectedUserType = "organisation";
    hideWelcomeButtons();
    showOrgChoice();
})

const welcomeButtons = document.querySelector(".form1-buttons");
const form1_next = document.querySelector(".form1-buttons .btn-next");
const form2_back = document.querySelector(".form2-buttons .btn-back");
const form2_next = document.querySelector(".form2-buttons .btn-next");
const launch = document.querySelector(".btn-launch");

const heading = document.querySelector(".signup-heading");
const choose_identity = document.querySelector(".choose-identity");
const common_form = document.querySelector(".common-1");
const form_complete = document.querySelector(".common-2");
const orgChoice = document.querySelector(".org-choice");
const orgChoice_next = document.querySelector(".org-choice-buttons .btn-next");
const orgChoice_back = document.querySelector(".org-choice-buttons .btn-back");
const orgInfo_next = document.querySelector(".org-info-buttons .btn-next");
const orgInfo_back = document.querySelector(".org-info-buttons .btn-back");

const orgNameInput = document.getElementById("org-name");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const orgInfo = document.querySelector(".org-1");

function showOrgInfo(){
    orgInfo.classList.remove("hidden");
}
function hideOrgInfo(){
    orgInfo.classList.add("hidden");
}


function showWelcomeButtons(){
    welcomeButtons.classList.remove("hidden");
}

function hideWelcomeButtons(){
    welcomeButtons.classList.add("hidden");
}


function showOrgChoice(){
    orgChoice.classList.remove("hidden");
}

function hideOrgChoice(){
    orgChoice.classList.add("hidden");
}

function showOrgNameInput(){
    orgNameInput.classList.remove("hidden");
}

function showIndvidualInputs(){
    showFirstNameInput();
    showLastNameInput();
}

function hideIndvidualInputs(){
    hideFirstNameInput();
    hideLastNameInput();
}

function showFirstNameInput(){
    firstNameInput.classList.remove("hidden");
}

function showLastNameInput(){
    lastNameInput.classList.remove("hidden");
}

function hideFirstNameInput(){
    firstNameInput.classList.add("hidden");
}

function hideLastNameInput(){
    lastNameInput.classList.add("hidden");
}


function hideOrgNameInput(){
    orgNameInput.classList.add("hidden");
}

function showHeading(){
    heading.classList.remove("hidden");
}

function hideHeading(){
    heading.classList.add("hidden");
}

function showChooseIdentity(){
    choose_identity.classList.remove("hidden");
}

function showCommonForm(user_type){
    if(user_type === "organisation"){
        common_form.classList.remove("hidden");
        hideIndvidualInputs();
        showOrgNameInput();
    }else{
        common_form.classList.remove("hidden");
        showIndvidualInputs();
        hideOrgNameInput();
    }
}

function showCompleteStatus(){
    form_complete.classList.remove("hidden");
}

function hideChooseIdentity(){
    choose_identity.classList.add("hidden");
}
function hideCommonForm(){
    common_form.classList.add("hidden");
}
function hideCompleteStatus(){
    form_complete.classList.add("hidden");
}

form1_next.addEventListener("click",()=>{
   hideHeading();
   hideChooseIdentity();
   showCommonForm(selectedUserType);
   hideCompleteStatus();
})

form2_next.addEventListener("click",()=>{
    if(selectedUserType === "individual"){
        acceptIndividualDetails();
        hideCommonForm();
        showCompleteStatus();
        hideChooseIdentity();
        hideHeading();
    }else{
        acceptOrganisationDetails1();
        hideCommonForm();
        showOrgInfo();
        hideChooseIdentity();
        hideHeading();
    }  
})

form2_back.addEventListener("click",()=>{
    if(selectedUserType === "individual"){
        hideCommonForm(selectedUserType);
        showHeading();
        showChooseIdentity();
        hideCompleteStatus();
        hideOrgChoice();
    }else{
        hideCommonForm(selectedUserType);
        showHeading();
        showChooseIdentity();
        hideCompleteStatus();
        showOrgChoice();
    }  
})

orgChoice_next.addEventListener("click",()=>{
   hideHeading();
   hideChooseIdentity();
   hideOrgChoice();
   showCommonForm(selectedUserType);
   hideCompleteStatus();
})

orgInfo_back.addEventListener("click",()=>{
    hideOrgInfo();
    showCommonForm(selectedUserType);
})

orgInfo_next.addEventListener("click",()=>{
    acceptOrganisationDetails2();
    hideOrgInfo();
    showCompleteStatus();
})
 

launch.addEventListener("click",()=>{
   //redirect 
    if(selectedUserType === "individual"){
        userInfo = {
            userType:selectedUserType,
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
       }
    }else if(selectedUserType === "organisation"){

        userInfo = {
            userType:selectedUserType,
            organisation_name:orgName,
            email:email,
            password:password,
            president:president,
            regno:registrationNo
       }
    }
    console.log(userInfo);
})

/*-------------------------------*/

function acceptIndividualDetails(){
    firstName = document.querySelector("#firstName").value;
    lastName = document.querySelector("#lastName").value;
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;
}

function acceptOrganisationDetails1(){
    orgName = document.querySelector("#org-name").value;
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;
}

function acceptOrganisationDetails2(){
    president = document.querySelector("#president").value;
    registrationNo = document.querySelector("#regno").value;
}


function init(){
    showHeading();
    showChooseIdentity();
}

init();