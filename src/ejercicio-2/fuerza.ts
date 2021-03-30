import {isConvertible} from "./isconvertible";

export class Fuerza implements isConvertible<string> {
  constructor(public cantidad: number, public unidad: string) {}

  conversor(uResultado: string) {
    if (this.unidad == "Kilopondios" && uResultado == "Newtons") {
      this.cantidad = this.cantidad * 9.807;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Newtons" && uResultado == "Kilopondios") {
        this.cantidad = this.cantidad / 9.807;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
