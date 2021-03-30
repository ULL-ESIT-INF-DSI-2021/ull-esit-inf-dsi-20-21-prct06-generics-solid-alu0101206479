import {isConvertible} from "./isconvertible";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const velocidad = new Velocidad(74, "Kilometros/h");
 * ```
 * Clase que representa una medida de velocidad y a través de la cual se puede hacer la conversión de unidades de velocidad, clase hija de la clase isConvertible
 */
export class Velocidad implements isConvertible<string> {
  /**
   * // Ejemplo de llamada
   *  const velocidad = new Velocidad(74, "Kilometros/h");
   * ```
   * Constructor de la clase Velocidad
   * @param cantidad Cantidad de velocidad
   * @param unidad Unidad en la que esta medida la velocidad
   */
  constructor(public cantidad: number, public unidad: string) {}

  /**
   * // Ejemplo de llamada
   *  velocidad.conversor("Millas/h");
   * ```
   * Función que realiza la conversión entre unidades
   * @param uResultado Unidad a la que se quiere hacer la conversión (En este caso entre Millas/h y Kilometros/h)
   */
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
