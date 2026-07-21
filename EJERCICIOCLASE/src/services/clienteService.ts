import { Cliente } from "../models/cliente";
import { clientes } from "../data/clientes";

export function obtenerClientes():Cliente[] {
    try {
        return clientes;
    } catch(error) {
        throw new Error("No se pudieron obtener los clientes");
    }
}

export function buscarCliente(id:number):Cliente {
    try {
        const cliente = clientes.find(c => c.id === id);

        if(!cliente){
            throw new Error("Cliente no encontrado");
        }

        return cliente;

    } catch(error) {
        throw error;
    }
}

export function crearCliente(cliente:Cliente):Cliente {
    try {

        if(cliente.nombre.trim() === ""){
            throw new Error("El nombre es obligatorio");
        }

        if(cliente.apellido.trim() === ""){
            throw new Error("El apellido es obligatorio");
        }

        if(cliente.correo.trim() === ""){
            throw new Error("El correo es obligatorio");
        }

        if(cliente.telefono.trim() === ""){
            throw new Error("El teléfono es obligatorio");
        }

        const correoExiste = clientes.some(
            c => c.correo === cliente.correo
        );

        if(correoExiste){
            throw new Error("El correo ya existe");
        }

        clientes.push(cliente);

        return cliente;

    } catch(error) {
        throw error;
    }
}

export function actualizarCliente(id:number, cliente:Cliente):Cliente {
    try {

        const index = clientes.findIndex(
            c => c.id === id
        );

        if(index === -1){
            throw new Error("Cliente no encontrado");
        }

        if(cliente.nombre.trim() === ""){
            throw new Error("El nombre es obligatorio");
        }

        if(cliente.apellido.trim() === ""){
            throw new Error("El apellido es obligatorio");
        }

        if(cliente.correo.trim() === ""){
            throw new Error("El correo es obligatorio");
        }

        if(cliente.telefono.trim() === ""){
            throw new Error("El teléfono es obligatorio");
        }

        clientes[index] = cliente;

        return cliente;

    } catch(error) {
        throw error;
    }
}

export function eliminarCliente(id:number):boolean {
    try {

        const index = clientes.findIndex(
            c => c.id === id
        );

        if(index === -1){
            throw new Error("Cliente no encontrado");
        }

        clientes.splice(index,1);

        return true;

    } catch(error) {
        throw error;
    }
}