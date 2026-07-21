import http from "http";
import { router } from "./router";

const PORT = 3000;

const servidor = http.createServer((req,res)=>{

    res.setHeader(
        "Content-Type",
        "application/json"
    );

    const respuesta = router(req,res);

    if(!respuesta){

        res.writeHead(404,{
            "Content-Type":"application/json"
        });

        res.end(JSON.stringify({
            mensaje:"Ruta no encontrada"
        }));
    }

});

servidor.listen(PORT,()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`);
});