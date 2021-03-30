import {isConvertible} from "./isconvertible";

export class Masa implements isConvertible<string> {
  constructor(public cantidad: number, public unidad: string) {}

  conversor(uResultado: string) {
    if (this.unidad == "Kilogramos" && uResultado == "Gramos") {
      this.cantidad = this.cantidad * 1000;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Gramos" && uResultado == "Kilogramos") {
        this.cantidad = this.cantidad / 1000;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
