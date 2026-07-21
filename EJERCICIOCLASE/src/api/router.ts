import http from "http";

export function router(
    request: http.IncomingMessage,
    response: http.ServerResponse
): void {

    const metodo = request.method;
    const url = request.url;

    response.writeHead(200, {
        "Content-Type": "application/json"
    });

    response.end(
        JSON.stringify({
            mensaje: "Router funcionando correctamente",
            metodo: metodo,
            url: url
        })
    );
}