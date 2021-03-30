/**
 * Interfaz que sirve para definir el método para hacer la busqueda de elementos en una colección
 */
export interface busquedaStreamable<T> {
  busqueda(atributo: string, valor: string | number): T[] | undefined
}
