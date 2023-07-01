console.log("testing");

function redirect(page){
    console.log(page);
    if(page === "Home"){
        window.location.href = './home' ;
    }
    else if(page === "Login"){
        window.location.href = './login' ;
    }
    else if(page === "SignUp"){
        window.location.href = './signUp' ;
    }
    else if(page === "MyCart"){
        window.location.href = './myCart' ;
    }
    else if(page === "MyProfile"){
        window.location.href = './myProfile' ;
    }
}