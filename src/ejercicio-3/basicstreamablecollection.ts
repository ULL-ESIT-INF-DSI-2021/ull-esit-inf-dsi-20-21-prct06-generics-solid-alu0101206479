import {busquedaStreamable } from './busquedastreamable';
import {imprimirStreamable } from './imprimirstreamable';
import {Streamable} from './streamable';

export abstract class BasicStreamableCollection<T> implements Streamable<T>, busquedaStreamable<T>, imprimirStreamable<T> {
  constructor(public coleccion: T[]) {
  }

  añadirEmision(emision: T) {
    this.coleccion.push(emision);
  }

  quitarEmision(emision: T) {
    const indice: number = this.coleccion.indexOf(emision);
    this.coleccion.splice(indice, 1);
  }

  abstract getColeccion(): T[];
  abstract busqueda(nombre?: string, añoPublicacion?: string): T[] | undefined;

  public imprimirColeccion(searchTerm: string): void {
    console.table(this.coleccion);
  }
}
