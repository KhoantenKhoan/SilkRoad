import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();
const product2 = new FireBaseService();
const comment = new FireBaseService();
const member = new FireBaseService();
(async () => {
let params = new URLSearchParams(location.search);
let id_item = params.get("id");

var table = document.querySelector("#product_detail");
          
const response = await fetch(
    `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id_item}.json`
  );
  const product = await response.json();
    // console.log(product);
    if( product && product.trangThai == 1 ) {
      table.innerHTML += `
    <div class="col-lg-6 col-md-6">
        <div class="product__details__pic">
            <div class="product__details__pic__item">
                    <img class="product__details__pic__item--large" src="${product.hinhAnh}" alt="">
            </div>
        </div>
    </div>
        <div class="col-lg-6 col-md-6">
            <div class="product__details__text">
                <h3>${product.tenSP.toUpperCase().substring(0,49)}</h3>
                <div class="product__details__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <span>${product.luotXem} Lượt xem</span>
                </div>
                <div class="product__details__price">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.gia - (product.gia / product.giamGia))}</div>
                <p>${product.moTa}</p>
                <div class="product__details__quantity">
                    <div class="quantity">
                        <div class="pro-qty">
                            <input type="number" value="1">
                        </div>
                    </div>
                </div>
                <a  onclick="giohang(${id_item},'${product.tenSP}',${product.gia - (product.gia / product.giamGia)},'${product.hinhAnh}')" class="primary-btn">Thêm vào giỏ hàng</a>
                <a  style="color:white" class="heart-icon"><span class="icon_heart_alt"></span></a>
                <ul>
                    <li><b>Tình trạng</b> <span>Còn hàng</span></li>
                    <li><b>Vận chuyển</b> <span>trong ngày khu vực HCM.</span></li>
                    <li><b>Share on</b>
                        <div class="share">
                            <a ><i class="fa fa-facebook"></i></a>
                            <a ><i class="fa fa-twitter"></i></a>
                            <a ><i class="fa fa-instagram"></i></a>
                            <a ><i class="fa fa-pinterest"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        `;
    }
})();
