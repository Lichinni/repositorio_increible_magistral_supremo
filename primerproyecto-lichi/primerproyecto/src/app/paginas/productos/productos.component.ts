import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Gato Durmiendo',
      descripcion: 'Duerme desde las 00:00 hasta las 23:99.',
      precio: 5.00,
      imagen:  '/gato_durmiente.png' ,   
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Gato Programador',
      descripcion: 'Gato que sabe usar JS, Scracth y LOLCODE.',
      precio: 5000.00,
      imagen: '/gato_programante.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Gato de las Sombras',
      descripcion: 'Gato hecho de oscuridad y miedo.',
      precio: 666.00,
      imagen: '/gato_demoniaco.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Gato Grande',
      descripcion: 'Se llama Diego.',
      precio: 250000.00,
      imagen:  '/gato_grande.png' ,   
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Gato Remera',
      descripcion: 'Es un gato real, lo juro.',
      precio: 49.99,
      imagen: '/gato_remera.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Gato Pelao',
      descripcion: 'Esta pelao jaja gato tonto.',
      precio: 999.99,
      imagen: '/gato_horripilante.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Gato Alienigena',
      descripcion: 'Genera una minuscula cantidad de radiación en su cuerpo.',
      precio: 49.99,
      imagen: '/gato_alien.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Rabo de Gato',
      descripcion: 'Hace "guau".',
      precio: 49.99,
      imagen: '/gato_de_rabo.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
