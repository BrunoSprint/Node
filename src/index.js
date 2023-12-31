/*npm i express
importa o encadeamento de tudo oque foi instalado
*/


const express = require("express")
const path = require("path")

const app = express()

console.log(path.join(__dirname + "/pages/home.html"))
