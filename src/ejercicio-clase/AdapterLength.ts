import {ImperialLength} from "./ImperialLength";
import {MetricLength} from "./MetricLength";

/**
 * Clase que representa el adaptador de longitud del sistema imperial al sistema metrico
 */
export class AdapterLength extends MetricLength {
  constructor(private service: ImperialLength) {
    super();
  }
  getLongitudEnCentimetros(): number {
    return this.service.getLongitudEnPulgadas()*91.44;
  }

  getLongitudEnMetros(): number {
    return this.service.getLongitudEnPulgadas()/0.9144;
  }

  getLongitudEnKiloetros(): number {
    return this.service.getLongitudEnPulgadas()/0.0009144;
  }
}
