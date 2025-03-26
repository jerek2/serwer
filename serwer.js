const express = require('express')
const app = express()
const port = 3000

const EventEmitter = require('events');
const myEmitter = new EventEmitter();


myEmitter.on('add', (message)=>{
    console.log(`Dodano: ${message}`);
})

myEmitter.emit('add', 'Mój tekst');

app.get('/', (req, res) => {
 res.send('Hello World!')
})
app.get('/a', (req, res) => {
    res.send("jgoidjsgoisjgrein")
   })
   app.get('/b', (req, res) => {
    res.send(tab)
   })

app.listen(port, () =>{
 console.log('Example app listening on port ${port}')
})
const tab = [
    {id: 1, name: "BBB",surname: "BBB", age: 24}
]