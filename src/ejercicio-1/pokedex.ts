import {Pokemon} from '../ejercicio-1/pokemon';
import {Marvel} from '../ejercicio-1/marvel';
import {DC} from '../ejercicio-1/dc';
import {StarWars} from '../ejercicio-1/starwars';
import {DragonBall} from '../ejercicio-1/dragonball';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const pokedex = new Pokedex([Venusaur, Ironman, Goku, Yoda]);
 * ```
 * Clase que representa una Pokedex
 */
export class Pokedex {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const pokedex = new Pokedex([Venusaur, Ironman, Goku, Yoda]);
   * ```
   * Constructor de la clase Pokedex
   * @param personajes Personajes que tendrá la Pokedex, pueden ser de los universos: Pokemon, Marvel, DC, StarWars o DragonBall
   */
  constructor(private personajes: (Pokemon | Marvel | DC | StarWars | DragonBall)[]) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.getPersonajes();
   * ```
   * Función que retorna los personajes que tiene la Pokedex
   * @return El atributo personajes, que es el vector que contiene todos los personajes de la Pokedex
   */
  public getPersonajes() {
    return this.personajes;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.añadirPersonajes(Venusaur); // Venusaur es un objeto personaje
   * ```
   * Función que añade un personaje a la Pokedex
   * @param personaje Personaje que se quiere añadir
   */
  public añadirPersonaje(personaje: (Pokemon | Marvel | DC | StarWars | DragonBall)) {
    this.personajes.push(personaje);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.quitarPersonajes(Venusar); // Venusar es un objeto personaje
   * ```
   * Función que quita un personaje de la Pokedex
   * @param personaje Personaje que se quiere quitar
   */
  public quitarPersonaje(personaje: (Pokemon | Marvel | DC | StarWars | DragonBall)) {
    const indice: number = this.personajes.indexOf(personaje);
    this.personajes.splice(indice, 1);
  }
}
