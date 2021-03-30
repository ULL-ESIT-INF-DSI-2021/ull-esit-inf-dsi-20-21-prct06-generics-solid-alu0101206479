export interface busquedaStreamable<T> {
  busqueda(nombre?: string, añoPublicacion?: string): T[] | undefined;
}
