import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Interfaz que define la estructura de los detalles del motor y características
export interface CarDetails {
  engine: {
    type: string;        // Tipo de motor (Gasolina, Diesel, etc.)
    horsepower: number;  // Caballos de fuerza
    transmission: string; // Tipo de transmisión
  };
  features: {
    airConditioning: boolean; // Aire acondicionado
    bluetooth: boolean;       // Bluetooth
    navigation: boolean;      // Sistema de navegación
    sunroof: boolean;        // Techo solar
  };
}

// Interfaz principal que define la estructura completa de un auto
export interface Car {
  brand: string;    // Marca del auto
  model: string;    // Modelo
  year: number;     // Año
  type: string;     // Tipo (Sedan, SUV, etc.)
  color: string;    // Color
  price: number;    // Precio
  email: string;    // Email del propietario
  details: CarDetails; // Detalles del motor y características
}

export interface CarType  {
  id: string;       // Identificador único del tipo de auto
  name: string;     // Nombre del tipo de auto (Sedán, SUV, etc.)
}

// Decorador que marca esta clase como un servicio inyectable
@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación
})
export class CarService {
  // URL base de la API (debe ser reemplazada con la URL real)
  private apiUrl = 'https://6838e82d6561b8d882ae8fc0.mockapi.io/api/v1';

  // Datos estáticos para el ejemplo

  // Constructor que inyecta el servicio HttpClient
  constructor(private http: HttpClient) {}

  // Método para obtener los tipos de autos disponibles
  // Retorna un Observable que emite un array de strings
  getCarTypes(): Observable<CarType[]> {
    // En un entorno real, esto haría una petición HTTP
     return this.http.get<CarType[]>(`${this.apiUrl}/types`);

  }

  // Método para guardar un nuevo auto
  // Recibe un objeto Car y retorna un Observable que emite el auto guardado
  saveCar(car: Car): Observable<Car> {
    // En un entorno real, esto haría una petición HTTP POST


    return this.http.post<Car>(`${this.apiUrl}/cars`, car);

  }
}
