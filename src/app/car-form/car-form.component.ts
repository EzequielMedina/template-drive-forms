import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CarService, Car, CarDetails, CarType } from '../services/car.service';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  @ViewChild('carForm') carForm!: NgForm;

  // Arrays para las opciones de selección
  carTypes: CarType[] = [];
  engineTypes: string[] = ['Gasolina', 'Diesel', 'Híbrido', 'Eléctrico'];
  transmissionTypes: string[] = ['Automática', 'Manual', 'CVT'];

  // Objeto para almacenar los datos del formulario
  car: Car = {
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    type: '',
    color: '',
    price: 0,
    email: '',
    details: {
      engine: {
        type: '',
        horsepower: 0,
        transmission: ''
      },
      features: {
        airConditioning: false,
        bluetooth: false,
        navigation: false,
        sunroof: false
      }
    }
  };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Aquí podríamos cargar los tipos de autos desde el servicio
    this.carService.getCarTypes().subscribe(types => this.carTypes = types);
  }

  // Método para resetear el formulario a sus valores iniciales
  resetForm(): void {
    this.car = {
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      type: '',
      color: '',
      price: 0,
      email: '',
      details: {
        engine: {
          type: '',
          horsepower: 0,
          transmission: ''
        },
        features: {
          airConditioning: false,
          bluetooth: false,
          navigation: false,
          sunroof: false
        }
      }
    };
    this.carForm.resetForm();
  }

  onSubmit(): void {
    if (this.car) {
      this.carService.saveCar(this.car).subscribe({
        next: (response) => {
          console.log('Auto guardado exitosamente:', response);
          // Limpiar el formulario después de un envío exitoso
          this.resetForm();
          // Aquí podrías mostrar un mensaje de éxito o redirigir
        },
        error: (error) => {
          console.error('Error al guardar el auto:', error);
          // Aquí podrías mostrar un mensaje de error
        }
      });
    }
  }
}
