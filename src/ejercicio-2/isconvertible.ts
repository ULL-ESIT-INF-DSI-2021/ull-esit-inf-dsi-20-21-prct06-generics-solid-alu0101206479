/**
 * Interfaz genérica que sirve para describir la forma de una magnitud entre la que se puede hacer conversión entre unidades
 */
export interface isConvertible<T> {
  cantidad: number;
  unidad: T;
  conversor(uResultado: T): void;
}
