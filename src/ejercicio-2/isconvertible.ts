export interface isConvertible<T> {
  cantidad: number;
  unidad: T;
  conversor(uResultado: T): void;
}
