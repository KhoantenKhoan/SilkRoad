btnluu = document.querySelector("#btnluu");
  
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong.json";
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
  
  danhMuc={
    tenDMT: document.querySelector("#ten").value.trim(),
    trangThai : anHien
  }
  options = {
    method: "POST",
    body: JSON.stringify(danhMuc),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    toastr.success("Thêm thành công!");
    setTimeout(function () {
      
      document.location="dmTong.html";
    },1000)
  })
}