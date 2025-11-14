let saldo = 0;
let opc;

do {
  console.log("\n  Cajero automatico  ");
  console.log("1. Depositar saldo");
  console.log("2. Retirar saldo");
  console.log("3. Mostrar saldo");
  console.log("4. Salir");

  opc = parseInt(prompt("Seleccione una de las opciones mostrada"));

  switch (opc) {
    case 1:
      let cantidad = parseFloat(prompt("Ingrese el saldo a depositar"));
      if (cantidad > 0) {
        saldo += cantidad;
        alert("Su deposito ha sido realizado con exito. Su saldo es: " + saldo);
      } else {
        alert("El deposito debe de ser mayor que 0");
      }
      break;

    case 2:
      let retiro = parseFloat(prompt("Ingrese la cantidad a retirar: "));
      if (retiro > 0) {
        if (saldo >= retiro) {
          saldo -= retiro;
          alert("Su retiro ha sido exitoso. Su saldo actual es: " + saldo);
        } else {
          alert("Saldo insuficiente para retirar");
        }
      }
      break;

    case 3:
      alert("Su saldo es: " + saldo);
      break;

    case 4:
      alert("Ha finalizado el sistema");
      break;

    default:
      alert("La opcion es invalida, ingrese una opcion valida");
  }
} while (opc != 4);
