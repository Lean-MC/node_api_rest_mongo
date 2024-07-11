const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const {config} = require ('dotenv')
config()

//rutas de libros,se puede poner autores y otras cosas
//pero hay que crear otras rutas y otros modelos
const bookRoutes = require('./routes/book.routes')

//usamos express para los middlewares
const app = express();
app.use(bodyParser.json()) //parseador de Bodys

//aca conectaremos la base de datos
mongoose.connect(process.env.MONGO_URL,{dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

//si es books busca la ruta de books,si es otra cosa busca otra cosa
app.use('/books',bookRoutes)
const port = process.env.PORT //3000

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})
