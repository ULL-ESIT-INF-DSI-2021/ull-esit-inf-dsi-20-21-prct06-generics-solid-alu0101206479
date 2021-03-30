import 'mocha';
import {expect} from 'chai';
import {Velocidad} from '../src/ejercicio-2/velocidad';
import {Masa} from '../src/ejercicio-2/masa';

describe('Pruebas del Ejercicio 2 - Conversor de unidades', () => {

  const velocidad1 = new Velocidad(74, "Millas/h");
  const velocidad2 = new Velocidad(74, "Kilometros/h");
  const velocidaderror = new Velocidad(74, "Millas/minuto");
  describe('Clase Velocidad', () => {
    describe('Funciona los getters y setters', () => {
      it('expect(velocidad1.cantidad).to.be.equal(74);', () => {
        expect(velocidad1.cantidad).to.be.equal(74);
      });
      it('velocidad2.cantidad = 80;', () => {
        velocidad2.cantidad = 80;
        expect(velocidad2.cantidad).to.be.equal(80);
        velocidad2.cantidad = 74;
      });
      it('expect(velocidad1.unidad).to.be.equal("Millas/h");', () => {
        expect(velocidad1.unidad).to.be.equal("Millas/h");
      });
      it('velocidad2.unidad = "Millas/h";', () => {
        velocidad2.unidad = "Millas/h";
        expect(velocidad2.unidad).to.be.equal("Millas/h");
        velocidad2.unidad = "Kilometros/h";
      });
    });

    describe('Funciona el conversor', () => {
      it('velocidad1.conversor("Kilometros/h");', () => {
        velocidad1.conversor("Kilometros/h");
        expect(Math.trunc(velocidad1.cantidad)).to.be.equal(119);
        expect(velocidad1.unidad).to.be.equal("Kilometros/h");
      });
      it('velocidad2.conversor("Millas/h");', () => {
        velocidad2.conversor("Millas/h");
        expect(Math.trunc(velocidad2.cantidad)).to.be.equal(45);
        expect(velocidad2.unidad).to.be.equal("Millas/h");
      });
      it('¡ERROR!', () => {
        console.log(`\n`);
        velocidaderror.conversor("Millas/h");
      });
    });
  });

  const masa1 = new Masa(74, "Kilogramos");
  const masa2 = new Masa(74000, "Gramos");
  const masaerror = new Masa(74, "Millas/minuto");
  describe('Clase Masa', () => {
    describe('Funciona los getters y setters', () => {
      it('expect(masa1.cantidad).to.be.equal(74);', () => {
        expect(masa1.cantidad).to.be.equal(74);
      });
      it('masa2.cantidad = 80;', () => {
        masa2.cantidad = 80;
        expect(masa2.cantidad).to.be.equal(80);
        masa2.cantidad = 74000;
      });
      it('expect(masa1.unidad).to.be.equal("Kilogramos");', () => {
        expect(masa1.unidad).to.be.equal("Kilogramos");
      });
      it('masa2.unidad = "Kilogramos";', () => {
        masa2.unidad = "Kilogramos";
        expect(masa2.unidad).to.be.equal("Kilogramos");
        masa2.unidad = "Gramos";
      });
    });

    describe('Funciona el conversor', () => {
      it('masa1.conversor("Gramos");', () => {
        masa1.conversor("Gramos");
        expect(Math.trunc(masa1.cantidad)).to.be.equal(74000);
        expect(masa1.unidad).to.be.equal("Gramos");
      });
      it('masa2.conversor("Kilogramos");', () => {
        masa2.conversor("Kilogramos");
        expect(Math.trunc(masa2.cantidad)).to.be.equal(74);
        expect(masa2.unidad).to.be.equal("Kilogramos");
      });
      it('¡ERROR!', () => {
        console.log(`\n`);
        masaerror.conversor("Kilogramos");
      });
    });
  });
});
