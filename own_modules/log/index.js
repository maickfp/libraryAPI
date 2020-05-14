// imporatar rotating-file-stream - rotar archivos (logs)
const rfs = require("rotating-file-stream");

// stream para logger propio - aplicacion
const applicationLoggerStream = rfs.createStream("audits.log", {
    path: "./logs",
    size: "10M",
    interval: "1d",
    compress: "gzip"
});

const log = {
    info: (msg, username = "NONE", path = "NONE") => {
        printLine(`INFO [${new Date()} ${username} ${path}]: ${msg}`);
    },
    warn: (msg, username = "NONE", path = "NONE") => {
        printLine(`WARN [${new Date()} ${username} ${path}]: ${msg}`);
    },
    error: (msg, username = "NONE", path = "NONE") => {
        printLine(`**ERROR** [${new Date()} ${username} ${path}]: ${msg}`);
    }
};

function printLine(line){
    applicationLoggerStream.write(`${line}\n`);
}

module.exports = log;