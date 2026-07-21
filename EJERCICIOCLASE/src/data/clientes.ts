import { Cliente } from "../models/cliente";

export const clientes:Cliente[] = [
    {
        id:1,
        nombre:"Juan",
        apellido:"Pérez",
        correo:"juan.perez@gmail.com",
        telefono:"55512345",
        direccion:"Zona 1, Guatemala",
        estado:"ACTIVO"
    },
    {
        id:2,
        nombre:"María",
        apellido:"López",
        correo:"maria.lopez@gmail.com",
        telefono:"55567890",
        direccion:"Zona 10, Guatemala",
        estado:"ACTIVO"
    },
    {
        id:3,
        nombre:"Carlos",
        apellido:"Gómez",
        correo:"carlos.gomez@gmail.com",
        telefono:"55598765",
        direccion:"Zona 5, Guatemala",
        estado:"INACTIVO"
    },
    {
        id:4,
        nombre:"Ana",
        apellido:"Rodríguez",
        correo:"ana.rodriguez@gmail.com",
        telefono:"55545678",
        direccion:"Zona 12, Guatemala",
        estado:"ACTIVO"
    },
    {
        id:5,
        nombre:"Luis",
        apellido:"Martínez",
        correo:"luis.martinez@gmail.com",
        telefono:"55532145",
        direccion:"Zona 7, Guatemala",
        estado:"INACTIVO"
    }
];