import { Producto } from "../models/producto";

const URL = "http://localhost:8080/productos";

export async function listarProductos(): Promise<void> {
    try {
        const respuesta = await fetch(URL);
        const mensaje = await respuesta.json();
        console.log(mensaje);
    } catch(error) {
        console.log(error);
    }
}

export async function obtenerProducto(id:number): Promise<void> {
    try {
        const respuesta = await fetch(`${URL}/${id}`);
        const mensaje = await respuesta.json();
        console.log(mensaje);
    } catch(error) {
        console.log(error);
    }
}

export async function agregarProducto(producto:Producto): Promise<void> {
    try {
        const respuesta = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        });

        const mensaje = await respuesta.json();
        console.log(mensaje);
    } catch(error) {
        console.log(error);
    }
}

export async function actualizarProducto(id:number, producto:Producto): Promise<void> {
    try {
        const respuesta = await fetch(`${URL}/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        });

        const mensaje = await respuesta.json();
        console.log(mensaje);
    } catch(error) {
        console.log(error);
    }
}

export async function eliminarProducto(id:number): Promise<void> {
    try {
        const respuesta = await fetch(`${URL}/${id}`,{
            method:"DELETE"
        });

        const mensaje = await respuesta.json();
        console.log(mensaje);
    } catch(error) {
        console.log(error);
    }
}