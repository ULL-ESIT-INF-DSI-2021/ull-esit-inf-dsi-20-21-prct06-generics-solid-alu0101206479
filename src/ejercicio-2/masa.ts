import {isConvertible} from "./isconvertible";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const masa = new Masa(74, "Gramos");
 * ```
 * Clase que representa una medida de masa y a través de la cual se puede hacer la conversión de unidades de masa, clase hija de la clase isConvertible
 */
export class Masa implements isConvertible<string> {
  /**
   * // Ejemplo de llamada
   *  const masa = new Masa(74, "Gramos");
   * ```
   * Constructor de la clase Masa
   * @param cantidad Cantidad de masa
   * @param unidad Unidad en la que esta medida la masa
   */
  constructor(public cantidad: number, public unidad: string) {}

  /**
   * // Ejemplo de llamada
   *  masa.conversor("Kilogramos");
   * ```
   * Función que realiza la conversión entre unidades
   * @param uResultado Unidad a la que se quiere hacer la conversión (En este caso entre Kilogramos y Gramos)
   */
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
