# API Libros - LibraryAPI

Deben construir una API para gestión de libros que cuenta con algunas rutas públicas y otras privadas. 

Las rutas privadas deben ser autenticadas con un middelware que utilice un token basado en el módulo jsonwebtoken. 

Solo se deben implementar las rutas especificadas a continuación:

## Entidades:

- ### Books

| Ruta | Método | Descrpción |
| - | - | - |
| / | GET | Listar libros |
| /books | POST | Nuevo libro\* (id auto-generado, name, author) |
|/books/:id | GET | Mostrar libro por id |

- ### Users

| Ruta | Método | Descrpción |
| - | - | - |
| /users | POST | Nuevo usuario (id auto-generado, name, username, password-hash) |
| /users/login | POST | Login usuario |

\*Indica si la ruta es privada

## Adicionalmente:

- Se deben registrar todas las acciones del usuario autenticado en un archivo llamado audits.log con el formato (date, username, path)
- Se deben registrar únicamente los accesos a las rutas de la entidad Books con el formato predeterminado de la librería Morgan en un archivo llamado access.log.

## Rutas adicionales propias:

- ### Users

| Ruta | Método | Descrpción |
| - | - | - |
| /users | GET | Listar usuarios (id, name, username) |