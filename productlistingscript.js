showData();

let addBtn = document.getElementById("add");

addBtn.addEventListener("click", function (e) {
  let Name = document.getElementById("name");
  let form = document.getElementById("Add-form");
  let input = Name.value;
  let address = document.getElementById("address");
  let inputAddress = address.value;
  let addCard = document.getElementById("addCard");
  let description = document.getElementById("description");
  let inputDescription = description.value;
  let kitchen = document.getElementById("kitchen");
  let bedroom = document.getElementById("bedroom");
  let garage = document.getElementById("garage");
  const message = document.getElementById("message");

  let data = localStorage.getItem("data");
  if (data == null) {
    dataObj = [];
  } else {
    dataObj = JSON.parse(data);
  }

  let inputData = {
    name: Name.value,
    address: address.value,
    description: description.value,
    kitchen: kitchen.value,
    bedroom: bedroom.value,
    garage: garage.value,
  };

  if (
    input &&
    inputAddress &&
    inputDescription &&
    kitchen &&
    bedroom &&
    garage
  ) {
    dataObj.push(inputData);
    localStorage.setItem("data", JSON.stringify(dataObj));

    Name.value = "";
    address.value = "";
    description.value = "";
    kitchen.value = "";
    bedroom.value = "";
    garage.value = "";

    form.reset();
    showData();
    message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong>
    Your Property is listed successfully!!!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  } else {
    message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error!</strong>
    Please fil the form first.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  }

  setTimeout(function () {
    message.innerHTML = ``;
  }, 5000);

  e.preventDefault();
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
        <img
          src="Resourses/property.jpg"
          alt=""
          class="img-fluid"
        />
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
