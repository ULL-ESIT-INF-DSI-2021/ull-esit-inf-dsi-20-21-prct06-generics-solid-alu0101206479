import {BasicStreamableCollection} from "./basicstreamablecollection";

export type serie = {
  nombre: string;
  añoPublicacion: number;
  temporadas: number;
}

export class SerieCollection extends BasicStreamableCollection<serie> {
  constructor(coleccion: serie[]) {
    super(coleccion);
  }

  public getColeccion(): serie[] {
    return this.coleccion;
  }

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
