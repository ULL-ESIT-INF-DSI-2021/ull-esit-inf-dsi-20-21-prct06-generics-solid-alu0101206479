import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';

describe('Pruebas del Ejercicio 1 - El combate definitivo', () => {
  const Venusaur = new Pokemon("Venusaur", 100, 2.0, "Planta", [82, 83, 80, 80]);
  describe('Clase Pokemon', () => {
    describe('Se puede instanciar un Pokemon', () => {
      it('expect(Venusaur).not.be.equal(null);', () => {
        expect(Venusaur).not.be.equal(null);
      });
    });

    describe('Funcionan los getters y setters', () => {
      it('expect(Venusaur.getNombre()).to.be.equal("Venusaur");', () => {
        expect(Venusaur.getNombre()).to.be.equal("Venusaur");
      });
      it('expect(Venusaur.getPeso()).to.be.equal(100);', () => {
        expect(Venusaur.getPeso()).to.be.equal(100);
      });
      it('Venusaur.setPeso(50);', () => {
        Venusaur.setPeso(50);
        expect(Venusaur.getPeso()).to.be.equal(50);
        Venusaur.setPeso(100);
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
