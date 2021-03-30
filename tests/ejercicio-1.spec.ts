import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Marvel} from '../src/ejercicio-1/marvel';
import {DC} from '../src/ejercicio-1/dc';
import {StarWars} from '../src/ejercicio-1/starwars';
import {DragonBall} from '../src/ejercicio-1/dragonball';
import {Combat} from '../src/ejercicio-1/combat';
import {Pokedex} from '../src/ejercicio-1/pokedex';

describe('Pruebas del Ejercicio 1 - El combate definitivo', () => {
  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80], "SAURRR!");
  const Ironman = new Marvel("Iron Man", 110, 1.92, "Superheroe", [85, 80, 110, 150], "I am Iron Man");
  const Batman = new DC("Batman", 90, 1.90, "Superheroe", [90, 85, 120, 160], "I'm the Goddamn Batman");
  const Yoda = new StarWars("Yoda", 30, 1, "Verde", [110, 70, 150, 130], "Do. Or do not. There is no try");
  const Goku = new DragonBall("Goku", 93, 1.85, 85, [105, 105, 140, 150], "Yo! I'm Goku!");
  describe('Clase Figther y clases hijas', () => {
    describe('Se pueden instanciar los luchadores', () => {
      it('expect(Venusaur).not.be.equal(null);', () => {
        expect(Venusaur).not.be.equal(null);
      });
      it('expect(Ironman).not.be.equal(null);', () => {
        expect(Ironman).not.be.equal(null);
      });
      it('expect(Batman).not.be.equal(null);', () => {
        expect(Batman).not.be.equal(null);
      });
      it('expect(Yoda).not.be.equal(null);', () => {
        expect(Yoda).not.be.equal(null);
      });
      it('expect(Goku).not.be.equal(null);', () => {
        expect(Goku).not.be.equal(null);
      });
    });

    describe('Funcionan los getters y setters', () => {
      it('expect(Venusaur.getNombre()).to.be.equal("Venusaur");', () => {
        expect(Venusaur.getNombre()).to.be.equal("Venusaur");
      });
      it('expect(Ironman.getPeso()).to.be.equal(110);', () => {
        expect(Ironman.getPeso()).to.be.equal(110);
      });
      it('Batman.setPeso(50);', () => {
        Batman.setPeso(50);
        expect(Batman.getPeso()).to.be.equal(50);
        Batman.setPeso(90);
      });
      it('expect(Goku.getAltura()).to.be.equal(1.85);', () => {
        expect(Goku.getAltura()).to.be.equal(1.85);
      });
      it('expect(Venusaur.getTipo()).to.be.equal("Planta");', () => {
        expect(Venusaur.getTipo()).to.be.equal("Planta");
      });
      it('Ironman.setTipo("Malvado");', () => {
        Ironman.setTipo("Malvado");
        expect(Ironman.getTipo()).to.be.equal("Malvado");
        Ironman.setTipo("Superheroe");
      });
      it('expect(Batman.getEstadisticasBasicas().ataque).to.be.equal(90);', () => {
        expect(Batman.getEstadisticasBasicas().ataque).to.be.equal(90);
      });
      it('expect(Goku.getEstadisticasBasicas().defensa).to.be.equal(105);', () => {
        expect(Goku.getEstadisticasBasicas().defensa).to.be.equal(105);
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().velocidad).to.be.equal(80);', () => {
        expect(Venusaur.getEstadisticasBasicas().velocidad).to.be.equal(80);
      });
      it('expect(Ironman.getEstadisticasBasicas().hp).to.be.equal(150);', () => {
        expect(Ironman.getEstadisticasBasicas().hp).to.be.equal(150);
      });
      it('Batman.setHP(15);', () => {
        Batman.setHP(15);
        expect(Batman.getEstadisticasBasicas().hp).to.be.equal(15);
        Batman.setHP(170);
      });
      it('expect(Ironman.getCatchingPhrase()).to.be.equal("I am Iron Man");', () => {
        expect(Ironman.getCatchingPhrase()).to.be.equal("I am Iron Man");
      });
    });
  });

  const combate1 = new Combat(Venusaur, Ironman);
  const combate2 = new Combat(Ironman, Venusaur);
  const combate3 = new Combat(Batman, Yoda);
  const combate4 = new Combat(Goku, Yoda);
  const combate5 = new Combat(Ironman, Goku);
  describe('Clase Combat', () => {
    describe('Se puede instanciar objetos Combat', () => {
      it('expect(combate1).not.be.equal(null);', () => {
        expect(combate1).not.be.equal(null);
      });
      it('expect(combate2).not.be.equal(null);', () => {
        expect(combate2).not.be.equal(null);
      });
      it('expect(combate3).not.be.equal(null);', () => {
        expect(combate3).not.be.equal(null);
      });
      it('expect(combate4).not.be.equal(null);', () => {
        expect(combate4).not.be.equal(null);
      });
    });

    describe('Funcionan los getters y setters', () => {
      it('expect(combate1.getContrincante1()).to.be.equal(Venusaur);', () => {
        expect(combate1.getContrincante1()).to.be.equal(Venusaur);
      });
      it('combate1.setContricante1(Yoda);', () => {
        combate1.setContricante1(Yoda);
        expect(combate1.getContrincante1()).to.be.equal(Yoda);
        combate1.setContricante1(Venusaur);
      });
      it('expect(combate1.getContrincante2()).to.be.equal(Ironman);', () => {
        expect(combate1.getContrincante2()).to.be.equal(Ironman);
      });
      it('combate1.setContricante2(Goku);', () => {
        combate1.setContricante2(Goku);
        expect(combate1.getContrincante2()).to.be.equal(Goku);
        combate1.setContricante2(Ironman);
      });
    });

    describe('Funciona la funcion dañoAtaque(personajeAtacante)', () => {
      it('expect(Math.trunc(combate1.dañoAtaque(1))).to.be.equal(102);', () => {
        expect(Math.trunc(combate1.dañoAtaque(1))).to.be.equal(102);
      });
      it('expect(Math.trunc(combate1.dañoAtaque(2))).to.be.equal(25);', () => {
        expect(Math.trunc(combate1.dañoAtaque(2))).to.be.equal(25);
      });
      it('expect(Math.trunc(combate2.dañoAtaque(1))).to.be.equal(25);', () => {
        expect(Math.trunc(combate2.dañoAtaque(1))).to.be.equal(25);
      });
      it('expect(Math.trunc(combate3.dañoAtaque(2))).to.be.equal(32);', () => {
        expect(Math.trunc(combate3.dañoAtaque(2))).to.be.equal(32);
      });
      it('expect(Math.trunc(combate4.dañoAtaque(1))).to.be.equal(37);', () => {
        expect(Math.trunc(combate4.dañoAtaque(1))).to.be.equal(37);
      });
      it('expect(Math.trunc(combate5.dañoAtaque(2))).to.be.equal(65);', () => {
        expect(Math.trunc(combate5.dañoAtaque(2))).to.be.equal(65);
      });
    });

    describe('Funciona la funcion start()', () => {
      it('combate3.start();', () => {
        console.log("Simulación del combate 3\n");
        combate3.start();
      });
      it('combate5.start();', () => {
        console.log("Simulación del combate 5\n");
        combate5.start();
      });
    });
  });

  const pokedex = new Pokedex([Venusaur, Ironman, Goku, Yoda]);
  describe('Clase Pokedex', () => {
    describe('Se puede instanciar un objeto Pokedex', () => {
      it('expect(pokedex).not.be.equal(null);', () => {
        expect(pokedex).not.be.equal(null);
      });
    });

    describe('Funciona el get de el contenido de la pokedex', () => {
      it('expect(pokedex.getPersonajes()).to.deep.equal([Venusaur, Ironman, Goku, Yoda]);', () => {
        expect(pokedex.getPersonajes()).to.deep.equal([Venusaur, Ironman, Goku, Yoda]);
      });
    });

    describe('Funciona añadir y quitar personajes de la Pokedex', () => {
      it('pokedex.añadirPersonaje(Batman);', () => {
        pokedex.añadirPersonaje(Batman);
        expect(pokedex.getPersonajes()).to.deep.equal([Venusaur, Ironman, Goku, Yoda, Batman]);
      });

      it('pokedex.quitarPersonaje(Goku);', () => {
        pokedex.quitarPersonaje(Goku);
        expect(pokedex.getPersonajes()).to.deep.equal([Venusaur, Ironman, Yoda, Batman]);
      });
    });
  });
});
