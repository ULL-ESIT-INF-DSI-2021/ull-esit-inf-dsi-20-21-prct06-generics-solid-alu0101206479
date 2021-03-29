import {Figther} from "./figther";

export class Pokemon extends Figther {
  constructor(nombre: string, peso: number, altura: number, private tipo: string, estadisticasBasicas: number[], catchingPhrase: string) {
    super(nombre, peso, altura, estadisticasBasicas, catchingPhrase);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.getTipo();
   * ```
   * Función que retorna el tipo del Pokemon
   * @return El atributo tipo
   */
  public getTipo() {
    return this.tipo;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.setTipo("Fuego");
   * ```
   * Función para cambiar el tipo del Pokemon
   * @param tipo El nuevo tipo del Pokemon
   */
  public setTipo(tipo: string) {
    this.tipo = tipo;
  }
}
