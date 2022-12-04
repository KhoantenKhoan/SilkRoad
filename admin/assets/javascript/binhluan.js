
  let count =1;
  var table = document.querySelector("#bl");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/binhLuan.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          if(row){
          table.innerHTML += `
          <tr>
          <td>${count++}</td>
          <td>${row.ngay}</td>
          <td>${row.noiDung}</td>
          <td>
            <a href="update-cmt.html?id=${key}"><button  class="btn btn-info">Sửa</button></a>
            <button class="btn btn-danger btn-del" onclick="xoa('${key}')">Xóa</button>
          </td>
        </tr>
            `;}
        });
      })();

      const xoa = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/binhLuan/${id}.json`,
            {
              method: "DELETE",
            }
          );
          window.location.reload();
        })();
      };