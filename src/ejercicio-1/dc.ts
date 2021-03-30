import {Figther} from "./figther";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const Batman = new DC("Batman", 90, 1.90, "Superheroe", [90, 85, 120, 160], "I'm the Goddamn Batman");
 * ```
 * Clase que representa un personaje del universo DC, clase hija de la clase Figther
 */
export class DC extends Figther {
  /**
   * // Ejemplo de llamada
   *  const Batman = new DC("Batman", 90, 1.90, "Superheroe", [90, 85, 120, 160], "I'm the Goddamn Batman");
   * ```
   * Constructor de la clase DC, se heredan con super todos los atributos menos tipo, que es el atributo propio de la clase
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
