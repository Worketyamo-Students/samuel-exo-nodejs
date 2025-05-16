import express from "express"
import router from "./routes/route.js";
import bodyParser from "body-parser"
const app = express()

app.use(bodyParser.json());
app.use("/",router)

app.listen(5000, (err)=>{
    if(err) throw err
    console.log("le serveur tourne sur le port 5000")
})  