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
        if (value) {
          if (value.giamGia = 15) {
            content += `
                <div class="latest-prdouct__slider__item">
                    <a href="#" class="latest-product__item">
                        <div class="latest-product__item__pic">
                            <img src="${value.hinhAnh}" alt="">
                        </div>
                        <div class="latest-product__item__text">
                            <h6>${value.tenSP}</h6>
                            <span>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia - (value.gia / value.giamGia))} VNĐ</span>
                        </div>
                    </a>
                </div>
            
              `;
            }
        }
      }
    }
    document.getElementById('top').innerHTML += content;
  }
  showProduct();
