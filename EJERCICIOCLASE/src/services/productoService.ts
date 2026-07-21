import { Producto } from "../models/producto";
import { agregarProducto, actualizarProducto, eliminarProducto, listarProductos, obtenerProducto } from "../client/productoClient";

export async function obtenerProductos(): Promise<void> {
    try {
        await listarProductos();
    } catch(error) {
        throw new Error("No se pudieron obtener los productos");
    }
}

export async function buscarProducto(id:number): Promise<void> {
    try {
        await obtenerProducto(id);
    } catch(error) {
        throw new Error("No se encontró el producto");
    }
}

export async function crearProducto(producto:Producto): Promise<void> {
    try {
        if(producto.nombre.trim() === ""){
            throw new Error("El nombre del producto es obligatorio");
        }

        if(producto.precio <= 0){
            throw new Error("El precio debe ser mayor a cero");
        }

        if(producto.stock < 0){
            throw new Error("El stock no puede ser negativo");
        }

        await agregarProducto(producto);

    } catch(error) {
        throw error;
    }
}

export async function editarProducto(id:number, producto:Producto): Promise<void> {
    try {
        if(producto.nombre.trim() === ""){
            throw new Error("El nombre del producto es obligatorio");
        }

        if(producto.precio <= 0){
            throw new Error("El precio debe ser mayor a cero");
        }

        await actualizarProducto(id, producto);

    } catch(error) {
        throw error;
    }
}

export async function borrarProducto(id:number): Promise<void> {
    try {
        await eliminarProducto(id);
    } catch(error) {
        throw new Error("No se pudo eliminar el producto");
    }
}