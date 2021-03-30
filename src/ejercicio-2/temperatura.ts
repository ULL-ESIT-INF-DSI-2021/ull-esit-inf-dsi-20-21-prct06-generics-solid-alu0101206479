import {isConvertible} from "./isconvertible";

export class Temperatura implements isConvertible<string> {
  constructor(public cantidad: number, public unidad: string) {}

  conversor(uResultado: string) {
    if (this.unidad == "Grados Celsius" && uResultado == "Grados Fahrenheit") {
      this.cantidad = (this.cantidad * 9/5) + 32;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Grados Fahrenheit" && uResultado == "Grados Celsius") {
        this.cantidad = (this.cantidad - 32) * 5/9;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
