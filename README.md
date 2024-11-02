# Task Manager Application

## 📋 Descripción
Task Manager es una aplicación web moderna para la gestión de tareas, construida con React y siguiendo las mejores prácticas de arquitectura de software y patrones de diseño. Permite a los usuarios gestionar sus tareas diarias de manera eficiente y organizada.

## 🚀 Características Principales
- Crear, leer, actualizar y eliminar tareas (CRUD)
- Asignación automática de prioridades
- Validación de datos en múltiples niveles
- Interfaz de usuario moderna y responsiva
- Manejo robusto de errores
- Diseño modular y escalable

## 🛠️ Tecnologías Utilizadas
- **Frontend:** React.js, Tailwind CSS
- **Iconos:** Lucide React
- **API Mock:** JSONPlaceholder
- **Arquitectura:** MVC (Model-View-Controller)

## 🏗️ Estructura del Proyecto
```
src/
├── components/          # Componentes de React
│   ├── ErrorAlert.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── TaskManager.jsx
├── controller/         # Controladores
│   └── TaskController.js
├── service/           # Servicios
│   ├── ApiService.js
│   ├── TaskService.js
│   └── handlers/      # Manejadores
│       ├── BaseHandler.js
│       ├── PriorityHandler.js
│       └── ValidationHandler.js
└── dao/              # Data Access Objects
    └── TaskDAO.js
```

## 🎯 Patrones de Diseño Implementados
1. **MVC (Model-View-Controller)**
   - Separación clara de responsabilidades
   - Mejor mantenibilidad y escalabilidad

2. **Chain of Responsibility**
   - Procesamiento secuencial de tareas
   - Validación y enriquecimiento de datos

3. **Singleton**
   - Gestión eficiente de recursos
   - Punto único de acceso a servicios

4. **DAO (Data Access Object)**
   - Abstracción del acceso a datos
   - Independencia de la fuente de datos

## 🚦 Flujo de la Aplicación
1. El usuario interactúa con los componentes de React
2. Las acciones son capturadas por el TaskController
3. El controlador utiliza la cadena de responsabilidad para validar y procesar datos
4. Los servicios manejan la lógica de negocio
5. Los DAOs gestionan el acceso a datos
6. La respuesta fluye de vuelta a través de las capas hasta la UI

## 📥 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/username/task-manager.git

# Instalar dependencias
cd task-manager
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 💻 Uso
1. La página principal muestra la lista de tareas existentes
2. Use el formulario superior para agregar nuevas tareas
3. Cada tarea puede ser marcada como completada o eliminada
4. Los errores se muestran en la parte superior de la aplicación

## 🔧 Configuración
- El archivo `.env` debe contener la URL base de la API
- Las configuraciones adicionales se pueden ajustar en `config.js`



## 📝 Notas de Implementación
- Uso de Tailwind CSS para estilos consistentes
- Implementación de patrones de diseño modernos
- Manejo de errores en cada capa de la aplicación
- Código modular y reutilizable



## 👥 Autor
- [Ara Fernández](https://github.com/username)

