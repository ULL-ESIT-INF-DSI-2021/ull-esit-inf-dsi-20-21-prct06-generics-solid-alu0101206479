import {Figther} from '../ejercicio-1/figther';
import {Pokemon} from '../ejercicio-1/pokemon';
import {Marvel} from '../ejercicio-1/marvel';
import {DC} from '../ejercicio-1/dc';
import {StarWars} from '../ejercicio-1/starwars';
import {DragonBall} from '../ejercicio-1/dragonball';

/**
 * ```typescript
 * // Ejemplo de creación
 *  const combate = new Combat(Venusaur, Batman);
 * ```
 * Clase que representa un combate entre personajes de distintos universos
 */
export class Combat {
  /**
   * ```typescript
   * // Ejemplo de llamada
   *  const combate = new Combat(Venusaur, Batman);
   * ```
   * Constructor de la clase Combat
   * @param contrincante1 Contrincante 1 del combate
   * @param contrincante2 Contrincante 2 del combate
   */
  constructor(private contrincante1: Figther, private contrincante2: Figther) {}

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.getContrincante1();
   * ```
   * Función que retorna el contrincante 1 del combate
   * @return El atributo contrincante1
   */
  public getContrincante1() {
    return this.contrincante1;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.setContrincante1(Raichu);
   * ```
   * Función para cambiar el atributo contrincante1
   * @param contrincante1 El nuevo contrincante 1 del combate
   */
  public setContricante1(contrincante1: Figther) {
    this.contrincante1 = contrincante1;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.getContrincante2();
   * ```
   * Función que retorna el Pokemon 2 del combate
   * @returns El atributo contrincante2
   */
  public getContrincante2() {
    return this.contrincante2;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.setContrincante2(Goku);
   * ```
   * Función para cambiar el atributo contrincante2
   * @param contrincante2 El nuevo contrincante 2 del combate
   */
  public setContricante2(contrincante2: Figther) {
    this.contrincante2 = contrincante2;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.dañoAtaque(1);
   * ```
   * Función que calcula el daño que causa un personaje a otro
   * @param personajeAtacante Un número que indica si ataca el contrincante 1 o el contrincante 2
   * @returns El daño que causa un personaje a otro
   */
  public dañoAtaque(personajeAtacante: number): number {
    let efectividad: number = 0;
    let daño: number = 0;

    switch (this.contrincante1.constructor) {
      case Pokemon:
        if (this.contrincante1 instanceof Pokemon && this.contrincante2 instanceof Pokemon) {
          if (this.contrincante1.getTipo() == this.contrincante2.getTipo()) {
            efectividad = 0.5;
          } else {
            switch (this.contrincante1.getTipo()) {
              case "Fuego":
                if (this.contrincante2.getTipo() == "Planta") {
                  efectividad = 2;
                }
                if (this.contrincante2.getTipo() == "Eléctrico") {
                  efectividad = 1;
                }
                if (this.contrincante2.getTipo() == "Agua") {
                  efectividad = 0.5;
                }
                break;

              case "Planta":
                if (this.contrincante2.getTipo() == "Agua") {
                  efectividad = 2;
                }
                if (this.contrincante2.getTipo() == "Eléctrico") {
                  efectividad = 1;
                }
                if (this.contrincante2.getTipo() == "Fuego") {
                  efectividad = 0.5;
                }
                break;

              case "Eléctrico":
                if (this.contrincante2.getTipo() == "Agua") {
                  efectividad = 2;
                }
                if ((this.contrincante2.getTipo() == "Fuego") || (this.contrincante2.getTipo() == "Planta")) {
                  efectividad = 1;
                }
                break;

              case "Agua":
                if (this.contrincante2.getTipo() == "Fuego") {
                  efectividad = 2;
                } else {
                  efectividad = 0.5;
                }
                break;
            }
          }
        }

        if (this.contrincante2 instanceof Marvel) efectividad = 2;
        if (this.contrincante2 instanceof DC) efectividad = 1;
        if (this.contrincante2 instanceof StarWars) efectividad = 2;
        if (this.contrincante2 instanceof DragonBall) efectividad = 1;
        break;

      case Marvel:
        if (this.contrincante1 instanceof Marvel && this.contrincante2 instanceof Marvel) {
          if (this.contrincante1.getTipo() == this.contrincante2.getTipo()) {
            efectividad = 0.5;
          } else {
            switch (this.contrincante1.getTipo()) {
              case "Superheroe":
                if (this.contrincante2.getTipo() == "Malvado") {
                  efectividad = 2;
                }
                break;
              case "Malvado":
                if (this.contrincante2.getTipo() == "Malvado") {
                  efectividad = 0.5;
                }
                break;
            }
          }
        }

        if (this.contrincante2 instanceof Pokemon) efectividad = 0.5;
        if (this.contrincante2 instanceof DC) efectividad = 2;
        if (this.contrincante2 instanceof StarWars) efectividad = 0.5;
        if (this.contrincante2 instanceof DragonBall) efectividad = 1;
        break;

      case DC:
        if (this.contrincante1 instanceof DC && this.contrincante2 instanceof DC) {
          if (this.contrincante1.getTipo() == this.contrincante2.getTipo()) {
            efectividad = 0.5;
          } else {
            switch (this.contrincante1.getTipo()) {
              case "Superheroe":
                if (this.contrincante2.getTipo() == "Malvado") {
                  efectividad = 2;
                }
                break;
              case "Malvado":
                if (this.contrincante2.getTipo() == "Malvado") {
                  efectividad = 0.5;
                }
                break;
            }
          }
        }

        if (this.contrincante2 instanceof Pokemon) efectividad = 1;
        if (this.contrincante2 instanceof Marvel) efectividad = 0.5;
        if (this.contrincante2 instanceof StarWars) efectividad = 2;
        if (this.contrincante2 instanceof DragonBall) efectividad = 0.5;
        break;

      case StarWars:
        if (this.contrincante1 instanceof StarWars && this.contrincante2 instanceof StarWars) {
          if (this.contrincante1.getColorSable() == this.contrincante2.getColorSable()) {
            efectividad = 0.5;
          } else {
            switch (this.contrincante1.getColorSable()) {
              case "Rojo":
                if (this.contrincante2.getColorSable() == "Azul") {
                  efectividad = 1;
                }
                if (this.contrincante2.getColorSable() == "Verde") {
                  efectividad = 0.5;
                }
                break;
              case "Azul":
                if (this.contrincante2.getColorSable() == "Rojo") {
                  efectividad = 1;
                }
                if (this.contrincante2.getColorSable() == "Verde") {
                  efectividad = 0.5;
                }
                break;
              case "Verde":
                if (this.contrincante2.getColorSable() == "Rojo") {
                  efectividad = 2;
                }
                if (this.contrincante2.getColorSable() == "Azul") {
                  efectividad = 2;
                }
                break;
            }
          }
        }

        if (this.contrincante2 instanceof Pokemon) efectividad = 0.5;
        if (this.contrincante2 instanceof Marvel) efectividad = 2;
        if (this.contrincante2 instanceof DC) efectividad = 0.5;
        if (this.contrincante2 instanceof DragonBall) efectividad = 2;
        break;

      case DragonBall:
        if (this.contrincante1 instanceof DragonBall && this.contrincante2 instanceof DragonBall) {
          if (this.contrincante1.getKi() > this.contrincante2.getKi()) {
            efectividad = 2;
          }
          if (this.contrincante1.getKi() < this.contrincante2.getKi()) {
            efectividad = 0.5;
          }
          if (this.contrincante1.getKi() == this.contrincante2.getKi()) {
            efectividad = 1;
          }
        }

        if (this.contrincante2 instanceof Pokemon) efectividad = 1;
        if (this.contrincante2 instanceof Marvel) efectividad = 1;
        if (this.contrincante2 instanceof DC) efectividad = 2;
        if (this.contrincante2 instanceof StarWars) efectividad = 0.5;
        break;
    }

    if (personajeAtacante == 1) {
      daño = 50 * (this.contrincante1.getEstadisticasBasicas().ataque / this.contrincante2.getEstadisticasBasicas().defensa) * efectividad;
    } else {
      if (efectividad == 2) {
        efectividad = 0.5;
      } else {
        if (efectividad == 0.5) {
          efectividad = 2;
        }
      }
      daño = 50 * (this.contrincante2.getEstadisticasBasicas().ataque / this.contrincante1.getEstadisticasBasicas().defensa) * efectividad;
    }

    return daño;
  }

  /**
   * ```typescript
   * // Ejemplo de llamada
   *  combate.start();
   * ```
   * Función que simula el combate Pokemon
   */
  public start() {
    let i: number = 1;
    let daño: number = 0;
    console.log(`${this.contrincante1.getNombre()}(HP: ${this.contrincante1.getEstadisticasBasicas().hp}) vs ${this.contrincante2.getNombre()}(HP: ${this.contrincante2.getEstadisticasBasicas().hp})\n`);

    while (1) {
      if (i == 1) {
        console.log(`Ataca ${this.contrincante1.getNombre()}\n${this.contrincante1.getCatchingPhrase()}`);
        daño = Math.floor(this.dañoAtaque(i));
        if (this.contrincante2.getEstadisticasBasicas().hp-daño > 0) {
          this.contrincante2.setHP(this.contrincante2.getEstadisticasBasicas().hp-daño);
        } else {
          this.contrincante2.setHP(0);
        }
        console.log(`¡BOOOOOOM! ${this.contrincante1.getNombre()} hizo ${daño} de daño, dejando a ${this.contrincante2.getNombre()} con un HP de ${this.contrincante2.getEstadisticasBasicas().hp}\n`);
        i = 2;

        if (this.contrincante2.getEstadisticasBasicas().hp == 0) {
          console.log(`Ha acabado el combate, campeón ¡¡¡¡¡${this.contrincante1.getNombre()}!!!!\n`);
          break;
        }
      } else {
        console.log(`Ataca ${this.contrincante2.getNombre()}\n${this.contrincante2.getCatchingPhrase()}`);
        daño = Math.floor(this.dañoAtaque(i));
        if (this.contrincante1.getEstadisticasBasicas().hp-daño > 0) {
          this.contrincante1.setHP(this.contrincante1.getEstadisticasBasicas().hp-daño);
        } else {
          this.contrincante1.setHP(0);
        }
        console.log(`¡BOOOOOOM! ${this.contrincante2.getNombre()} hizo ${daño} de daño, dejando a ${this.contrincante1.getNombre()} con un HP de ${this.contrincante1.getEstadisticasBasicas().hp}\n`);
        i = 1;

        if (this.contrincante1.getEstadisticasBasicas().hp == 0) {
          console.log(`Ha acabado el combate, campeón ¡¡¡¡¡${this.contrincante2.getNombre()}!!!!\n`);
          break;
        }
      }
    }
  }
}
