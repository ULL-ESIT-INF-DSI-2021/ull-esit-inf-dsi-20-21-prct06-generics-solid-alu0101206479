import {Pokedex} from './pokedex';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const pokedexP = new PokedexPrinter(pokedex);
 * ```
 * Clase para imprimir una pokedex
 */
export class PokedexPrinter {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const pokedexP = new PokedexPrinter(pokedex);
   * ```
   * Constructor de la clase PokedexPrinter
   * @param pokedex Pokedex que se imprimirá
   */
  constructor(private pokedex: Pokedex) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.mostrar();
   * ```
   * Función que muestra en una tabla los personajes de la Pokedex
   */
  public mostrar() {
    console.table(this.pokedex.getPersonajes(), ["nombre", "peso", "altura", "catchingPhrase"]);
  }
}
