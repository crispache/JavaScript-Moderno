// Class declaration
class Task {

    // Constructor
    constructor(title) {
        if(!title) throw new Error('We need a title !!')
        this.title = title;
        this.completed = false;
    }
} 

// Creamos una instancia de Task
const tarea = new Task("Aprender JavaScript");
console.log(tarea);
console.log(tarea instanceof Task); // devuelve true





// Nueva forma de definir una clase
const TasksList = class {
    constructor() {
        this.tasks = [
            {title: 'Aprender Firebase', completed: false},
            {title: 'Aprender CSS', completed: true},
            {title: 'Aprender HTML', completed: false}
        ]
    }


    // Getters (usar la sintaxis se spread(...) porque sino modifica el estado de tasks)
    get uncompleted() {
        return [...this.tasks].filter(task => !task.completed);
    }

    get completed() {
        return [...this.tasks].filter(task => task.completed);
    }



    // Setters
    set addTask(task) {
        this.tasks.push(task);
    }


    // Métodos
    search(query) {
        return this.tasks.find(task => task.title.includes(query))
    }

    removeTask() {
        this.tasks.splice(index,1)
    }


    // Método estático
    static normaliceTask(title){
        title = title.trim();
        return title.charAt(0).toUpperCase() + title.substring(1);
    } 

}

console.log(TasksList);

// Instancia de TasksList
const tareas = new TasksList();
console.log(tareas.uncompleted); // propiedad

const tarea2 = new Task('Aprender Vuex');

// de esta forma, insertas Task {title: 'Aprender...', completed...} 
// tareas.addTask = tarea2; 
// para insertarlo como un objeto, usamos spread, // ahora sería así {title: 'Aprender...', completed...}  sin el Task delante
tareas.addTask = {...tarea2};
console.log(tareas.uncompleted);


console.log(tareas.search('Vuex'))


console.log(TasksList.normaliceTask('    esto es una prueba')) // Devuelve -> Esto es una prueba
console.log(tareas.normaliceTask('    esto es una prueba')) // Devuelve tareas.normaliceTask is not a function
console.log(tareas.constructor.normaliceTask(('    esto es una prueba'))); // Devuelve -> Esto es una prueba




// Subclassing
// Hereda todos los métodos
class Reminder extends Task {
    constructor(title, date) {
        super(title);
        this.date = date;
    }

    get duration() {
        return `${this.title} finaliza el ${this.date}`;
    }
}


const producir = new Reminder('Producir lección eterna', '8 de Febrero de 2020');
console.log(producir.duration);