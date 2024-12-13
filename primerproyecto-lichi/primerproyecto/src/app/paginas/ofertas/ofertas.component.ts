import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Gato Rey de las Maldiciones',
      descripcion: 'Se comió un dedo del dueño anterior y quedó asi.',
      precio: 250.00,
      imagen: '/gatinho_sukuna.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Gato en una Taza',
      descripcion: 'Su alma está atrapada en esa taza..',
      precio: 29.99,
      imagen: '/gato_taza.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Neko Arc',
      descripcion: 'Que alguien se lo lleve por favor.',
      precio: 0.00,
      imagen: '/gato_boronchi.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Gato Común',
      descripcion: 'No se por qué nadie quiere llevarse este gato.',
      precio: 100.00,
      imagen: '/gato_probablemente.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Gato Pan',
      descripcion: 'Lo dejaron mucho tiempo afuera y se secó, por eso el precio rebajado.',
      precio: 10.00,
      imagen: '/gato_pan.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Gato Naranja',
      descripcion: 'El portador de la ira, el caos y la destrucción sobre la tierra y todos los seres que la habitan.',
      precio: -1.00,
      imagen: '/gato_apocaliptico.png', // Asegúrate de que esta ruta sea correcta
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
