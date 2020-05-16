// MODULOS DE TERCEROS
// importar fs - manejo de archivos
const fs = require("fs");

// MODULOS PROPIOS
// logger
const log = require('./../utils/log');
// servicio users
const userService = require('./../services/users');

const beforeStart = () => {
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
};

module.exports = beforeStart;