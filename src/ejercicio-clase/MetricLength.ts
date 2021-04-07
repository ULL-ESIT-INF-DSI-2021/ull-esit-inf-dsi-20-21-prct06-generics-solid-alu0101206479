/**
 * Clase que representa una cantidad de longitud en el sistema métrico
 */
export class MetricLength {
  /**
   * Constructor de la clase MetricLength, se pasa como parametro la cantidad de longitud en centímetros
   * @param cantidad Cantidad de longitud en centímetros
   */
  constructor(private cantidad: number = 100) {}

  /**
   * Función que me devuelve la cantidad en centímetros
   * @returns El atributo cantidad, porque ya está en centímetros
   */
  getLongitudEnCentimetros() {
    return this.cantidad;
  }

  /**
   * Función que me devuelve la cantidad en metros
   * @returns El atributo cantidad/100, porque está seria la conversión de centímetros a metros
   */
  getLongitudEnMetros() {
    return this.cantidad/100;
  }

  /**
   * Función que me devuelve la cantidad en kilómetros
   * @returns El atributo cantidad/100, porque está seria la conversión de centímetros a kilómetros
   */
  getLongitudEnKilometros() {
    return this.cantidad/100000;
  }
}
