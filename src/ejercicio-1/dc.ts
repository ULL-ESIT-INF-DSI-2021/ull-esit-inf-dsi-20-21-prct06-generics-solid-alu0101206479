import {Figther} from "./figther";

export class DC extends Figther {
  constructor(nombre: string, peso: number, altura: number, private tipo: "Malvado" | "Superheroe", estadisticasBasicas: number[]) {
    super(nombre, peso, altura, estadisticasBasicas);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  dc.getTipo();
   * ```
   * Función que retorna el tipo del personaje de DC
   * @return El atributo tipo
   */
  public getTipo() {
    return this.tipo;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  dc.setTipo("Malvado");
   * ```
   * Función para cambiar el tipo del personaje de DC
   * @param tipo El nuevo tipo del personaje de DC
   */
  public setTipo(tipo: "Malvado" | "Superheroe") {
    this.tipo = tipo;
  }
}
