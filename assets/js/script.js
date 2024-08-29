// función constructora Consultorio
function Consultorio(nombre, Paciente) {
  this.nombre = function () {
    return nombre;
  };
  this.Paciente = function () {
    return Paciente || [];
  };
}

// getters Consultorio
Consultorio.prototype.getNombre = function () {
  return this.nombre();
};
// setters Consultorio
Consultorio.prototype.setPaciente = function (nuevo_nombre) {
  this.nombre = function () {
    return nuevo_nombre;
  };
};
// función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = function () {
    return nombre;
  };
  this.edad = function () {
    return edad;
  };
  this.rut = function () {
    return rut;
  };
  this.diagnostico = function () {
    return diagnostico;
  };
}
// getters Paciente
Paciente.prototype.getNombre = function () {
  return this.nombre();
};

Paciente.prototype.getEdad = function () {
  return this.edad();
};

Paciente.prototype.getRut = function () {
  return this.rut();
};

Paciente.prototype.getDiagnostico = function () {
  return this.diagnostico();
};

// setters Paciente
Paciente.prototype.setNombre = function (nuevo_nombre) {
  return this.nombre();
};

Paciente.prototype.setEdad = function (nueva_edad) {
  return this.edad();
};

Paciente.prototype.setRut = function (nuevo_rut) {
  return this.rut();
};

Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
  return this.diagnostico();
};

// Crear un método mediante la propiedad prototype que permita buscar los datos de
// los usuarios por nombre y otro método que permita mostrar todos los datos de los
// usuarios registrados.

Consultorio.prototype.agregarPaciente = function (nuevo_paciente) {
  this.Paciente.push(Paciente);
};

Consultorio.prototype.getPacientes = function () {
  this.Paciente().forEach(function (dato, indice) {
    console.log("Paciente: " + indice);
    console.log("Nombre: " + dato.getNombre());
    console.log("Edad: " + dato.getEdad());
    console.log("Rut: " + dato.getRut());
    console.log("Diagnostico: " + dato.getDiagnostico());
  });
};



Consultorio.prototype.getPacientePorNombre = function (BusquedaNombre) {
  this.Paciente().forEach(function (dato, indice) {
    if (dato.getNombre() == BusquedaNombre) {
      console.log("Paciente: " + indice);
      console.log("Nombre: " + dato.getNombre());
      console.log("Edad: " + dato.getEdad());
      console.log("Rut: " + dato.getRut());
      console.log("Diagnostico: " + dato.getDiagnostico());
    }
  });
};

var p1 = new Paciente("Juan Diaz", 25, "12345678-9", "Neumonia");
var p2 = new Paciente("Pablo Ruiz", 30, "12345678-9", "cancer");
var p3 = new Paciente("Maria Riquelme", 26, "134256526-2", "Diabetes Tipo2")
var p4 = new Paciente("Pedro Lopez", 40, "12345678-9", "hipertensión");

var consultorioLosAndes = new Consultorio("los Andes", [p1, p2]);
var consultorioConcepcion = new Consultorio("Concepcion", [p3, p4]);

console.log(p1.getNombre());
console.log(p2.getEdad());

p2.setDiagnostico("Covid");
console.log(p2.getDiagnostico());
console.log (consultorioLosAndes.getNombre());

consultorioLosAndes.getPacientePorNombre("Pablo Ruiz");
consultorioConcepcion.getPacientePorNombre("Maria Riquelme");





