import { IncomingMessage, ServerResponse } from "http";
import { productos } from "../data/productos";
import { clientes } from "../data/clientes";

export function router(req:IncomingMessage,res:ServerResponse){

    if(req.url === "/productos" && req.method === "GET"){

        res.writeHead(200,{
            "Content-Type":"application/json"
        });

        res.end(JSON.stringify(productos));
        return true;
    }

    if(req.url?.startsWith("/productos/") && req.method === "GET"){

        const id = Number(req.url.split("/")[2]);

        const producto = productos.find(
            p=>p.id === id
        );

        res.writeHead(200,{
            "Content-Type":"application/json"
        });

        res.end(JSON.stringify(producto || {
            mensaje:"Producto no encontrado"
        }));

        return true;
    }

    if(req.url === "/productos" && req.method === "POST"){

        let body = "";

        req.on("data",chunk=>{
            body += chunk;
        });

        req.on("end",()=>{

            const producto = JSON.parse(body);

            productos.push(producto);

            res.writeHead(201,{
                "Content-Type":"application/json"
            });

            res.end(JSON.stringify({
                mensaje:"Producto creado",
                producto
            }));

        });

        return true;
    }

    if(req.url?.startsWith("/productos/") && req.method === "PUT"){

        const id = Number(req.url.split("/")[2]);

        let body = "";

        req.on("data",chunk=>{
            body += chunk;
        });

        req.on("end",()=>{

            const producto = JSON.parse(body);

            const index = productos.findIndex(
                p=>p.id === id
            );

            if(index === -1){

                res.writeHead(404);

                res.end(JSON.stringify({
                    mensaje:"Producto no encontrado"
                }));

                return;
            }

            productos[index] = producto;

            res.writeHead(200,{
                "Content-Type":"application/json"
            });

            res.end(JSON.stringify({
                mensaje:"Producto actualizado",
                producto
            }));

        });

        return true;
    }

    if(req.url?.startsWith("/productos/") && req.method === "DELETE"){

        const id = Number(req.url.split("/")[2]);

        const index = productos.findIndex(
            p=>p.id === id
        );

        if(index === -1){

            res.writeHead(404);

            res.end(JSON.stringify({
                mensaje:"Producto no encontrado"
            }));

            return true;
        }

        productos.splice(index,1);

        res.writeHead(200,{
            "Content-Type":"application/json"
        });

        res.end(JSON.stringify({
            mensaje:"Producto eliminado"
        }));

        return true;
    }


    if(req.url === "/clientes" && req.method === "GET"){

        res.writeHead(200,{
            "Content-Type":"application/json"
        });

        res.end(JSON.stringify(clientes));

        return true;
    }

    if(req.url?.startsWith("/clientes/") && req.method === "GET"){

        const id = Number(req.url.split("/")[2]);

        const cliente = clientes.find(
            c=>c.id === id
        );

        res.writeHead(200,{
            "Content-Type":"application/json"
        });

        res.end(JSON.stringify(cliente || {
            mensaje:"Cliente no encontrado"
        }));

        return true;
    }

    if(req.url === "/clientes" && req.method === "POST"){

        let body = "";

        req.on("data",chunk=>{
            body += chunk;
        });

        req.on("end",()=>{

            const cliente = JSON.parse(body);

            clientes.push(cliente);

            res.writeHead(201,{
                "Content-Type":"application/json"
            });

            res.end(JSON.stringify({
                mensaje:"Cliente creado",
                cliente
            }));

        });

        return true;
    }

    if(req.url?.startsWith("/clientes/") && req.method === "PUT"){

        const id = Number(req.url.split("/")[2]);

        let body = "";

        req.on("data",chunk=>{
            body += chunk;
        });

        req.on("end",()=>{

            const cliente = JSON.parse(body);

            const index = clientes.findIndex(
                c=>c.id === id
            );

            if(index === -1){

                res.writeHead(404);

                res.end(JSON.stringify({
                    mensaje:"Cliente no encontrado"
                }));

                return;
            }

            clientes[index] = cliente;

            res.writeHead(200,{
                "Content-Type":"application/json"
            });

            res.end(JSON.stringify({
                mensaje:"Cliente actualizado",
                cliente
            }));

        });

        return true;
    }

    if(req.url?.startsWith("/clientes/") && req.method === "DELETE"){

        const id = Number(req.url.split("/")[2]);

        const index = clientes.findIndex(
            c=>c.id === id
        );

        if(index === -1){

            res.writeHead(404);

            res.end(JSON.stringify({
                mensaje:"Cliente no encontrado"
            }));

            return true;
        }

        clientes.splice(index,1);

        res.writeHead(200,{
            "Content-Type":"application/json"
        });

        res.end(JSON.stringify({
            mensaje:"Cliente eliminado"
        }));

        return true;
    }

    return false;
}