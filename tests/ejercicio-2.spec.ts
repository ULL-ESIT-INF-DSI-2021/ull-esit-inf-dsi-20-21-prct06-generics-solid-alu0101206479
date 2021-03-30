import 'mocha';
import {expect} from 'chai';
import {Velocidad} from '../src/ejercicio-2/velocidad';
import {Masa} from '../src/ejercicio-2/masa';
import {Longitud} from '../src/ejercicio-2/longitud';

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
  const masaerror = new Masa(74, "Miligramos");
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

  const longitud1 = new Longitud(74, "Metros");
  const longitud2 = new Longitud(7400, "Centímetros");
  const longituderror = new Longitud(74, "Milímetros");
  describe('Clase Longitud', () => {
    describe('Funciona los getters y setters', () => {
      it('expect(longitud1.cantidad).to.be.equal(74);', () => {
        expect(longitud1.cantidad).to.be.equal(74);
      });
      it('longitud2.cantidad = 80;', () => {
        longitud2.cantidad = 80;
        expect(longitud2.cantidad).to.be.equal(80);
        longitud2.cantidad = 7400;
      });
      it('expect(longitud1.unidad).to.be.equal("Metros");', () => {
        expect(longitud1.unidad).to.be.equal("Metros");
      });
      it('longitud2.unidad = "Metros";', () => {
        longitud2.unidad = "Metros";
        expect(longitud2.unidad).to.be.equal("Metros");
        longitud2.unidad = "Centímetros";
      });
    });

    describe('Funciona el conversor', () => {
      it('longitud1.conversor("Centímetros");', () => {
        longitud1.conversor("Centímetros");
        expect(Math.trunc(longitud1.cantidad)).to.be.equal(7400);
        expect(longitud1.unidad).to.be.equal("Centímetros");
      });
      it('longitud2.conversor("Metros");', () => {
        longitud2.conversor("Metros");
        expect(Math.trunc(longitud2.cantidad)).to.be.equal(74);
        expect(longitud2.unidad).to.be.equal("Metros");
      });
      it('¡ERROR!', () => {
        console.log(`\n`);
        longituderror.conversor("Metros");
      });
    });
  });
});
