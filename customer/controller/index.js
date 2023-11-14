let arrProduct = [];
/*******************Hàm lấy thông tin tất cả product******************* */
function getValueProduct() {
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
/********************Hàm render*********************************** */
function renderListProduct(array) {
  let content = "";
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let product = array[i];
    content += `
      <a href="./customer/view/detail.html?productid=${product.id}" class="linkProduct">
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
/************************Hàm fillter****************************** */
function fillter() {
  let arrFilter = [];
  var selectValue = document.querySelector(".selectFilter").value;
  console.log(selectValue);
  for (let i = 0; i < arrProduct.length; i++) {
    let name = arrProduct[i].name.toLowerCase();
    if (name.includes(selectValue)) {
      arrFilter.push(arrProduct[i]);
      renderListProduct(arrFilter);
    }
    if (selectValue == "all") {
      renderListProduct(arrProduct)
    }
  }
}
/***********************Hàm sort **********************************/
function sort(){
  var selectValue = document.querySelector(".selectFilter").value = "all";
  var selectValue = document.querySelector(".selectSort").value;
  if (selectValue == "all") {
    getValueProduct();
  }else if (selectValue == "tang") {
    renderListProduct(arrProduct.sort(compare));
  }else if (selectValue == "giam") {
    renderListProduct(arrProduct.sort(compare).reverse());
  }
}
function compare( a, b ) {
  if ( a.price < b.price ){
    return -1;
  }
  if ( a.price > b.price ){
    return 1;
  }
  return 0;
}

getValueProduct();


