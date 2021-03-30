/**
 * Interfaz que sirve para describir la forma y los métodos de una colección
 */
export interface Streamable<T> {
  coleccion: T[]
  getColeccion(): T[];
  añadirEmision(emision: T): void;
  quitarEmision(emision: T): void;
}
