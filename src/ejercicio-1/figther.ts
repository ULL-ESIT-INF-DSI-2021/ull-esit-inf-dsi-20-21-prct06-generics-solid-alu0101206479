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

  constructor(private nombre: string, private peso: number, private altura: number, estadisticasBasicas: number[]) {
    this.estadisticasBasicas.ataque = estadisticasBasicas[0];
    this.estadisticasBasicas.defensa = estadisticasBasicas[1];
    this.estadisticasBasicas.velocidad = estadisticasBasicas[2];
    this.estadisticasBasicas.hp = estadisticasBasicas[3];
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokemon.getNombre();
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
   *  pokemon.setNombre("Charizard");
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
   *  pokemon.getPeso();
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
   *  pokemon.setPeso(75);
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
   *  pokemon.getAltura();
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
   *  pokemon.setAltura(1.78);
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
   *  pokemon.getEstadisticasBasicas();
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
   *  pokemon.setAtaque(80);
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
   *  pokemon.setDefensa(70);
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
   *  pokemon.setVelocidad(80);
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
   *  pokemon.setHP(90);
   * ```
   * Función para cambiar el hp del luchador
   * @param hp El nuevo HP que tendrá el luchador
   */
  public setHP(hp: number) {
    this.estadisticasBasicas.hp = hp;
  }
}
