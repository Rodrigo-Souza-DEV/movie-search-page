"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.engine("mustache", (0, mustache_express_1.default)()); // Registra o Mustache como motor de visualização
server.set("view engine", "mustache"); // Define Mustache como o motor padrão
server.set("views", path_1.default.join(__dirname, "views")); // Define o diretório das views
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(routes_1.default);
server.use((req, res) => {
    res.render('pages/404');
});
server.listen(process.env.PORT, () => {
    console.log('=====================================');
    console.log('              OK');
    console.log('=====================================');
});
