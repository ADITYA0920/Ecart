const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn=document.getElementById('loginBtn');



loginBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(email.value.trim()==='' || password.value.trim()===''){
        alert('please enter values');
    }
    else{
        let users=JSON.parse(localStorage.getItem('users'));
        if(users){
            let currentUser = users.find((currentUser)=>{
                return currentUser.email === email.value.trim();
            });
            console.log(currentUser);
            if(currentUser){
                if(password.value.trim()===currentUser.password){
                    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
                    window.location.href='/home';
                    alert('login succesful');
                }
                else{
                    alert('incorrect password');
                }
            }else{
                alert('you have not signed up');
            }
        } else{
            alert('you have not signed up');
        }
    }
})