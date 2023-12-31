const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

// Adiciona o middleware para servir arquivos estáticos do diretório 'public'
app.use(express.static(path.join(__dirname, 'public')));

router.get("/", (req, res) => {
    // Corrige a construção do caminho removendo as aspas simples
    res.sendFile(path.join(__dirname, 'views', '/home.HTML'));
});

router.get("/contato", (req, res) => {
    // Corrige a construção do caminho removendo as aspas simples
    res.sendFile(path.join(__dirname, 'views', '/contato.HTML'));
});

app.use(router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
