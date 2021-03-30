export interface busquedaStreamable<T> {
  busqueda(atributo: string, valor: string | number): T[] | undefined
}
