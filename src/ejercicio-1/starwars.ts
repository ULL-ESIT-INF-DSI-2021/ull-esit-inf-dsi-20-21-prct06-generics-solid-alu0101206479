import {Figther} from "./figther";

export class StarWars extends Figther {
  constructor(nombre: string, peso: number, altura: number, private colorSable: "Azul" | "Rojo" | "Verde", estadisticasBasicas: number[], catchingPhrase: string) {
    super(nombre, peso, altura, estadisticasBasicas, catchingPhrase);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  starwars.getColorSable();
   * ```
   * Función que retorna el color del sable del personaje de Star Wars
   * @return El atributo color del sable
   */
  public getColorSable() {
    return this.colorSable;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  starwars.setColorSable("Rojo");
   * ```
   * Función para cambiar el color del sable del personaje de Star Wars
   * @param tipo El nuevo color del sable del personaje de Star Wars
   */
  public setTipo(colorSable: "Azul" | "Rojo" | "Verde") {
    this.colorSable = colorSable;
  }
}
