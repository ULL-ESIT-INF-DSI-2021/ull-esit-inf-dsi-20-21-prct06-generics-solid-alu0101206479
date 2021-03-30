import {Figther} from "./figther";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const Yoda = new StarWars("Yoda", 30, 1, "Verde", [110, 70, 150, 130], "Do. Or do not. There is no try");
 * ```
 * Clase que representa un personaje del universo Star Wars, clase hija de la clase Figther
 */
export class StarWars extends Figther {
  /**
   * // Ejemplo de llamada
   *  const Yoda = new StarWars("Yoda", 30, 1, "Verde", [110, 70, 150, 130], "Do. Or do not. There is no try");
   * ```
   * Constructor de la clase StarWars, se heredan con super todos los atributos menos colorSable, que es el atributo propio de la clase
   * @param nombre Nombre del personaje
   * @param peso Peso del personaje
   * @param altura Altura del personaje
   * @param colorSable Color del sable del personaje, puede ser azul, rojo o verde
   * @param estadisticasBasicas Estadisticas básicas del personaje (Ataque, Defensa, Velocidad y HP)
   * @param catchingPhrase Catching Phrase del personaje
   */
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
