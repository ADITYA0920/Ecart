const signupBtn = document.getElementById("signupBtn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("confirmPassword");

const loginRedirect = document.getElementById('loginRedirect');

const cnfPasswordValue = document
  .getElementById("confirmPassword")
  .value.trim();

//   SaveUser -> this is not dependent if my Users array in local storage is existing or not
// --------------------------------------------------------------------------------------------------------------->


function saveUser(fName, lName, emailInput, passwordInput) {
  let cart = [] ;
  let userObj = {
    firstName: fName,
    lastName: lName,
    email: emailInput,
    password: passwordInput,
    cart:cart 
  };
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // either array from localStorage or []
  users.push(userObj);
  localStorage.setItem("users", JSON.stringify(users));
  // session storage -> loggedIn user
  sessionStorage.setItem('loggedInUser',JSON.stringify(userObj));
  firstName.value='';
  lastName.value='';
  email.value='';
  password.value='';
  cnfPassword.value='';
  alert('Sign up successfull');
  window.location.href='/home';
}


// --------------------------------------------------------------------------------------------------------------->


function checkIfUserExist(email) {
  // array of objects
  console.log("inside this fn");
  let users = JSON.parse(localStorage.getItem("users"));
  const obj = users.find((userObj) => {
    return userObj.email === email;
  });
  if (obj) return true;
  else false;
}


// --------------------------------------------------------------------------------------------------------------->


signupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    cnfPassword.value.trim() === ""
  ) {
    alert("all fields are required");
  } else {
    if (password.value.trim() !== cnfPassword.value.trim()) {
      alert("password not matching");
      password.value = "";
      cnfPassword.value = "";
    } 
    else {
      if (localStorage.getItem("users")) {
        // if my user exist-> alert user already exist
        if (checkIfUserExist(email.value)) {
          // we will make this function
          alert("email exists");
        } else {
          // here if users array exist in local storage and
          // user is unique
          console.log("saving");
          saveUser(
            firstName.value,
            lastName.value,
            email.value,
            password.value
          );
          window.location.href = '/home' ;
        }
      } 
      else {
        console.log("this is working 1");
        saveUser(firstName.value, lastName.value, email.value, password.value);
      }
    }
  }
});


// --------------------------------------------------------------------------------------------------------------->


loginRedirect.addEventListener('click',()=>{
  window.location.href='/login';
})

// array of users -> array of objects -> object (user details)

// trim all the values -> spaces are removed
// if my all values are filled
// password === cnfPassword should match
// if my email exist in the given users array
// alert -> please sign in. you are already a member, no need to
// sign up again.
// else // create object from the input values and push it inside array

// else -> alert 'all fields are required'