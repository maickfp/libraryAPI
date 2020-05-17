// MODULOS DE TERCEROS
// importar fs - manejo de archivos
const fs = require("fs");

// MODULOS PROPIOS
// logger
const log = require('./../utils/log');
// servicio users
const userService = require('./../services/users');
// servicio users
const bookService = require('./../services/books');

// Procedimientos
// Cargar usuarios
function loadUsers(){
    fs.readFile('./files/users.json', "utf8", (err, data) => {
    
        if(err){
            log.error(`Error cargando usuarios: ${err}`);
            return;
        }
    
        const usersList = JSON.parse(data);
        usersList.forEach(user=>{
            userService.createUser(user.name, user.username, user.password);
        });
        
    });
}
// Cargar libros
function loadBooks(){
    fs.readFile('./files/books.json', "utf8", (err, data) => {
    
        if(err){
            log.error(`Error cargando libros: ${err}`);
            return;
        }
    
        const booksList = JSON.parse(data);
        booksList.forEach(book=>{
            bookService.createBook(book.name, book.author);
        });
        
    });
}

const beforeStart = () => {
    loadUsers();
    loadBooks();
};

module.exports = beforeStart;