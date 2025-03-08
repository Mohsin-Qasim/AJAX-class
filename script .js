// function loadUSer() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data)
//         dataProcess(data)
//       })
//     //   .catch(console.log("something wrong"));
//   }

//   function dataProcess(data) {
//     let userList = document.getElementById("userList")

//     data.forEach(function (user) {
//       let li = document.createElement("li");
//       li.className = "list-group-item";
//       li.innerHTML = ` <strong>Name: ${user.name} </strong> Email: ${user.email} and Contact Number is ${user.phone}`
//       userList.appendChild(li)
//     });
//   }

//   document.getElementById("loadUsers").addEventListener("click", loadUSer);

fetch("https://randomuser.me/api/?results=20")
.then(function (response) {
  return response.json();
})
.then(function (data) {
//   console.log(data);
let userContainer = document.getElementById("userContainer");
  data.results.forEach(function (user) {
    let div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `<div class="card" >
        <img src=${user.picture.large} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
          <p class="card-text">${user.location.city}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
  userContainer.appendChild(div);
      
  });

// .console.log(data);

});


