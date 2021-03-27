const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log',()=>{
    fs.appendFile(path.join(__dirname, "log.txt"), message, err =>{
        if(err) throw err
    })
})

function log(message){
    emitter.emit('log', message)
}


module.exports = log