let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang/${id}.json`;
  dh={
      tenKH:document.querySelector("#tenKH").value.trim(),
      id:document.querySelector("#id").value.trim(),
      idKH:document.querySelector("#idKH").value.trim(),
      idKM:document.querySelector("#idKM").value.trim(),
      email:document.querySelector("#email").value.trim(),
      ngayDH:document.querySelector("#ngayDH").value.trim(),
      diaChi:document.querySelector("#diaChi").value.trim(),
      sdt:document.querySelector("#sdt").value.trim(),
      ghiChuKH:document.querySelector("#ghiChuKH").value.trim(),
      ghiChuAdmin:document.querySelector("#ghiChuAdmin").value.trim(),
      phuongThucTT:document.querySelector("#phuongThucTT").value.trim(),
      trangThaiDH : document.querySelector("#trangThaiDH").value.trim(),
  }
  options = {
    method: "PUT",
    body: JSON.stringify(dh),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    toastr.success("Sửa thành công!")
    setTimeout(function () {
      document.location="oder.html";
      
    },1000)
  })
}

url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang/${id}.json`;
fetch(url)
.then(res => res.json())
.then(dh  =>{
    document.getElementById('tenKH').value = dh.tenKH;
    document.getElementById('id').value = dh.id;
    document.getElementById('idKH').value = dh.idKH;
    document.getElementById('idKM').value = dh.idKM;
    document.getElementById('email').value = dh.email;
    document.getElementById('ngayDH').value = dh.ngayDH;
    document.getElementById('diaChi').value = dh.diaChi;
    document.getElementById("sdt").value = dh.sdt;
    document.getElementById('ghiChuKH').value = dh.ghiChuKH;
    document.getElementById('ghiChuAdmin').value = dh.ghiChuAdmin;
    document.getElementById('phuongThucTT').value = dh.phuongThucTT;
})