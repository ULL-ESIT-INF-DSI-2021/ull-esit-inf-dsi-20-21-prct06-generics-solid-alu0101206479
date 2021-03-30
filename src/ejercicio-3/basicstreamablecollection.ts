import {busquedaStreamable} from './busquedastreamable';
import {imprimirStreamable} from './imprimirstreamable';
import {Streamable} from './streamable';

/**
 * ```typescript
 * // Ejemplo de herencia
 *  class DocumentalCollection extends BasicStreamableCollection<documental> {}
 * ```
 * Clase abstracta genérica que implementa y desarrolla las interfaces Streamable, busquedaStreamable y imiprimirStreamable. Esta clase será padre de las clases que quieran representar una colección de emisiones concreta
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>, busquedaStreamable<T>, imprimirStreamable {
  /**
   * ```typescript
   * // Ejemplo de herencia del atributo
   *  super(coleccion);
   * ```
   * Constructor de la clase BasicStreamableCollection
   * @param coleccion Colección
   */
  constructor(public coleccion: T[]) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.añadirEmision(emision);
   * ```
   * Función que añade una emisión a la colección
   * @param emision Emision que se quiere añadir
   */
  añadirEmision(emision: T) {
    this.coleccion.push(emision);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  pokedex.quitarEmision(emision);
   * ```
   * Función que quita una emisión a la colección
   * @param emision Emision que se quiere quitar
   */
  quitarEmision(emision: T) {
    const indice: number = this.coleccion.indexOf(emision);
    this.coleccion.splice(indice, 1);
  }

  /**
   * Función abstracta que retornará cuando se desarrolle el atributo colección
   */
  abstract getColeccion(): T[];

  /**
   * Función abstracta que sirve para buscar emisiones concreta según el criterio elegido, dentro de la colección.
   * @param atributo El atributo a través del cual se quiere buscar
   * @param valor Valor que se quiere buscar
   */
  abstract busqueda(atributo: string, valor: string | number): T[] | undefined;

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  emisionColeccion.imprimirColeccion();
   * ```
   * Función que muestra en una tabla las emisiones de la colección
   */
  public imprimirColeccion(): void {
    console.table(this.coleccion);
  }
}
