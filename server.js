const express = require("express")
const app = express()
const dataLaguRouter = require("./app/routes/routelagu")

const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.json({message:"welcome my webapi"})
})

app.use('/datalagu',dataLaguRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=> {
    console.log(`Server Is running on port ${PORT}`)
})