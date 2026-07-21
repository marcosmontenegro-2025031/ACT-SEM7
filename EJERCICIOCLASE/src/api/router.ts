import http from "http";

export function router(
    request: http.IncomingMessage,
    response: http.ServerResponse
): void {

    const metodo = request.method;
    const ruta = request.url;

    response.setHeader("Content-Type", "application/json");

    if (metodo === "GET" && ruta === "/productos") {

        response.writeHead(200);

        response.end(JSON.stringify({
            mensaje: "Ruta de productos funcionando"
        }));

        return;
    }

    if (metodo === "GET" && ruta === "/clientes") {

        response.writeHead(200);

        response.end(JSON.stringify({
            mensaje: "Ruta de clientes funcionando"
        }));

        return;
    }

    response.writeHead(404);

    response.end(JSON.stringify({
        error: "Ruta no encontrada"
    }));
}