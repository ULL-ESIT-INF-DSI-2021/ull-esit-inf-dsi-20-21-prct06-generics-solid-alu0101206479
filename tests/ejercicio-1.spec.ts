import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Marvel} from '../src/ejercicio-1/marvel';
import {DC} from '../src/ejercicio-1/dc';
import {StarWars} from '../src/ejercicio-1/starwars';

describe('Pruebas del Ejercicio 1 - El combate definitivo', () => {
  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80]);
  const Ironman = new Marvel("Iron Man", 110, 1.92, "Superheroe", [85, 80, 110, 150]);
  const Batman = new DC("Batman", 90, 1.90, "Superheroe", [90, 85, 120, 160]);
  const Yoda = new StarWars("Yoda", 30, 1, "Verde", [110, 70, 150, 130]);
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
    });

    describe('Funcionan los getters y setters', () => {
      it('expect(Venusaur.getNombre()).to.be.equal("Venusaur");', () => {
        expect(Venusaur.getNombre()).to.be.equal("Venusaur");
      });
      it('expect(Venusaur.getPeso()).to.be.equal(110);', () => {
        expect(Ironman.getPeso()).to.be.equal(110);
      });
      it('Batman.setPeso(50);', () => {
        Batman.setPeso(50);
        expect(Batman.getPeso()).to.be.equal(50);
        Batman.setPeso(90);
      });
      it('expect(Venusaur.getAltura()).to.be.equal(2);', () => {
        expect(Venusaur.getAltura()).to.be.equal(2);
      });
      it('expect(Venusaur.getTipo()).to.be.equal("Planta");', () => {
        expect(Venusaur.getTipo()).to.be.equal("Planta");
      });
      it('Venusaur.setTipo("Fuego");', () => {
        Venusaur.setTipo("Fuego");
        expect(Venusaur.getTipo()).to.be.equal("Fuego");
        Venusaur.setTipo("Planta");
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().ataque).to.be.equal(82);', () => {
        expect(Venusaur.getEstadisticasBasicas().ataque).to.be.equal(82);
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().defensa).to.be.equal(83);', () => {
        expect(Venusaur.getEstadisticasBasicas().defensa).to.be.equal(83);
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().velocidad).to.be.equal(80);', () => {
        expect(Venusaur.getEstadisticasBasicas().velocidad).to.be.equal(80);
      });
      it('expect(expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(80);', () => {
        expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(80);
      });
    });

    describe('Funcionan el setHP', () => {
      it('expect(expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(15);', () => {
        Venusaur.setHP(15);
        expect(Venusaur.getEstadisticasBasicas().hp).to.be.equal(15);
      });
      Venusaur.setHP(80);
    });
  });
});
