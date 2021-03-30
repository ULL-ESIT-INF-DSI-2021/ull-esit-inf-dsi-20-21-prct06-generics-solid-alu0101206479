import {isConvertible} from "./isconvertible";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const fuerza = new Fuerza(74, "Newtons");
 * ```
 * Clase que representa una medida de fuerza y a través de la cual se puede hacer la conversión de unidades de fuerza, clase hija de la clase isConvertible
 */
export class Fuerza implements isConvertible<string> {
  /**
   * // Ejemplo de llamada
   *  const fuerza = new Fuerza(74, "Newtons");
   * ```
   * Constructor de la clase Fuerza
   * @param cantidad Cantidad de fuerza
   * @param unidad Unidad en la que esta medida la fuerza
   */
  constructor(public cantidad: number, public unidad: string) {}

  /**
   * // Ejemplo de llamada
   *  fuerza.conversor("Kilopondios");
   * ```
   * Función que realiza la conversión entre unidades
   * @param uResultado Unidad a la que se quiere hacer la conversión (En este caso entre Kilopondios y Newtons)
   */
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
