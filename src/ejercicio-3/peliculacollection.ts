import {BasicStreamableCollection} from "./basicstreamablecollection";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const pelicula : pelicula = {nombre: "El lobo de Wall Street", añoPublicacion: 2013, duracionMinutos: 180};
 * ```
 * Tipo que representa una película
 */
export type pelicula = {
  nombre: string;
  añoPublicacion: number;
  duracionMinutos: number;
}

/**
 * ```typescript
 * // Ejemplo de creación
 *  const peliculaColeccion = new PeliculaCollection([pelicula1, pelicula2, pelicula3, pelicula4]);
 * ```
 * Clase que representa una colección de peliculas, clase hija de la clase BasicStreamableCollection
 */
export class PeliculaCollection extends BasicStreamableCollection<pelicula> {
  /**
   * // Ejemplo de llamada
   *  const peliculaColeccion = new PeliculaCollection([pelicula1, pelicula2, pelicula3, pelicula4]);
   * ```
   * Constructor de la clase PeliculaCollection, se hereda el atributo coleccion de la clase padre
   * @param coleccion Colección de peliculas
   */
  constructor(coleccion: pelicula[]) {
    super(coleccion);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  peliculaColeccion.getColeccion();
   * ```
   * Función que retorna los personajes que tiene la Pokedex
   * @return El atributo personajes, que es el vector que contiene todos los personajes de la Pokedex
   */
  public getColeccion(): pelicula[] {
    return this.coleccion;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  peliculaColeccion.busqueda("Año de publicación", 2021)
   * ```
   * Función que busca emisiones concretas en la colección, las muestra en una tabla y las retorna.
   * @param atributo El atributo a través del cual se quiere buscar
   * @param valor Valor que se quiere buscar
   * @return El resultado de la busqueda
   */
  public busqueda(atributo: string, valor?: string | number): pelicula[] | undefined {
    const salida: pelicula[] = [];

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
      if (atributo == "Largas" && typeof(valor) === "undefined") {
        if (emision.duracionMinutos > 150) {
          salida.push(emision);
        }
      }
      if (atributo == "Normales" && typeof(valor) === "undefined") {
        if (emision.duracionMinutos > 90 && emision.duracionMinutos < 150) {
          salida.push(emision);
        }
      }
      if (atributo == "Cortas" && typeof(valor) === "undefined") {
        if (emision.duracionMinutos < 90) {
          salida.push(emision);
        }
      }
    });

    console.table(salida);
    return salida;
  }
}
