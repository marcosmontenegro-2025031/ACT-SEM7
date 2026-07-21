import { Producto } from "../models/producto";

export const productos: Producto[] = [
    {
        id: 1,
        nombre: "Laptop HP",
        descripcion: "Laptop Core i5 16GB RAM",
        precio: 6500,
        stock: 10,
        categoria: "Tecnología",
        estado: "DISPONIBLE"
    },
    {
        id: 2,
        nombre: "Mouse Logitech",
        descripcion: "Mouse inalámbrico",
        precio: 180,
        stock: 30,
        categoria: "Accesorios",
        estado: "DISPONIBLE"
    },
    {
        id: 3,
        nombre: "Teclado Mecánico",
        descripcion: "Teclado RGB",
        precio: 450,
        stock: 20,
        categoria: "Accesorios",
        estado: "DISPONIBLE"
    },
    {
        id: 4,
        nombre: "Monitor Samsung",
        descripcion: "Monitor LED de 24 pulgadas",
        precio: 1400,
        stock: 8,
        categoria: "Monitores",
        estado: "AGOTADO"
    },
    {
        id: 5,
        nombre: "Disco SSD",
        descripcion: "SSD de 1TB",
        precio: 750,
        stock: 15,
        categoria: "Almacenamiento",
        estado: "DISPONIBLE"
    }
];