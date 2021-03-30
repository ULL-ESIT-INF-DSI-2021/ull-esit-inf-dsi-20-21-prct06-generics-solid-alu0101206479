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
   * @param personajes Personajes que tendrá la Pokedex
   */
  constructor(private pokedex: Pokedex) {}

  public mostrar() {
    console.table(this.pokedex.getPersonajes(), ["nombre", "peso", "altura", "catchingPhrase"]);
  }
}
