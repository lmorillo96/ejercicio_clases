class Estudiante {
  constructor(nombre, asignatura) {
    this.nombre = nombre;
    this.asignatura = asignatura;
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignatura: this.asignatura,
    };
  }
}

const nuevo_estudiante = new Estudiante("Leandro", "HTML, CSS y JS");
console.log(nuevo_estudiante);
