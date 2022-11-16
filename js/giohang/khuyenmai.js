import { FireBaseService } from "../API/firebaseService.js";
const brand = new FireBaseService();

async function showBrand() {
  
    let response=await brand.getAll('khuyenMai');
    
    let data = await response.json();
    
    let content = ``;
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (value) {
          console.log(value);
          content += `
            <option value="${value.id}">${value.khuyenMai}</option>
          `;
        }
      }
    }
    document.querySelector('#km').innerHTML = content;
    //document.getElementById('km').value=value;
  }
  showBrand();