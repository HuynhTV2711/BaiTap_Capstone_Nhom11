function checkEmptyValue(value, small) {
    if (value == '') {
      document.getElementById(small).innerHTML = 'Vui lòng không bỏ trống';
      return false;
    } else {
      document.getElementById(small).innerHTML = '';
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
    let result = /^[a-zA-Z ]+$/.test( value);
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

  // kiểm tra độ dài ký tự
  function checkMinMaxValue(value, spanId, min, max) {
    if (value.length >= min && value.length <= max) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML = `Vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
      return false;
    }
  }
  