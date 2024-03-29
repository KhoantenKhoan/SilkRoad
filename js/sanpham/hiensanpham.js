import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();
  async function showProduct() {
  
  let response=await product.getAll('sanPham');
    
  let data = await response.json();
    // console.log(data);
  let content = ``;
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        // console.log(value);
        if (value && value.trangThai== 1 ) {
          if (value.giamGia == 20 ) {
            content += `
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges ${value.idDM}">
                    <div class="featured__item">
                          <div class="featured__item__pic set-bg">
                            <a  href="shop-details.html?id=${key}&idDM=${value.idDM}">
                              <img src="${value.hinhAnh}" alt="">
                            </a>
                            <ul class="featured__item__pic__hover">
                              <li><a  onclick="giohang(${key},'${value.tenSP}',${value.gia - value.gia * (value.giamGia/100)},'${value.hinhAnh}')" ><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                          </div>

                          <div class="featured__item__text">
                            <div class="featured__item_name">
                              <h6><a href="shop-details.html?id=${key}&idDM=${value.idDM}">${(value.tenSP).toUpperCase().substring(0,49)}</a></h6>
                            </div>
                            <div class="featured__item_old_price">
                              <p style="text-decoration: line-through;">${value.gia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
                            </div>
                            <div class="featured__item_new_price">
                              <h5 style="color:red;">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia - value.gia * (value.giamGia/100))} </h5>
                            </div>
                          </div>
                      </div>
              </div>
              `;
            }
        }
      }
    }
    document.getElementById('danhsach').innerHTML += content;
  }
  showProduct();
