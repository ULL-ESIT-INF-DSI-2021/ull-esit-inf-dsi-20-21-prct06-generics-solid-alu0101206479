import {BasicStreamableCollection} from "./basicstreamablecollection";

/**
 * ```typescript
 * // Ejemplo de creación
 *  const serie : serie = {nombre: "Prison Break", añoPublicacion: 2005, temporadas: 5};
 * ```
 * Tipo que representa una serie
 */
export type serie = {
  nombre: string;
  añoPublicacion: number;
  temporadas: number;
}

/**
 * ```typescript
 * // Ejemplo de creación
 *  const serieColeccion = new SerieCollection([serie1, serie2, serie3, serie4]);
 * ```
 * Clase que representa una colección de series, clase hija de la clase BasicStreamableCollection
 */
export class SerieCollection extends BasicStreamableCollection<serie> {
  /**
   * // Ejemplo de llamada
   *  const serieColeccion = new SerieCollection([serie1, serie2, serie3, serie4]);
   * ```
   * Constructor de la clase SerieCollection, se hereda el atributo coleccion de la clase padre
   * @param coleccion Colección de series
   */
  constructor(coleccion: serie[]) {
    super(coleccion);
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  serieColeccion.getColeccion();
   * ```
   * Función que retorna los personajes que tiene la Pokedex
   * @return El atributo personajes, que es el vector que contiene todos los personajes de la Pokedex
   */
  public getColeccion(): serie[] {
    return this.coleccion;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  serieColeccion.busqueda("Nombre", "Prison Break")
   * ```
   * Función que busca emisiones concretas en la colección, las muestra en una tabla y las retorna.
   * @param atributo El atributo a través del cual se quiere buscar
   * @param valor Valor que se quiere buscar
   * @return El resultado de la busqueda
   */
  public busqueda(atributo: string, valor: string | number): serie[] | undefined {
    const salida: serie[] = [];

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
      if (atributo == "Temporadas" && typeof(valor) === "number") {
        if (emision.temporadas == valor) {
          salida.push(emision);
        }
      }
    });

    console.table(salida);
    return salida;
  }
}
