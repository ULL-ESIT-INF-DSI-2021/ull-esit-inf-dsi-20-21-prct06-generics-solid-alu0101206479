import {Figther} from "./figther";

export class DragonBall extends Figther {
  constructor(nombre: string, peso: number, altura: number, private ki: number, estadisticasBasicas: number[], catchingPhrase: string) {
    super(nombre, peso, altura, estadisticasBasicas, catchingPhrase);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  dc.getTipo();
   * ```
   * Función que retorna el ki del personaje de Dragon Ball
   * @return El atributo ki
   */
  public getKi() {
    return this.ki;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  dc.setTipo(78);
   * ```
   * Función para cambiar el ki del personaje de Dragon Ball
   * @param ki El nuevo ki del personaje de Dragon Ball
   */
  public setTipo(ki: number) {
    this.ki = ki;
  }
}
