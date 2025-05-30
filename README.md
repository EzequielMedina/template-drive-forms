# Formularios Template-Driven en Angular - Registro de Autos

Este proyecto demuestra la implementación de un formulario basado en plantillas (Template-Driven Forms) en Angular para el registro de autos, incluyendo validaciones, grupos anidados y comunicación con una API.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Guía Paso a Paso

### 1. Crear el Proyecto

```bash
# Crear nuevo proyecto
ng new formdriven

# Durante la creación, responder a las preguntas:
# - ¿Deseas agregar Angular routing? → No
# - ¿Qué formato de hoja de estilos deseas usar? → CSS
```

### 2. Configurar el Entorno

```bash
# Navegar al directorio del proyecto
cd formdriven

# Instalar dependencias
npm install
```

### 3. Crear el Servicio

1. Generar el servicio:
```bash
ng generate service services/car
```

2. Implementar el servicio (`src/app/services/car.service.ts`):
   - Definir las interfaces `CarDetails` y `Car`
   - Implementar los métodos `getCarTypes()` y `saveCar()`
   - Usar datos estáticos para el ejemplo

### 4. Crear el Componente del Formulario

1. Generar el componente:
```bash
ng generate component car-form
```

2. Configurar el componente (`src/app/car-form/car-form.component.ts`):
   - Importar los módulos necesarios
   - Definir las propiedades y arrays estáticos
   - Implementar la lógica del formulario
   - Agregar el método `resetForm()`

### 5. Implementar el Template

1. Crear el formulario (`src/app/car-form/car-form.component.html`):
   - Estructurar el formulario en secciones
   - Agregar los campos con sus validaciones
   - Implementar los mensajes de error
   - Agregar los grupos anidados

2. Agregar los estilos (`src/app/car-form/car-form.component.css`):
   - Estilizar el contenedor principal
   - Diseñar los campos de entrada
   - Estilizar los mensajes de error
   - Hacer el diseño responsive

### 6. Configurar el Módulo Principal

1. Actualizar `app.config.ts`:
   - Importar `HttpClientModule`
   - Importar `FormsModule`
   - Importar `CommonModule`

2. Actualizar `app.component.ts`:
   - Importar el componente del formulario
   - Configurar el layout principal

### 7. Implementar las Validaciones

1. Validaciones de campos requeridos:
   - Agregar el atributo `required`
   - Implementar mensajes de error

2. Validaciones de formato:
   - Email con patrón específico
   - Números con rangos válidos
   - Selecciones obligatorias

3. Validaciones personalizadas:
   - Año entre 1900 y 2024
   - Precio mayor que 0
   - Formato de email válido

### 8. Implementar la Lógica del Formulario

1. Manejo de envío:
   - Implementar `onSubmit()`
   - Validar datos antes de enviar
   - Manejar respuesta del servicio

2. Limpieza del formulario:
   - Implementar `resetForm()`
   - Limpiar después de envío exitoso
   - Resetear validaciones

### 9. Probar el Formulario

1. Iniciar el servidor:
```bash
ng serve
```

2. Probar funcionalidades:
   - Validaciones de campos
   - Envío del formulario
   - Limpieza después del envío
   - Mensajes de error

## Estructura del Proyecto

```
src/
├── app/
│   ├── car-form/
│   │   ├── car-form.component.ts
│   │   ├── car-form.component.html
│   │   └── car-form.component.css
│   ├── services/
│   │   └── car.service.ts
│   ├── app.component.ts
│   └── app.config.ts
```

## Características Implementadas

1. **Formulario Template-Driven**:
   - Vinculación bidireccional con `ngModel`
   - Validaciones en tiempo real
   - Mensajes de error personalizados en español
   - Limpieza automática después del envío

2. **Grupos Anidados**:
   - Información básica del auto (incluyendo email)
   - Detalles del motor
   - Características adicionales

3. **Validaciones**:
   - Campos requeridos
   - Rangos numéricos
   - Selecciones obligatorias
   - Validación de email con formato específico

4. **Comunicación con API**:
   - Servicio HTTP para peticiones (simulado para el ejemplo)
   - Manejo de respuestas y errores
   - Tipos de datos tipados

5. **UI/UX**:
   - Diseño responsive
   - Feedback visual
   - Mensajes de error claros en español
   - Limpieza automática del formulario

## Ejecutar el Proyecto

```bash
# Iniciar el servidor de desarrollo
ng serve

# Abrir en el navegador
http://localhost:4200
```

## Notas Adicionales

- El proyecto usa una simulación de API para el ejemplo
- Los tipos de autos, motores y transmisiones están hardcodeados
- Se pueden agregar más validaciones según necesidades
- El formulario está completamente en español
- El formulario se limpia automáticamente después de un envío exitoso

## Mejoras Posibles

1. Implementar más validaciones personalizadas
2. Agregar más campos y características
3. Mejorar el manejo de errores
4. Implementar un sistema de notificaciones
5. Agregar pruebas unitarias y e2e
6. Conectar con una API real
7. Implementar un sistema de temas
8. Agregar animaciones
9. Implementar guardado automático
10. Agregar previsualización de datos
