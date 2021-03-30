import {Pokemon} from '../ejercicio-1/pokemon';
import {Marvel} from '../ejercicio-1/marvel';
import {DC} from '../ejercicio-1/dc';
import {StarWars} from '../ejercicio-1/starwars';
import {DragonBall} from '../ejercicio-1/dragonball';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const pokedex = new Pokedex([Venusaur, Charizard, Blastoise]);
 * ```
 * Clase que representa una Pokedex
 */
export class Pokedex {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const pokedex = new Pokedex([Venusaur, Batman, Yoda]);
   * ```
   * Constructor de la clase Pokedex
   * @param personajes Personajes que tendrá la Pokedex
   */
  constructor(private personajes: (Pokemon | Marvel | DC | StarWars | DragonBall)[]) {}

  /**
   * ```typescript
   * // Ejemplo de llamadPersonajesa
   *  pokedex.getPersonajes();
   * ```
   * Función que retorna los Pokemons que tiene la Pokedex
   * @return El atributo personajes, que es el vector que contiene todos los Pokemons de la Pokedex
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
   *  pokedex.quitarPokemons(Venusar); // Venusar es un objeto personaje
   * ```
   * Función que quita un personaje de la Pokedex
   * @param pokemon Personaje que se quiere quitar
   */
  public quitarPersonaje(personaje: (Pokemon | Marvel | DC | StarWars | DragonBall)) {
    const indice: number = this.personajes.indexOf(personaje);
    this.personajes.splice(indice, 1);
  }
}
