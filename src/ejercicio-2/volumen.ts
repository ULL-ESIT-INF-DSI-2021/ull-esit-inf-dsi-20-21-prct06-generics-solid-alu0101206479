import {isConvertible} from "./isconvertible";

export class Volumen implements isConvertible<string> {
  constructor(public cantidad: number, public unidad: string) {}

  conversor(uResultado: string) {
    if (this.unidad == "Litros" && uResultado == "Mililitros") {
      this.cantidad = this.cantidad * 1000;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Mililitros" && uResultado == "Litros") {
        this.cantidad = this.cantidad / 1000;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
