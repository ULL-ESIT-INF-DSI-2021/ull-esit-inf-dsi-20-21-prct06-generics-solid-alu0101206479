/**
 * ```typescript
 * // Ejemplo de herencia
 *  class DC extends Figther {}
 * ```
 * Clase abstracta que permite que un contendiente pueda luchar. Será la clase padre de clases que representan distintos universos que quieran luchar.
 */
export abstract class Figther {
  /**
   * Atributo que representa las estadisticas básicas (ataque, defensa, velocidad, HP) del luchador
   */
  private estadisticasBasicas = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    hp: 0,
  };

  /**
   * ```typescript
   * // Ejemplo de herencia de atributos
   *  super(nombre, peso, altura, estadisticasBasicas, catchingPhrase);
   * ```
   * Constructor de la clase Figther
   * @param nombre Nombre del personaje luchador
   * @param peso Peso del personaje luchador
   * @param altura Altura del personaje luchador
   * @param estadisticasBasicas Vector de estadisticas básicas del personaje luchador, primera posicion representa ataque, segunda defensa, tercera velocidad y cuarta HP
   */
  constructor(private nombre: string, private peso: number, private altura: number, estadisticasBasicas: number[], private catchingPhrase: string) {
    this.estadisticasBasicas.ataque = estadisticasBasicas[0];
    this.estadisticasBasicas.defensa = estadisticasBasicas[1];
    this.estadisticasBasicas.velocidad = estadisticasBasicas[2];
    this.estadisticasBasicas.hp = estadisticasBasicas[3];
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.getNombre();
   * ```
   * Función que retorna el nombre del luchador
   * @return El atributo nombre
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.setNombre("Personaje");
   * ```
   * Función para cambiar el nombre del luchador
   * @param nombre El nuevo nombre que tendrá el luchador
   */
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.getPeso();
   * ```
   * Función que retorna el peso del luchador
   * @return El atributo peso
   */
  public getPeso() {
    return this.peso;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.setPeso(75);
   * ```
   * Función para cambiar el peso del luchador
   * @param peso El nuevo peso que tendrá el luchador
   */
  public setPeso(peso: number) {
    this.peso = peso;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.getAltura();
   * ```
   * Función que retorna la altura del luchador
   * @return El atributo altura
   */
  public getAltura() {
    return this.altura;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.setAltura(1.78);
   * ```
   * Función para cambiar la altura del luchador
   * @param altura La nueva altura que tendrá el luchador
   */
  public setAltura(altura: number) {
    this.altura = altura;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.getEstadisticasBasicas();
   * ```
   * Función que retorna las estadisticas básicas (ataque, defensa, velocidad, HP) del luchador
   * @return El atributo estadisticasBasicas
   */
  public getEstadisticasBasicas() {
    return this.estadisticasBasicas;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.setAtaque(80);
   * ```
   * Función para cambiar el ataque del luchador
   * @param ataque El nuevo ataque que tendrá el luchador
   */
  public setAtaque(ataque: number) {
    this.estadisticasBasicas.ataque = ataque;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.setDefensa(70);
   * ```
   * Función para cambiar la defensa del luchador
   * @param defensa La nueva defensa que tendrá el luchador
   */
  public setDefensa(defensa: number) {
    this.estadisticasBasicas.defensa = defensa;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.setVelocidad(80);
   * ```
   * Función para cambiar la velocidad del luchador
   * @param velocidad La nueva velocidad que tendrá el luchador
   */
  public setVelocidad(velocidad: number) {
    this.estadisticasBasicas.velocidad = velocidad;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.setHP(90);
   * ```
   * Función para cambiar el hp del luchador
   * @param hp El nuevo HP que tendrá el luchador
   */
  public setHP(hp: number) {
    this.estadisticasBasicas.hp = hp;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  personaje.getCatchingPhrase();
   * ```
   * Función que retorna la frase típica del luchador
   * @return El atributo catchingPhrase
   */
  public getCatchingPhrase() {
    return this.catchingPhrase;
  }

  /**
     * ```typescript
     * // Ejemplo de llamada
     *  personaje.setCatchingPhrase("Soy un personaje");
     * ```
     * Función para cambiar la frase típica del luchador
     * @param catchingPhrase La nueva frase típica que tendrá el luchador
     */
  public setCatchingPhrase(catchingPhrase: string) {
    this.catchingPhrase = catchingPhrase;
  }
}
