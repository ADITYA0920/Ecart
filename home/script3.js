let cardContainer = document.getElementsByClassName("cards")[0] ;
let currUSER = JSON.parse(sessionStorage.getItem('loggedInUser'));
let currUserCart = currUSER.cart ;

console.log(currUserCart);

let buttons = [] ;

console.log(currUSER);
let idx = 0 ;
// --------------------------------------------------------------------------------------------------------------->
let color = ["red","black","blue","green","yellow"] ;
let size = ['S','M','L','XL','XXL'] ;

// let cartArr = [] ;
let rootData ;

    fetch(' https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                // Process the data
                rootData = data ;
                
                

                renderData(rootData) ;
            })
            .catch(error => {
                // Handle any errors
                console.error('Error:', error);
            })

// --------------------------------------------------------------------------------------------------------------->
function updateData(ele){
    if(ele.category ==="men's clothing"  || ele.category === "women's clothing")
        {ele.color = getRandomColor() ;
        ele.size = size ;}
        else{
            ele.color = getRandomColor() ;
            ele.size = [] ;
        }
    ele.rating = 4.5;
}

// --------------------------------------------------------------------------------------------------------------->
function getRandomColor(){
    idx++ ;
    return color[idx % 5] ;
}
// --------------------------------------------------------------------------------------------------------------->
//working
async function renderData(rootData){
        
        await rootData.forEach((ele) => {
            
            
                 updateData(ele) ;

                //  
            let curr = document.createElement('div');


            curr.innerHTML = `
                    <div class="card">
                        <div id="img">
                        <img src="${ele.image}" alt="">
                        </div>
                        <div class="desc">
                        <h4>${ele.title}</h4>
                        <div class="prz">
                            <span>Prize: ${ele.price}$</span>
                            <div class="size"${ele.size}></div> 
                        </div>
                        <h4 id="ccllrr" >Colors:${ele.color}</h4>
                        <h4>Rating:${ele.rating}</h4>
                        </div>
                        <button id="cartBtn" class="myButton" >Add to cart</button>
                    </div>
                    `;
                    


                    const addToCartBtn = curr.querySelector('.myButton');
                    addToCartBtn.addEventListener('click', (btn) => {
                        alert("added in cart");
                    
                        if(addToCartBtn.innerHTML === 'Add to cart'){
                        addToCartBtn.style.backgroundColor = 'orange';
                        addToCartBtn.style.color = 'white';
                        addToCartBtn.innerHTML = 'remove to cart' ;
                        addToCart(ele);
                        }
                        else{
                            addToCartBtn.style.backgroundColor = 'black';
                            addToCartBtn.style.color = 'white';
                            addToCartBtn.innerHTML = 'Add to cart' ;
                        removeFromCart(ele);
                        }
                        // let obj = {
                        //     Pdata : ele ,
                        //     Pbtn : addToCart ,
                        // }
                        // buttons.push(obj) ;
                         // Call addToCart function with the selected product
                    });


            cardContainer.appendChild(curr) ;
        });
}

// let ccllrr = document.getElementById("ccllrr");
// let text = ccllrr.innerText ;
// console.log(text);
// ccllrr.style.color =  text;
// --------------------------------------------------------------------------------------------------------------->


// --------------------------------------------------------------------------------------------------------------->
// function add(){
//     buttons.forEach((curr_obj) => {
//             let btn = curr_obj.Pbtn ;
//             console.log("inside add");
//             console.log(curr_obj) ;
//             if(btn.innerHTML === 'remove to cart'){
//                 addToCart(curr_obj.Pdata);
//             }
//     })
// }
// --------------------------------------------------------------------------------------------------------------->
function addToCart(currDatadata){


    console.log(currDatadata) ;
    console.log(typeof(currDatadata));
    
   
   
       currUserCart.push(currDatadata) ;


    
}
// ----------------------------------------------------------------------------------------------------------------->
function removeFromCart(currDatadata){
    
      currUserCart = currUserCart.filter((curr)=>{
       return  curr.id !== currDatadata.id ;
    })
}
// ----------------------------------------------------------------------------------------------------------------->
//button events
//working
function filterData(ctg){
    cardContainer.innerHTML ="";
    
    if(ctg === "All"){

        renderData(rootData) ;
    }
    else if(ctg === "Mens"){
        let temp =rootData.filter((ele)=>{
        return ele.category === "men's clothing" ;
        }) ;
        console.log("inside mens");
        renderData(temp) ;
    }
    else if(ctg === "Womens"){
        let temp =rootData.filter((ele)=>{
            return ele.category === "women's clothing";
       }) ;
       renderData(temp) ;
    }
    else if(ctg === "Jewellory"){
        let temp =rootData.filter((ele)=>{
            return ele.category === "jewelery";
       }) ;
       renderData(temp) ;
    }
    else{
        let temp =rootData.filter((ele)=>{
            return ele.category === "electronics";
       }) ;
       renderData(temp) ;
    }
}
// ----------------------------------------------------------------------------------------------------------------->
//not testing
//apply conditio where if we hvent selected any one of them checkbox


function applyfilter(){
    let leftfilter = [] ;

    console.log("applyfilter clicked") ;


    // let elements = document.getElementsByName("fname");
    // document.getElementById("demo").innerHTML = elements[0].value;

    let clr = document.getElementsByName("color")[0].value ;
    let size = document.getElementsByName("size")[0].value  ;
    

    // console.log(typeof(clr)) ;
    console.log(size) ;

    let tempData = rootData ;
    
    leftfilter =  tempData.filter((ele)=>{
        console.log(clr);
        
        console.log(`curr color is ${ele.color} and selected is ${clr}`);
      return  ele.color === clr ;

            //  return clr.includes(ele.color) ;
         }
        );

    
    // leftfilter = leftfilter.filter((ele)=>{ele.size.includes(size) });

    // if(price.checked)
    // leftfilter = leftfilter.filter((ele) => {ele.price  <= price}) ;
    // cardContainer.innerHTML = "";
    renderData(leftfilter) ;
    
}

// --------------------------------------------------------------------------------------------------------------->
//working
function redirect(page){

    currUSER.cart = currUserCart ;

    console.log(currUserCart);

    sessionStorage.setItem('loggedInUser',JSON.stringify(currUSER)) ;

    // add();
    console.log(page);
    if(page === "Home"){
        window.location.href = '/home' ;
    }
    else if(page === "Login"){
        console.log("inside login");
        window.location.href = '/login' ;
    }
    else if(page === "MyCart"){
        window.location.href = '/myCart' ;
    }
    else if(page === "SignUp"){
        window.location.href = '/signUp' ;
    }
    else if(page === "MyProfile"){
        window.location.href = '/myProfile' ;
    }
}
// ------------------------------------------------------------------------------------------------------>

const search = document.getElementById("search");

// let 