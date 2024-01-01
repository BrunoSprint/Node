const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

console.log(path.join(__dirname + "/src/pages/home.html"))


router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/src/pages/home.html"));
});

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/src/pages/contato.html"));
});

app.use(router);

app.listen(3333, ()=>{
    console.log("Servidor rodando");
});

