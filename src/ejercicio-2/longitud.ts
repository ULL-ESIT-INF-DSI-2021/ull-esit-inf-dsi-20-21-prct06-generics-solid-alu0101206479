import {isConvertible} from "./isconvertible";

export class Longitud implements isConvertible<string> {
  constructor(public cantidad: number, public unidad: string) {}

  conversor(uResultado: string) {
    if (this.unidad == "Metros" && uResultado == "Centímetros") {
      this.cantidad = this.cantidad * 100;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Centímetros" && uResultado == "Metros") {
        this.cantidad = this.cantidad / 100;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
