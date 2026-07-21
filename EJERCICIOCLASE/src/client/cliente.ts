import { Cliente } from "../models/cliente";

const URL = "http://localhost:8080/clientes";

export async function listarClientes():Promise<void>{
    try{
        const respuesta = await fetch(URL);
        const mensaje = await respuesta.json();
        console.log(mensaje);
    }catch(error){
        console.log(error);
    }
}

export async function obtenerCliente(id:number):Promise<void>{
    try{
        const respuesta = await fetch(`${URL}/${id}`);
        const mensaje = await respuesta.json();
        console.log(mensaje);
    }catch(error){
        console.log(error);
    }
}

export async function agregarCliente(cliente:Cliente):Promise<void>{
    try{
        const respuesta = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(cliente)
        });

        const mensaje = await respuesta.json();
        console.log(mensaje);

    }catch(error){
        console.log(error);
    }
}

export async function actualizarCliente(id:number, cliente:Cliente):Promise<void>{
    try{
        const respuesta = await fetch(`${URL}/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(cliente)
        });

        const mensaje = await respuesta.json();
        console.log(mensaje);

    }catch(error){
        console.log(error);
    }
}

export async function eliminarCliente(id:number):Promise<void>{
    try{
        const respuesta = await fetch(`${URL}/${id}`,{
            method:"DELETE"
        });

        const mensaje = await respuesta.json();
        console.log(mensaje);

    }catch(error){
        console.log(error);
    }
}