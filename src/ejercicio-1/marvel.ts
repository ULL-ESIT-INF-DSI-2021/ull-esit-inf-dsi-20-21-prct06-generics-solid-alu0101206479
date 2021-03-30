import {Figther} from "./figther";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const Ironman = new Marvel("Iron Man", 110, 1.92, "Superheroe", [85, 80, 110, 150], "I am Iron Man");
 * ```
 * Clase que representa un personaje del universo Marvel, clase hija de la clase Figther
 */
export class Marvel extends Figther {
  /**
   * // Ejemplo de llamada
   *  const Ironman = new Marvel("Iron Man", 110, 1.92, "Superheroe", [85, 80, 110, 150], "I am Iron Man");
   * ```
   * Constructor de la clase Marvel, se heredan con super todos los atributos menos tipo, que es el atributo propio de la clase
   * @param nombre Nombre del personaje
   * @param peso Peso del personaje
   * @param altura Altura del personaje
   * @param tipo Tipo del personaje, puede ser malvado o superhéroe
   * @param estadisticasBasicas Estadisticas básicas del personaje (Ataque, Defensa, Velocidad y HP)
   * @param catchingPhrase Catching Phrase del personaje
   */
  constructor(nombre: string, peso: number, altura: number, private tipo: "Malvado" | "Superheroe", estadisticasBasicas: number[], catchingPhrase: string) {
    super(nombre, peso, altura, estadisticasBasicas, catchingPhrase);
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
