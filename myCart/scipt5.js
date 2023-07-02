const given_data = JSON.parse(sessionStorage.getItem('loggedInUser')) ;
let  data =given_data.cart ;
let users = localStorage.getItem('users');
const leftContainer = document.getElementsByClassName("left")[0] ;
const rightContainer = document.getElementsByClassName("right")[0] ;

const itemContainer= document.getElementById("items") ;

let container = document.getElementsByClassName('left')[0];
// --------------------------------------------------------------------------------------------------------------->
renderData(data) ;


function renderData(data){
    // itemContainer.innerHTML = '';

    while (leftContainer.firstChild) {
        leftContainer.removeChild(leftContainer.firstChild);
      }
    while (itemContainer.firstChild) {
    itemContainer.removeChild(itemContainer.firstChild);
    }
      if(data.length == 0){
        leftContainer.innerHTML = 'cart is Empty' ;
      }
    data.forEach(ele => {
        //for left conainer
        // console.log(ele) ;
        let currleftObj =  document.createElement("div");
        currleftObj.innerHTML = `
                <div class="card">
                        <div id="img">
                        <img src="${ele.image}" alt="">
                        </div>
                        <div class="desc">
                        <h4>${ele.title}</h4>
                        <div class="prz">
                            <span>Prize: ${ele.price}</span>
                            <div class="size"></div> 
                        </div>
                        <h4>Colors:${ele.color}</h4>
                        <h4>Rating:${ele.rating}</h4>
                        </div>
                        <button id="cartBtn" class = "myButton">remove from cart</button>
            </div>
        `
                  const addToCartBtn = currleftObj.querySelector('.myButton');
                    addToCartBtn.addEventListener('click', (btn) => {
                        alert("remove from cart");
                        removeProduct(ele) ;
                    });
        leftContainer.appendChild(currleftObj) ;
// -----------------------------------------------------------------------------------------------------------
        // for right container
        let currRightObj = document.createElement("div");
                    
        

        currRightObj.innerHTML = `
            <div class="data">
                    <div id="innerData">
                        <span>${ele.id}.</span>
                        <span>${ele.title}</span>
                    </div>
                    <div id="prz">
                        ${ele.price} $;
                    </div>
             </div>
        `

        itemContainer.appendChild(currRightObj) ;


        
        document.getElementById("totalPrize").innerText = findTotal(data) + "$" ;
        
    });
}
document.getElementById("checkout").addEventListener('click',(btn)=>{
    sessionStorage.setItem('totalAmount',JSON.stringify(findTotal(data))) ;
    window.location.href = '/rozarPay' ;
}) ;
// --------------------------------------------------------------------------------------------------------------->
function findTotal(data){
    console.log("click");
    let sum = 0; 
    data.forEach((ele) => {
        sum += ele.price ;
    })
    return sum ;
}
// --------------------------------------------------------------------------------------------------------------->
function removeProduct(curr){
    console.log(curr) ;
    // itemContainer = "" ;
        data = data.filter((curr_obj) => {
            // console.log(`${curr.id}+"   "+${curr_obj.id}`) ;
             return curr.id !== curr_obj.id ;
        })
        console.log(data) ;
        given_data.cart = data ;
        sessionStorage.setItem('loggedInUser',JSON.stringify(given_data));
        users.forEach((user)=>{
            if(user.email === given_data.email) {
                user = given_data ;
            } 
        });

        localStorage.setItem('users',JSON.stringify(users));
        renderData(data);
}