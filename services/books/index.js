// MODULOS EXTERNOS
// importar uuid
const {v4:uuidv4} = require('uuid');

// Variables
/**
 * Estructura:
 * {
 *  id -> text
 *  name -> text
 *  author -> text
 * }
 */
let books = [];

// Funciones / procedimientos

// Listar libros
const listBooks = () => {
    return books;
};

// Crear libro
const createBook = (
    name,
    author
) => {

    if(name === undefined || name === ''){
        return {
            est: 2,
            msg: `name es obligatorio`
        };
    }

    if(author === undefined || author === ''){
        return {
            est: 2,
            msg: `author es obligatorio`
        };
    }

    if(books.findIndex(bookTemp => bookTemp.name === name) !== -1){
        return {
            est: 2,
            msg: `Ya existe el libro`
        };
    }

    const book = {
        id: uuidv4(),
        name: name,
        author: author
    };

    books.push(book);

    return {
        est: 1,
        msg: `Libro creado`
    };

};

// Mostrar libro (id)
const showBook = (id) => {

    const book = books.find(tempBook => tempBook.id === id);

    if(book === undefined){
        return {
            est: 2,
            msg: `No existe el libro`,
            book: undefined
        };
    }

    return {
        est: 1,
        msg: `Libro encontrado`,
        book: book
    }

};

module.exports = {listBooks, createBook, showBook};