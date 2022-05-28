showData();

let addBtn = document.getElementById("add");

addBtn.addEventListener("click", function (e) {
  const reader = new FileReader();

  const message = document.getElementById("message");
  reader.addEventListener("load", () => {
    let form = document.getElementById("Add-form");
    let bedroom = document.getElementById("bedroom");
    let kitchen = document.getElementById("kitchen");
    let Name = document.getElementById("name");
    let address = document.getElementById("address");

    let description = document.getElementById("description");
    let garage = document.getElementById("garage");

    let data = localStorage.getItem("data");
    if (data == null) {
      dataObj = [];
    } else {
      dataObj = JSON.parse(data);
    }

    let obj = {
      name: Name.value,
      address: address.value,
      description: description.value,
      kitchen: kitchen.value,
      bedroom: bedroom.value,
      garage: garage.value,
      image: reader.result,
    };

    dataObj.push(obj);
    localStorage.setItem("data", JSON.stringify(dataObj));
  });

  let imageBtn = document.querySelector("#myFileInput");
  reader.readAsDataURL(imageBtn.files[0]);
  showData();
});

function showData() {
  let data = localStorage.getItem("data");
  if (data == null) {
    dataObj = [];
  } else {
    dataObj = JSON.parse(data);
  }

  let html = "";
  dataObj.forEach(function (e, index) {
    html += `<div class="col-12">
    <div class="row p-2 bg-white border rounded mt-2 mb-2">
      <div class="col-4 pe-2 ps-0 image-div">
      <div class="image img-fluid photo" style = "width: 100%; min-height: 200px; 
      background-image:linear-gradient(
        to top,
        rgba(255, 255, 255, 0.403),
      rgba(0, 0, 0, 0)
      ), url(${e.image}); background-position: center; background-size: cover"; background-repeat: no-repeat;></div>
        <div class="comodities d-flex">
          <img
            src="Resourses/kitchen-sink-svgrepo-com.svg"
            alt=""
            style="width: 9%"
          />
          <p>${e.kitchen}</p>
  
          <img
            src="Resourses/bedroom-svgrepo-com.svg"
            alt=""
            style="width: 9%"
          />
          <p>${e.bedroom}</p>
          <img
            src="Resourses/garage-svgrepo-com.svg"
            alt=""
            style="width: 9%"
          />
          <p>${e.garage}</p>
        </div>
      </div>
      <div class="col-md float-end">
      <h4
      style="
        color: rgba(31, 31, 97);
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
    ${e.name}$/month
      <button
        class="btn btn-danger"
        id = "${index}"
        type="button"
        onclick = "deleteNode(this.id)"
      >
        <i class="bi bi-trash3-fill"></i>
      </button>
    </h4>
        <p>${e.address}</p>
        
        <p class = "card-description">
          ${e.description}
          
        </p>
        
      </div>
      
    </div>
  </div>`;
  });

  let list = document.getElementById("addCard");
  if (dataObj.length != 0) {
    list.innerHTML = html;
  } else {
    list.innerHTML = `<h2 > Nothing to show here please add your property to the list</h2>`;
  }
}

function deleteNode(index) {
  let data = localStorage.getItem("data");
  if (data == null) {
    dataObj = [];
  } else {
    dataObj = JSON.parse(data);
  }

  dataObj.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(dataObj));
  showData();
}
