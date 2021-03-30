import {BasicStreamableCollection} from "./basicstreamablecollection";

export type documental = {
  nombre: string;
  añoPublicacion: number;
  duracionMinutos: number;
}

export class DocumentalCollection extends BasicStreamableCollection<documental> {
  constructor(coleccion: documental[]) {
    super(coleccion);
  }

  public getColeccion(): documental[] {
    return this.coleccion;
  }

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
