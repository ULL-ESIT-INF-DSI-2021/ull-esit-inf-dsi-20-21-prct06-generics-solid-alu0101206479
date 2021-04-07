/**
 * Clase que representa una cantidad de Masa
 */
export class ImperialMass {
  private cantidad: number
  /**
   * Constructor de la clase ImperialMass vacío
   */
  constructor() {}

  /**
   * Función que me devuelve la cantidad en onzas
   * @returns El atributo cantidad, porque ya está en onzas
   */
  getMasaEnOnzas() {
    return this.cantidad;
  }

  /**
   * Función que me almacena una cantidad de onzas
   * @param cantidad Cantidad de longitud en yardas
   */
  setOnzas(cantidad: number) {
    this.cantidad = cantidad;
  }

  /**
   * Función que me devuelve la cantidad en libras
   * @returns El atributo cantidad/16, porque está seria la conversión de onzas a libras
   */
  getMasaEnLibras() {
    return this.cantidad/16;
  }

  /**
  * Función que me almacena una cantidad de libras en onzas
  * @param cantidad Cantidad de longitud en libras
  */
  setLibras(cantidad: number) {
    this.cantidad = cantidad*16;
  }

  /**
   * Función que me devuelve la cantidad en piedras
   * @returns El atributo cantidad/224, porque está seria la conversión de onzas a piedras
   */
  getMasaEnPiedras() {
    return this.cantidad/224;
  }

  /**
  * Función que me almacena una cantidad de piedras en onzas
  * @param cantidad Cantidad de longitud en piedras
  */
  setPiedras(cantidad: number) {
    this.cantidad = cantidad*224;
  }

  /**
   * Función que me devuelve la cantidad en centenas
   * @returns El atributo cantidad/1792, porque está seria la conversión de onzas a centenas
   */
  getMasaEnCentenas() {
    return this.cantidad/1792;
  }

  /**
  * Función que me almacena una cantidad de centenas en onzas
  * @param cantidad Cantidad de longitud en centenas
  */
  setCentenas(cantidad: number) {
    this.cantidad = cantidad*1792;
  }

  /**
   * Función que me devuelve la cantidad en toneladas
   * @returns El atributo cantidad/35274, porque está seria la conversión de onzas a toneladas
   */
  getMasaEnToneladas() {
    return this.cantidad/35274;
  }

  /**
  * Función que me almacena una cantidad de toneladas en onzas
  * @param cantidad Cantidad de longitud en toneladas
  */
  setToneladas(cantidad: number) {
    this.cantidad = cantidad*35274;
  }
}
