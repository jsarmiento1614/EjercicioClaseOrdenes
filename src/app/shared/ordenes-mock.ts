import { Ordenes } from "./models/ordenes";

export const OrdenesMock: Ordenes [] =[
    {
        nombreCliente: "Jesus Sarmiento",
        platillo: "Arroz con Pollo",
        totalPagar: 60,
        OrdenEntregada: true 
    },
    {
        nombreCliente: "Jose Antonio",
        platillo: "Carne Asada",
        totalPagar: 100,
        OrdenEntregada: true 
    },
    {
        nombreCliente: "Luis Alonso",
        platillo: "Arroz con Pollo",
        totalPagar: 120,
        OrdenEntregada: true 
    },
    {
        nombreCliente: "Maria Luisa",
        platillo: "Pezcado Frito ",
        totalPagar: 150,
        OrdenEntregada: false 
    },
    {
        nombreCliente: "Juana Martinez",
        platillo: "Sopa Marinera",
        totalPagar: 200,
        OrdenEntregada: false 
    }
];
