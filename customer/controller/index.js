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
      <a href="../../customer/view/detail.html?productid=${product.id}">
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