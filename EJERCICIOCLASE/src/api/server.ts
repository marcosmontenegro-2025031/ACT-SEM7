import http from "http";
import { router } from "./router";

const PORT = 3000;

const server = http.createServer((request, response) => {
    router(request, response);
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});