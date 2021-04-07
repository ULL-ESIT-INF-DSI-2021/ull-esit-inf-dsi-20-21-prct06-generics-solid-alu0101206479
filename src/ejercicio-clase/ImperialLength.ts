/**
 * Clase que representa una cantidad de longitud
 */
export class ImperialLength {
  private cantidad: number
  /**
   * Constructor de la clase ImperialLength vacío
   */
  constructor() {}

  /**
   * Función que me devuelve la cantidad en pulgadas
   * @returns El atributo cantidad, porque ya está en pulgadas
   */
  getLongitudEnPulgadas() {
    return this.cantidad;
  }

  /**
   * FUnción que me almacena una cantidad de pies en pulgadas
   * @param cantidad Cantidad de longitud en pies
   */
  setPulgadas(cantidad: number) {
    this.cantidad = cantidad;
  }

  /**
   * Función que me devuelve la cantidad en pies
   * @returns El atributo cantidad/12, porque está seria la conversión de pulgadas a pies
   */
  getLongitudEnPies() {
    return this.cantidad/12;
  }

  /**
   * FUnción que me almacena una cantidad de pies en pulgadas
   * @param cantidad Cantidad de longitud en pies
   */
  setPies(cantidad: number) {
    this.cantidad = cantidad*12;
  }

  /**
   * Función que me devuelve la cantidad en yardas
   * @returns El atributo cantidad/36, porque está seria la conversión de pulgadas a yardas
   */
  getLongitudEnYardas() {
    return this.cantidad/36;
  }

  /**
   * FUnción que me almacena una cantidad de yardas en pulgadas
   * @param cantidad Cantidad de longitud en yardas
   */
  setYardas(cantidad: number) {
    this.cantidad = cantidad*36;
  }

  /**
   * Función que me devuelve la cantidad en millas
   * @returns El atributo cantidad/63360, porque está seria la conversión de pulgadas a millas
   */
  getLongitudEnMillas() {
    return this.cantidad/63360;
  }

  /**
   * FUnción que me almacena una cantidad de millas en pulgadas
   * @param cantidad Cantidad de longitud en millas
   */
  setMillas(cantidad: number) {
    this.cantidad = cantidad*63360
    ;
  }
}
