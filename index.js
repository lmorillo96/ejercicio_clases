class Estudiante {
  constructor(nombre, asignatura) {
    this.nombre = nombre;
    this.asignatura = asignatura;
  }

  obtenDatos() {
    console.log(`Hola, mi nombre es ${this.nombre} y estudio ${this.asignatura}`);
  }
}

const nuevo_estudiante = new Estudiante("Leandro", "HTML, CSS y JS");
console.log(nuevo_estudiante)
nuevo_estudiante.obtenDatos();