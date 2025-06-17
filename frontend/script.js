const API_URL = "http://localhost:3000/contactos";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const tabla = document.querySelector("#tabla-contactos tbody");
  let contactoEditandoId = null;


formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: formulario.nombre.value,
    telefono: formulario.telefono.value,
    email: formulario.email.value,
    direccion: formulario.direccion.value,
    fechaNacimiento: formulario.fechaNacimiento.value
  };

  if (contactoEditandoId) {
    await fetch(`${API_URL}/${contactoEditandoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });

    contactoEditandoId = null;
    document.querySelector("#formulario button").textContent = "Guardar contacto";
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });
  }

  formulario.reset();
  cargarContactos();
});


  async function cargarContactos() {
    const res = await fetch(API_URL);
    const contactos = await res.json();
    function editarContacto(id, nombre, telefono, email, direccion, fechaNacimiento) {
  contactoEditandoId = id;

  document.getElementById("nombre").value = nombre;
  document.getElementById("telefono").value = telefono;
  document.getElementById("email").value = email;
  document.getElementById("direccion").value = direccion;
  document.getElementById("fechaNacimiento").value = fechaNacimiento.slice(0, 10);

  document.querySelector("#formulario button").textContent = "Actualizar contacto";
}


    tabla.innerHTML = "";

    contactos.forEach((c) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${c.nombre}</td>
        <td>${c.telefono}</td>
        <td>${c.email || ""}</td>
        <td>${c.direccion || ""}</td>
        <td>${c.fechaNacimiento ? c.fechaNacimiento.slice(0, 10) : ""}</td>
        <td>
        <button onclick="editarContacto('${c._id}', '${c.nombre}', '${c.telefono}', '${c.email}', '${c.direccion}', '${c.fechaNacimiento}')">Editar</button>
        <button onclick="eliminarContacto('${c._id}')">Eliminar</button>
</td>

        `;
        tabla.appendChild(fila);
    });
    }

    cargarContactos();
});

async function eliminarContacto(id) {
  const confirmacion = confirm("¿Estás segura de eliminar este contacto?");
  if (!confirmacion) return;

  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  location.reload();
}
