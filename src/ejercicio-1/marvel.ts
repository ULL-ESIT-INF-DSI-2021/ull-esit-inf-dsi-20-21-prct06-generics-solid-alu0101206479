import {Figther} from "./figther";

export class Marvel extends Figther {
  constructor(nombre: string, peso: number, altura: number, private tipo: "Malvado" | "Superheroe", estadisticasBasicas: number[]) {
    super(nombre, peso, altura, estadisticasBasicas);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  marvel.getTipo();
   * ```
   * Función que retorna el tipo del personaje de Marvel
   * @return El atributo tipo
   */
  public getTipo() {
    return this.tipo;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  marvel.setTipo("Fuego");
   * ```
   * Función para cambiar el tipo del del personaje de Marvel
   * @param tipo El nuevo tipo del del personaje de Marvel
   */
  public setTipo(tipo: "Malvado" | "Superheroe") {
    this.tipo = tipo;
  }
}
