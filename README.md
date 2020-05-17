# API Libros - LibraryAPI

Deben construir una API para gestión de libros que cuenta con algunas rutas públicas y otras privadas. 

Las rutas privadas deben ser autenticadas con un middelware que utilice un token basado en el módulo jsonwebtoken. 

Solo se deben implementar las rutas especificadas a continuación:

## Entidades:

- ### Books

#### Estructura
```json
 {
    id -> text (auto)
    name -> text
    author -> text
 }
```

#### Rutas
| Endpoint | Método | URL| Descripción |
| - | - | - | - |
| / | GET | http://localhost/api | Listar libros |
| /books | POST | http://localhost/api/books | Nuevo libro\* (id auto-generado, name, author) |
|/books/:id | GET | http://localhost/api/books/:id | Mostrar libro por id |
\*Indica si la ruta es privada (Header: x-auth)

- ### Users

#### Estructura
```json
 {
    id -> text (auto)
    username -> text
    name -> text
    password -> text (hash)
 }
 ```

#### Rutas
| Endpoint | Método | URL | Descripción |
| - | - | - |
| /users | POST | http://localhost/api/users | Nuevo usuario (id auto-generado, name, username, password-hash) |
| /users/login | POST | http://localhost/api/users/login | Login usuario |
\*Indica si la ruta es privada (Header: x-auth)

## Adicionalmente:

- Se deben registrar todas las acciones del usuario autenticado en un archivo llamado audits.log con el formato (date, username, path)
- Se deben registrar únicamente los accesos a las rutas de la entidad Books con el formato predeterminado de la librería Morgan en un archivo llamado access.log.

## Rutas adicionales:

- ### Users

| Endpoint | Método | URL | Descrpción |
| - | - | - | - | 
| /users | GET | http://localhost/api/users | Listar usuarios (id, name, username) |

## Archivos:

- ### /files

| Nombre | Descrpción |
| - | - |
| books.json | Contiene los libros cargados por defecto |
| users.json | Contiene los usuarios cargados por defecto |
| MakeItReal_libraryAPI.postman_collection.json | Contiene las pruebas de Postman |

- ### /logs

| Nombre | Descrpción |
| - | - |
| audits.log | Contiene todos los movimientos del usuario (incluye mensaje de servidor iniciado) |
| access.log | Contiene los registros de acceso a rutas de la entidad Book |
