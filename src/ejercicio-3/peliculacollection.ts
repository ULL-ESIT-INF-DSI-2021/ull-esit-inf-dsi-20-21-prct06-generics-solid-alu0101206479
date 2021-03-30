import {BasicStreamableCollection} from "./basicstreamablecollection";

export type pelicula = {
  nombre: string;
  añoPublicacion: number;
  duracionMinutos: number;
}

export class PeliculaCollection extends BasicStreamableCollection<pelicula> {
  constructor(coleccion: pelicula[]) {
    super(coleccion);
  }

  public getColeccion(): pelicula[] {
    return this.coleccion;
  }

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
