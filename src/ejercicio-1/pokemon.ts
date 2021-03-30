import {Figther} from "./figther";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80], "SAURRR!");
 * ```
 * Clase que representa un personaje del universo Pokemon, clase hija de la clase Figther
 */
export class Pokemon extends Figther {
  /**
   * // Ejemplo de llamada
   *  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80], "SAURRR!");
   * ```
   * Constructor de la clase Pokemon, se heredan con super todos los atributos menos tipo, que es el atributo propio de la clase
   * @param nombre Nombre del personaje
   * @param peso Peso del personaje
   * @param altura Altura del personaje
   * @param tipo Tipo del Pokemon, puede ser Fuego, Agua, Planta o Eléctrico
   * @param estadisticasBasicas Estadisticas básicas del personaje (Ataque, Defensa, Velocidad y HP)
   * @param catchingPhrase Catching Phrase del personaje
   */
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
