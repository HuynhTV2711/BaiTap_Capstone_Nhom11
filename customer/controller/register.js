let validation = () => {
  var user = new Register();
  var isValid = true;
  let arrSmall = document.querySelectorAll("small");
  let arrInput = document.querySelectorAll("input, select");

  for (let index = 0; index < arrInput.length; index++) {
    let valueInput = document.getElementById(arrInput[index].id).value;
    
    if (arrInput[index].id == "email") {
      isValid &=
        checkEmptyValue(valueInput, arrSmall[index].id) &&
        checkEmailValue(valueInput, arrSmall[index].id);
    }else if (arrInput[index].id == "name") {
      isValid &=
        checkEmptyValue(valueInput, arrSmall[index].id) &&
        checkTextValue(valueInput, arrSmall[index].id);
    }else if (arrInput[index].id == "password") {
      isValid &=
        checkEmptyValue(valueInput, arrSmall[index].id) &&
        checkStrongPwd(valueInput, arrSmall[index].id);
    }else if(arrInput[index].id == "phone"){
        isValid &=
        checkEmptyValue(valueInput, arrSmall[index].id) &&
        checkNumberValue(valueInput, arrSmall[index].id);
    }else if (arrInput[index].id == "passConfirm") {
        isValid &=
          confirmPassword(valueInput, arrSmall[index].id);
      } 
    user[arrInput[index].id] = valueInput;
  }
  if (isValid) {
    return user;
  }
};
function addUser(){
  event.preventDefault();
    var userNew = validation();
    console.log(userNew);
    let promise = axios({
            method: 'POST',
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            data: userNew
        })
        promise
        .then((result)=>{
            console.log(result.data.content);
            openToast(result.data.message);
        })
        .catch((err)=>{
            console.log(err);
            if (err.message == 'Request failed with status code 415') {
            openToast("Đăng ký không thành công vui lòng kiểm tra dữ liệu nhập");
            }else if(err.message == 'Request failed with status code 400'){
              openToast(err.response.data.message);
            }else{
              openToast(err.message);
            }
        })
}
function openToast(string) {
  document.querySelector(".toast-body").innerHTML = string;
  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
}


