import {Figther} from "./figther";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const Goku = new DragonBall("Goku", 93, 1.85, 85, [105, 105, 140, 150], "Yo! I'm Goku!");
 * ```
 * Clase que representa un personaje del universo Dragon Ball, clase hija de la clase Figther
 */
export class DragonBall extends Figther {
  /**
   * // Ejemplo de llamada
  *  const Goku = new DragonBall("Goku", 93, 1.85, 85, [105, 105, 140, 150], "Yo! I'm Goku!");
   * ```
   * Constructor de la clase DragonBall, se heredan con super todos los atributos menos ki, que es el atributo propio de la clase
   * @param nombre Nombre del personaje
   * @param peso Peso del personaje
   * @param altura Altura del personaje
   * @param ki Ki del personaje (Nivel de poder)
   * @param estadisticasBasicas Estadisticas básicas del personaje (Ataque, Defensa, Velocidad y HP)
   * @param catchingPhrase Catching Phrase del personaje
   */
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
