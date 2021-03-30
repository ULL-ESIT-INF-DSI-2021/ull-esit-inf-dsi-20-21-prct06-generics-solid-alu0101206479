import {isConvertible} from "./isconvertible";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const temperatura = new Temperatura(74, "Grados Fahrenheit");
 * ```
 * Clase que representa una medida de temperatura y a través de la cual se puede hacer la conversión de unidades de temperatura, clase hija de la clase isConvertible
 */
export class Temperatura implements isConvertible<string> {
  /**
   * // Ejemplo de llamada
   *  const temperatura = new Temperatura(74, "Grados Fahrenheit");
   * ```
   * Constructor de la clase Temperatura
   * @param cantidad Cantidad de temperatura
   * @param unidad Unidad en la que esta medida la temperatura
   */
  constructor(public cantidad: number, public unidad: string) {}

  /**
   * // Ejemplo de llamada
   *  temperatura.conversor("Grados Celsius");
   * ```
   * Función que realiza la conversión entre unidades
   * @param uResultado Unidad a la que se quiere hacer la conversión (En este caso entre Grados Celsius y Grados Fahrenheit)
   */
  conversor(uResultado: string) {
    if (this.unidad == "Grados Celsius" && uResultado == "Grados Fahrenheit") {
      this.cantidad = (this.cantidad * 9/5) + 32;
      this.unidad = uResultado;
    } else {
      if (this.unidad == "Grados Fahrenheit" && uResultado == "Grados Celsius") {
        this.cantidad = (this.cantidad - 32) * 5/9;
        this.unidad = uResultado;
      } else {
        console.log("¡ERROR Unidad no comprendida entre las posibles del conversor");
      }
    }
  }
}
