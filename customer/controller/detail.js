window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam);
    let promise = axios({
        method: 'GET',
        url: `https://shop.cyberlearn.vn/api/Product`
    })
    promise
    .then((result)=>{
        var arrResult =result.data.content;
        console.log(arrResult);
        for (let index = 0; index < arrResult.length; index++) {
            if(arrResult[index].id == myParam){
                let product = arrResult[index];
                console.log(product);
                renderDetail(product);
            }   
        }
    })
    .catch((err)=>{
        console.log(err);
    })
};

let renderDetail = (product)=>{
    let content = '';
    let contentSize ='';
    let size = JSON.parse(product.size)
    console.log(size);
    for (let i = 0; i < size.length; i++) {  
        contentSize += `
            <div class="size">${size[i]}</div>
        `;
    }
    content += `
    <div class="container">
            <div class="detail_container row">
                <div class="detail_img col-12 mx-auto col-sm-12 col-lg mx-sm-auto">
                    <img src="${product.image}" alt="">
                </div>
                <div class="detail_content col-12 mx-auto col-sm-12 col-lg ps-lg-5 mx-sm-auto  ">
                    <h3 class="product_name">${product.name}</h3>
                    <p class="desc">${product.description}</p>
                    <p class="size_title">Available size</p>
                    <div class="size_container">
                        ${contentSize}
                    </div>
                    <p class="price">${product.price}$</p>
                    <div class="quantity">
                        <button class="btn btn-primary btnSub" onclick="subQuantity()">-</button>
                         <label id="quantity">1</label>
                         <button class="btn btn-primary btnPlus" onclick="plusQuantity()">+</button>
                        </div>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                   
                </div>
            </div>
    `;
    document.querySelector(".detail").innerHTML = content;
}
function plusQuantity(){
  let valueQuantity =  document.querySelector("#quantity").innerHTML * 1;
    valueQuantity +=1;
    document.querySelector("#quantity").innerHTML = valueQuantity;
  
}

function subQuantity(){
  let valueQuantity =  document.querySelector("#quantity").innerHTML * 1;
  if(valueQuantity >=1){
    valueQuantity -=1;
    document.querySelector("#quantity").innerHTML = valueQuantity;
  }else{
    valueQuantity =1;
    document.querySelector("#quantity").innerHTML = valueQuantity;
  }
 
}