# 📒 Agenda Personal - CRUD con Node.js, Express y MongoDB

Hola, soy Milagros 👋  
Este es un proyecto completo de una **agenda personal** donde puedo registrar, consultar, editar y eliminar mis contactos personales. Está construido usando **Node.js**, **Express**, **MongoDB Atlas** y una interfaz web bonita hecha con **HTML, CSS y JavaScript**.

## 🌟 Características

- ✅ Crear nuevos contactos
- 📄 Ver todos los contactos en una tabla
- 🖊️ Editar contactos
- 🗑️ Eliminar contactos
- 🔎 Buscar por nombre o email (opcional)
- 🧠 Datos almacenados en MongoDB Atlas

## 🧱 Estructura del proyecto

mi-agenda-api/
├── controllers/
│ └── contactoController.js
├── middlewares/
│ └── errorHandler.js
├── models/
│ └── contacto.js
├── routes/
│ └── contactoRoutes.js
├── public/
│ ├── index.html
│ ├── css/
│ │ └── estilos.css
│ └── js/
│ └── app.js
├── .env
├── app.js
├── package.json
└── README.md

markdown
Copiar
Editar

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- HTML, CSS y JavaScript

## ⚙️ Cómo instalar y ejecutar

1. **Clona el repositorio:**

```bash
git clone https://github.com/tuusuario/mi-agenda-api.git
cd mi-agenda-api
Instala las dependencias del backend:

bash
Copiar
Editar
npm install
Crea el archivo .env con tu conexión a MongoDB Atlas:

env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/miagenda
Ejecuta el servidor:

bash
Copiar
Editar
npm run dev
Abre el archivo index.html que está dentro de la carpeta /public en tu navegador.

💡 Puedes usar una extensión como Live Server en VSCode.

🎨 Interfaz amigable
El frontend incluye un formulario para registrar contactos y una tabla que muestra todos los contactos con botones para editar y eliminar. Todo se conecta automáticamente con la API usando JavaScript.

🧑‍💻 Autor
Milagros Madelein Ramos Chamorro
Estudiante apasionada por el desarrollo web y el aprendizaje continuo 🌱

