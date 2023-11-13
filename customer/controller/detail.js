function getDataProduct(productId){
    let promise = axios({
        method: 'GET',
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`
    })
    promise
    .then((result)=>{
        console.log(result.data.content);
        let product = result.data.content;
        console.log(product.size);
        renderDetail(result.data.content);
    })
    .catch((err)=>{
        console.log(err);
    })
}
window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam);
    getDataProduct(myParam);
};
let renderDetail = (product)=>{
    let content = '';
    let size = product.size
    console.log(size);
    let contentSize =`<button class="btn size active">${size[0]}</button>`;
    for (let i = 1; i < size.length; i++) {  
        contentSize += `
            <button class="btn size">${size[i]}</button>
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
                        <button class="btn btn-secondary btnSub" onclick="subQuantity()">-</button>
                         <label id="quantity">1</label>
                         <button class="btn btn-secondary btnPlus" onclick="plusQuantity()">+</button>
                        </div>
                        <button class="btn btn-secondary">Add to cart</button>
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
    document.querySelector(".btnSub").disabled = false;
}

function subQuantity(){
  let valueQuantity =  document.querySelector("#quantity").innerHTML * 1;
  if(valueQuantity >=1){
    valueQuantity -=1;
    document.querySelector("#quantity").innerHTML = valueQuantity;
  }else{
    valueQuantity =1;
    document.querySelector(".btnSub").disabled = true;
  } 
}
function getValueProduct(){
    var promise = axios({
      mothod: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    // .then khi lấy dữ liệu thành công status 200
    // .catch khi lấy dữ liệu thất bại status 404
    promise
      .then(function (result) {
        console.log(result);
        arrProduct = result.data.content;
        console.log(arrProduct);
        renderListProduct(arrProduct);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function renderListProduct(array){
    let content = "";
    let length = array.length;
    for (let i = 0; i < length; i++) {
      let product = array[i];
      content += `
      <a href="./detail.html?productid=${product.id}" class="linkProduct">
      <div class="product_item">
        <div class="img_container">
          <img
          src=${product.image}
          alt=""
          />
        </div>
        <p class="product_name">${product.name}</p>
        <p class="product_desc">
          ${product.description}
        </p>
        <div class="product_item_footer">
          <p class="product_price">${product.price} $</p>
          <button class="btnBuy"><i class="fa-solid fa-cart-shopping"></i> Mua ngay</button>
        </div>
      </div>
    </a>
          `;
    }
    document.querySelector(".product_container").innerHTML = content;
  }
  getValueProduct()