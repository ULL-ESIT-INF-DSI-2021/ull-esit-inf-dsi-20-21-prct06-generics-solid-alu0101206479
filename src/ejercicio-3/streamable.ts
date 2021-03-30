export interface Streamable<T> {
  coleccion: T[]
  getColeccion(): T[];
  añadirEmision(emision: T): void;
  quitarEmision(emision: T): void;
}
