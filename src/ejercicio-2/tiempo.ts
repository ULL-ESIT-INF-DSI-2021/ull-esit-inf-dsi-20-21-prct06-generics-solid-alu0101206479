import {isConvertible} from "./isconvertible";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const tiempo = new Tiempo(74, "Minutos");
 * ```
 * Clase que representa una medida de tiempo y a través de la cual se puede hacer la conversión de unidades de tiempo, clase hija de la clase isConvertible
 */
export class Tiempo implements isConvertible<string> {
  /**
   * // Ejemplo de llamada
   *  const tiempo = new Tiempo(74, "Minutos");
   * ```
   * Constructor de la clase Tiempo
   * @param cantidad Cantidad de tiempo
   * @param unidad Unidad en la que esta medido el tiempo
   */
  constructor(public cantidad: number, public unidad: string) {}

  /**
   * // Ejemplo de llamada
   *  tiempo.conversor("Horas");
   * ```
   * Función que realiza la conversión entre unidades
   * @param uResultado Unidad a la que se quiere hacer la conversión (En este caso entre Horas y Minutos)
   */
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
