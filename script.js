document.getElementById("usersTable");

async function getUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const users = await response.json();
  usuarios = users.data;
  console.log(usuarios);
  usuarios.forEach((usuario) => {
    usersTable.innerHTML += `<tr>
    <td>${usuario.id}</td>
    <td>${usuario.first_name}</td>
    <td>${usuario.last_name}</td>
    <td>${usuario.email}</td>
    <td><img src="${usuario.avatar}" alt=""></td>
    <td> 
    <button class="btn btn-outline-primary" onclick ="showModal(${usuario.id})">Ver</button>
    <button class="btn btn-outline-warning" onclick="updateModal(${usuario.id})">Actualizar</button>
    <button class="btn btn-outline-danger" onclick ="deleteUser(${usuario.id})">Eliminar</button>
    </td>
    </tr>`;
  });
}

getUsers();

 function registerUser(){
    registerModal.show()
 }

 async function saveBtn(){
  try {
    const response = await fetch("https://reqres.in/api/users",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(
        usuario = {
          first_name: first_name.value,
          last_name: last_name.value,
          email: email.value
        }
      ),
    });
    const result = await response.json();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: false,
      timer: 1000
    })
    modalRegister.hide()
  } catch (error) {
    console.error(error)
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'No se realizó el registro',
      showConfirmButton: false,
      timer: 1000
    })
  }
 }
