// sessionStorage.getItem('loggedInUser',JSON.stringify(currentUser));
// // {firstName: fName,
// lastName: lName,
// email: emailInput,
// password: passwordInput,}


let user = JSON.parse(sessionStorage.getItem('loggedInUser') );
console.log(user) ;

let firstName = user.firstName ;
let lastName = user.lastName ;
let email = user.email ;
let pass = user.password;

console.log("tesring");
 // --------------------------------------------------------------------------
//  console.log(firstName);
//  console.log(lastName);
// let fnameInput = document.getElementById("firstName");
// fnameInput.innerText = 'firstName' ;

// let lnameInput = document.getElementById("lastName");
// lnameInput.innerText = 'lastName' ;
 // --------------------------------------------------------------------------
function saveInfo(){
                    
        console.log("save info clicked") ;
                    let userfirstName = document.getElementById("firstName");
                    let userLastName = document.getElementById("lastName");

                    
                    user.firstName = userfirstName.value ;
                    user.lastName = userLastName.value ;


                    let user_string = JSON.stringify(user) ;


                    sessionStorage.setItem('loggedInUser',user_string);


                    // --------------------------------------------------------------------------

                    //users array iterate thorght it ;

                    let users = JSON.parse(localStorage.getItem('users')) ;
                    
                    users.forEach(curr_user => {
                        if(curr_user.firstName === firstName){
                            console.log("check true") ;
                            console.log(userfirstName.value) ;
                            curr_user.firstName = userfirstName.value ;
                            curr_user.lastName = userLastName.value ;
                        }
                    });

                    let users_stringForm =  JSON.stringify(users) ;

                    localStorage.setItem('users',users_stringForm) ;


                    userfirstName.innerHTML = "" ;
                    userLastName.innerHTML = "" ;
                    

                    alert("save personal info") ;



}

function updatePass(){

            let userOldPassword = document.getElementById("oldPassWord");
            

            let userNewPassword = document.getElementById("newPassWord");
            

            let userConfirmPassword = document.getElementById("confirmPassWord");
            

            if(userOldPassword.value != pass){
                alert("Old password not matching");
            }
            else if(userNewPassword.value != userConfirmPassword.value){
                alert("password are not matching");
            }
            else{
                //curr users

                user.password = userConfirmPassword.value ;
                let userstring = JSON.stringify(user) ;
                sessionStorage.setItem('loggedInUser',userstring);


                // --------------------------------------------------------------------------

                //users array iterate thorght it ;

                let users = JSON.parse(localStorage.getItem('users')) ;
                
                users.forEach(curr_user => {
                    if(curr_user.firstName === firstName){
                        console.log("check true") ;
                        curr_user.password = userConfirmPassword.value ;
                    }
                });

                let users_stringForm =  JSON.stringify(users) ;

                localStorage.setItem('users',users_stringForm) ;


                userOldPassword.value = "" ;
                userNewPassword.value = "" ;
                userConfirmPassword.value="";
            }
}


document.getElementById("logout").addEventListener('click' ,()=>{
    console.log("logout clicked") ;
    window.location.href = '/signUp' ;
})



