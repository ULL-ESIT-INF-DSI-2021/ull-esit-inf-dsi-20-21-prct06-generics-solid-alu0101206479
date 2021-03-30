import {isConvertible} from "./isconvertible";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const volumen = new Volumen(74, "Mililitros");
 * ```
 * Clase que representa una medida de volumen y a través de la cual se puede hacer la conversión de unidades de volumen, clase hija de la clase isConvertible
 */
export class Volumen implements isConvertible<string> {
  /**
   * // Ejemplo de llamada
   *  const volumen = new Volumen(74, "Mililitros");
   * ```
   * Constructor de la clase Volumen
   * @param cantidad Cantidad de volumen
   * @param unidad Unidad en la que esta medido el volumen
   */
  constructor(public cantidad: number, public unidad: string) {}

  /**
   * // Ejemplo de llamada
   *  volumen.conversor("Litros");
   * ```
   * Función que realiza la conversión entre unidades
   * @param uResultado Unidad a la que se quiere hacer la conversión (En este caso entre Litros y Mililitros)
   */
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
