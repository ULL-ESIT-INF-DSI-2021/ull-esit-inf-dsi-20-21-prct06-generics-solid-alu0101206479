/**
 * Clase que representa una cantidad de longitud
 */
export class ImperialLength {
  /**
   * Constructor de la clase ImperialLength, se pasa como parametro al cantidad de longitud en pulgadas
   * @param cantidad Cantidad de longitud en pulgadas
   */
  constructor(private cantidad: number) {}

  /**
   * Función que me devuelve la cantidad en pulgadas
   * @returns El atributo cantidad, porque ya está en pulgadas
   */
  getLongitudEnPulgadas() {
    return this.cantidad;
  }

  /**
   * Función que me devuelve la cantidad en pies
   * @returns El atributo cantidad/12, porque está seria la conversión de pulgadas a pies
   */
  getLongitudEnPies() {
    return this.cantidad/12;
  }

  /**
   * Función que me devuelve la cantidad en yardas
   * @returns El atributo cantidad/36, porque está seria la conversión de pulgadas a yardas
   */
  getLongitudEnYardas() {
    return this.cantidad/36;
  }

  /**
   * Función que me devuelve la cantidad en millas
   * @returns El atributo cantidad/63360, porque está seria la conversión de pulgadas a millas
   */
  getLongitudEnMillas() {
    return this.cantidad/63360;
  }
}
