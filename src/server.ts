import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRouter from "./routes";

dotenv.config();

const server = express();

server.engine("mustache", mustache()); // Registra o Mustache como motor de visualização
server.set("view engine", "mustache"); // Define Mustache como o motor padrão
server.set("views", path.join(__dirname, "views")); // Define o diretório das views

server.use(express.static(path.join(__dirname,'../public')));

server.use(mainRouter);

server.use((req,res)=>{
    res.render('pages/404');
})
const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log('=====================================');
    console.log('              OK');
    console.log('=====================================');
});
