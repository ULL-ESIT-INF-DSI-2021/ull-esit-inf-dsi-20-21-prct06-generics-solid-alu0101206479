import {isConvertible} from "./isconvertible";

export class Tiempo implements isConvertible<string> {
  constructor(public cantidad: number, public unidad: string) {}

  conversor(uResultado: string) {
    if (this.unidad == "Horas" && uResultado == "Minutos") {
      this.cantidad = this.cantidad * 60;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Minutos" && uResultado == "Horas") {
        this.cantidad = this.cantidad / 60;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
