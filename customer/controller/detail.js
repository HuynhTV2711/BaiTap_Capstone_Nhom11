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
                        <button class="btn btn-primary btnSub">-</button>
                         <label id="quantity">1</label>
                         <button class="btn btn-primary btnPlus">+</button>
                        </div>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                   
                </div>
            </div>
    `;
    document.querySelector(".detail").innerHTML = content;
    document.querySelector(".btnPlus").onclick = function(){
       let vl =  document.querySelector("#quantity").innerHTML * 1;
       vl +=1;
       console.log(vl);
       document.querySelector("#quantity").innerHTML = vl;
    }
    document.querySelector(".btnSub").onclick = function(){
        let vl =  document.querySelector("#quantity").innerHTML * 1;
        vl -=1;
        console.log(vl);
        document.querySelector("#quantity").innerHTML = vl;
     }
}

var arrProduct = [];
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
      
      <a href="../view/detail.html?productid=${product.id}">
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