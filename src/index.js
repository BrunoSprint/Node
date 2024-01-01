const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()


router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"));
});

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"));
});

app.use(router);

app.listen(3333, ()=>{
    console.log("Servidor rodando-Ativo");
});

// Em caso de Hospedagem realizar Alteração: Servidor / Host

//  método de servidor host-local ||   app.listen(3333, ()=>{
//  método Servidor hospedado     ||   app.listen(process.env.PORT || 3333, ()=>{ 
 
