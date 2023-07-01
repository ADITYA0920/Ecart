const given_data = sessionStorage.getItem('cartData') ;
const data =JSON.parse(given_data) ;

const leftContainer = document.getElementsByClassName("left")[0] ;
const rightContainer = document.getElementsByClassName("right")[0] ;
let container = document.getElementsByClassName('left')[0];
// --------------------------------------------------------------------------------------------------------------->
renderData(data) ;

function renderData(data){
    data.forEach(ele => {
        //for left conainer
        let currleftObj =  document.createElement("div");
        currRightObj.innerHTML = `
                <div class="card">
                        <div id="img">
                        <img src="${ele.image}" alt="">
                        </div>
                        <div class="desc">
                        <h2>${ele.title}</h2>
                        <div class="prz">
                            <span>Prize: ${ele.price}</span>
                            <div class="size"></div> 
                        </div>
                        <h2>Colors:</h2>
                        <h2>Rating:</h2>
                        </div>
                        <button id="cartBtn" onclick="addToCart(${ele})">Add to cart</button>
            </div>
        `
        leftContainer.appendChild(currleftObj) ;

        //for right container
        let currRightObj = document.createElement("div");
        currRightObj.innerHTML = `
            <div class="data">
                    <div >
                        <span>id${ele.id}</span>
                        <span>name${ele.title}</span>
                    </div>
                    <div >
                        price${ele.price};
                    </div>
             </div>
        `

        rightContainer.appendChild(currRightObj) ;

        let totalSoFar = document.getElementById("totalPrize").innerText ;
        let numForm = totalSoFar.parseInt(totalSoFar) + ele.price ;
        document.getElementById("totalPrize").innerText = numForm ;
        
    });
}
// --------------------------------------------------------------------------------------------------------------->