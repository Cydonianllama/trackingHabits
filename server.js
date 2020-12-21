const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/resources',express.static(path.resolve('resources')))
app.use('/dist', express.static(path.resolve('dist')))

//habito

//user

const SendAllApp = (req,res) => {
    console.log('aplicacion para el despliege')
    console.log(path.resolve('dist','index.html'))
    res.status(200).sendFile(path.resolve('dist')+'/index.html')
}

app.get('/',SendAllApp)

const send404 = (req,res) => {
    res.status(404).send({error : ' si ahya un error'})
}

app.get('*',send404)

const callbackListen = (err) =>{
    if(err)console.log(err)
    else console.log('conexion exitosa')
}
app.listen(5000,callbackListen)