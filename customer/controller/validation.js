function checkEmptyValue(value, spanId) {
    if (value == '') {
      document.getElementById(spanId).innerHTML = 'Vui lòng không bỏ trống';
      return false;
    } else {
      document.getElementById(spanId).innerHTML = '';
      return true;
    }
  }
  
  function checkEmailValue(value, spanId) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    regexEmail.test(value); 
    if (regexEmail.test(value)) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Định dạng email không chính xác';
      return false;
    }
  }
  function checkTextValue(value, spanId){
    let result = /^[a-zA-Z ]+$/.test(value);
    if (result) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Định dạng tên nhân viên chỉ chứa chữ cái';
      return false;
    }
  }
  // Kiểm tra độ mạnh mật khẩu
  function checkStrongPwd(value, spanId){
    let result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})/.test( value);
    if (result) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Mật khẩu bao 6-10 ký tự bao gồm chữ in hoa, thường, số, ký tự đặc biệt';
      return false;
    }
  }

  function checkNumberValue(value, spanId){
    let result = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(value);
    if (result) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Định dạng số điện thoại 123-456-7890 hoặc 123 456 7890';
      return false;
    }
  }

  function confirmPassword(value, spanId){
    let valuePass = document.getElementById("password").value;
    if (value == valuePass) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    }else{
      document.getElementById(spanId).innerHTML = 'Mật khẩu không khớp, vui lòng nhập lại';
      return false;
    }
    
  }
  
  