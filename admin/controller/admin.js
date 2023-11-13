
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
        render(arrProduct)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function render(array){
    let content = "";
    let length = array.length;
    for (let i = 0; i < length; i++) {
      let product = array[i];
      content += `
            <tr>
              <th scope="row">${product.id}</th>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.image}</td>
              <td>${product.description}</td>
              <td>
              <button class="btn btn-danger">Xóa</button>
              <button class="btn btn-warning mt-1" data-bs-toggle="modal"
              data-bs-target="#exampleModal">Sửa</button>
              </td>
            </tr>`;
  }
  document.querySelector("#table_body").innerHTML = content;
}
getValueProduct();