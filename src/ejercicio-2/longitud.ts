import {isConvertible} from "./isconvertible";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const longitud = new Longitud(74, "Centímetros");
 * ```
 * Clase que representa una medida de longitud y a través de la cual se puede hacer la conversión de unidades de longitud, clase hija de la clase isConvertible
 */
export class Longitud implements isConvertible<string> {
  /**
   * // Ejemplo de llamada
   *  const longitud = new Longitud(74, "Centímetros");
   * ```
   * Constructor de la clase Longitud
   * @param cantidad Cantidad de longitud
   * @param unidad Unidad en la que esta medida la longitud
   */
  constructor(public cantidad: number, public unidad: string) {}

  /**
   * // Ejemplo de llamada
   *  longitud.conversor("Metros");
   * ```
   * Función que realiza la conversión entre unidades
   * @param uResultado Unidad a la que se quiere hacer la conversión (En este caso entre Metros y Centímetros)
   */
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
