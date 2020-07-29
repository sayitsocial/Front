const name = document.getElementById('name10');
const email = document.getElementById('email10');
const pass = document.getElementById('password10');
const submitBtn = document.getElementById('button10');

function btn() {

    // Make a new AJAX request aka REST api request
    let xhttp = new XMLHttpRequest();

    // This is required for login pages but doesn't hurt if used else where
    xhttp.withCredentials = true;

    // Open a new request with method "POST"
    xhttp.open("POST", generateSignUpUrl());

    // Send the request to provided url
    xhttp.send();
}

function generateSignUpUrl() {

    // Get username/email and pass from html elements
    const userName = email.value;
    const password = pass.value;

    /* ${userName} and ${password} refers to value of variables declared above
     * URL starting with a / is reformatted to absolute URL automatically
     * eg: if my base URL is "sayitsocial.in",
     *     then /auth/create... will be reformatted to "sayitsocial.in/auth/create..." automatically in xhr request
    */
    return `/auth/create?username=${userName}&password=${password}`;
}

submitBtn.addEventListener("click", btn);
