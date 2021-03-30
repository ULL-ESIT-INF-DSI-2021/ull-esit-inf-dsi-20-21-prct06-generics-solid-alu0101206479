import {isConvertible} from "./isconvertible";

export class Velocidad implements isConvertible<string> {
  constructor(public cantidad: number, public unidad: string) {}

  conversor(uResultado: string) {
    if (this.unidad == "Millas/h" && uResultado == "Kilometros/h") {
      this.cantidad = this.cantidad * 1.609;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Kilometros/h" && uResultado == "Millas/h") {
        this.cantidad = this.cantidad / 1.609;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
