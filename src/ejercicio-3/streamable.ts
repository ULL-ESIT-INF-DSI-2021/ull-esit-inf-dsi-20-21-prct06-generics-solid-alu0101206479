export interface isConvertible<T> {
  coleccion: T[]
  getEmisiones(): T[];
  añadirEmision(emision: T): void;
  quitarEmision(emision: T): void;
}
