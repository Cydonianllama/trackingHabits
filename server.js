const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000 


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/resources',express.static(path.resolve('dist','resources')))
app.use('/style', express.static(path.resolve('dist', 'styles')))
app.use('/dist', express.static(path.resolve('dist')))
//habito

//user

const SendAllApp = (req,res) => {
    console.log('aplicacion para el despliege')
    res.status(200).sendFile(path.resolve('dist')+'/indexFor.html')
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
app.listen(PORT,callbackListen)