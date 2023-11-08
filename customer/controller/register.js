let validation = ()=>{
    event.preventDefault();
    var user = new Register();
    var isValid = true;
    let arrSmall = document.querySelectorAll("small");
    let arrInput = document.querySelectorAll("input, select");
    console.log(arrInput);
    for (let index = 0; index < arrInput.length; index++) {
        let valueInput = document.getElementById(arrInput[index].id).value;
        user[arrInput[index].id] = valueInput; 
    }

    let promise = axios({
        method: 'POST',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: user
    })
    promise
    .then((result)=>{
        console.log(result.data);
        openToast(result.data.message);
        // alert(result.data.message)
    })
    .catch((err)=>{
        console.log(err.message);
        openToast(err.message)
        // alert(err.message)
    })
    // for (let i = 0; i < arrInput.length; i++) {
    //     var valueInput = document.getElementById(arrInput[i].id).value;
    //     if (arrInput[i] == "email") {
    //         isValid &=
    //           checkEmptyValue(valueInput, arrSmall[i]) &&
    //           checkEmailValue(valueInput, arrSmall[i]);
    //       }else if(arrInput[i] == "name"){
    //         isValid &=
    //         checkEmptyValue(valueInput, arrSmall[i]) &&
    //         checkTextValue(valueInput, arrSmall[i]);
    //       }else if(arrInput[i] == "pass" || arrInput[i] == "passConfirm"){
    //         isValid &=
    //         checkEmptyValue(valueInput, arrSmall[i]) &&
    //         checkEmailValue(valueInput, arrSmall[i]);
    //       }
    //       user[arrInput[i]] = valueInput;
    // }  
    // if (isValid) {
    //     console.log(user);
    //     return user;
    //   }
}

function openToast(string) {
    document.querySelector(".toast-body").innerHTML = string;
    // gọi tới layout toast
    const toastLiveExample = document.getElementById("liveToast");
    // thêm toastBootstrap để có thể sử dụng phương thức show giúp mở toast lên
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  }