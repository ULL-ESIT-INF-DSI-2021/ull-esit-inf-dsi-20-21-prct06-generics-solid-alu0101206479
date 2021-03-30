import {BasicStreamableCollection} from "./basicstreamablecollection";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const documental : documental = {nombre: "Rol & Rol", añoPublicacion: 2021, duracionMinutos: 89};
 * Tipo que representa un documental
 */
export type documental = {
  nombre: string;
  añoPublicacion: number;
  duracionMinutos: number;
}

/**
 * ```typescript
 * // Ejemplo de creación
 *  const documentalColeccion = new DocumentalCollection([documental1, documental2, documental3, documental4]);
 * ```
 * Clase que representa una colección de documentales, clase hija de la clase BasicStreamableCollection
 */
export class DocumentalCollection extends BasicStreamableCollection<documental> {
  /**
   * // Ejemplo de llamada
   *  const documentalColeccion = new DocumentalCollection([documental1, documental2, documental3, documental4]);
   * ```
   * Constructor de la clase DocumentalCollection, se hereda el atributo coleccion de la clase padre
   * @param coleccion Colección de documentales
   */
  constructor(coleccion: documental[]) {
    super(coleccion);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  documentalColeccion.getColeccion();
   * ```
   * Función que retorna los personajes que tiene la Pokedex
   * @return El atributo personajes, que es el vector que contiene todos los personajes de la Pokedex
   */
  public getColeccion(): documental[] {
    return this.coleccion;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  documentalColeccion.busqueda("Cortos", undefined)
   * ```
   * Función que busca emisiones concretas en la colección, las muestra en una tabla y las retorna.
   * @param atributo El atributo a través del cual se quiere buscar
   * @param valor Valor que se quiere buscar
   * @return El resultado de la busqueda
   */
  public busqueda(atributo: string, valor?: string | number): documental[] | undefined {
    const salida: documental[] = [];

    this.coleccion.forEach((emision) => {
      if (atributo == "Nombre" && typeof(valor) === "string") {
        if (emision.nombre == valor) {
          salida.push(emision);
        }
      }
      if (atributo == "Año de publicación" && typeof(valor) === "number") {
        if (emision.añoPublicacion == valor) {
          salida.push(emision);
        }
      }
      if (atributo == "Largos" && typeof(valor) === "undefined") {
        if (emision.duracionMinutos > 60) {
          salida.push(emision);
        }
      }
      if (atributo == "Normales" && typeof(valor) === "undefined") {
        if (emision.duracionMinutos > 30 && emision.duracionMinutos < 60) {
          salida.push(emision);
        }
      }
      if (atributo == "Cortos" && typeof(valor) === "undefined") {
        if (emision.duracionMinutos < 30) {
          salida.push(emision);
        }
      }
    });

    console.table(salida);
    return salida;
  }
}
