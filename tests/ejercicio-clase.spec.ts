import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from '../src/ejercicio-clase/ImperialLength';
import {MetricLength} from '../src/ejercicio-clase/MetricLength';
import {AdapterLength} from '../src/ejercicio-clase/AdapterLength';
import {ImperialMass} from '../src/ejercicio-clase/ImperialMass';


describe('Pruebas del ejercicio de clase del 7 de abril', () => {
  const longitudImperial = new ImperialLength();
  longitudImperial.setPies(5833);
  describe('Clase ImperialLength', () => {
    describe('Funciona los gets en las distintas unidades del sistema imperial', () => {
      it('expect(longitudImperial.getLongitudEnPulgadas()).to.be.equal(69996);', () => {
        expect(longitudImperial.getLongitudEnPulgadas()).to.be.equal(69996);
      });
      it('expect(Math.floor(longitudImperial.getLongitudEnPies())).to.be.equal(5833);', () => {
        expect(Math.floor(longitudImperial.getLongitudEnPies())).to.be.equal(5833);
      });
      it('expect(Math.floor(longitudImperial.getLongitudEnYardas())).to.be.equal(1944);', () => {
        expect(Math.floor(longitudImperial.getLongitudEnYardas())).to.be.equal(1944);
      });
      it('expect(Math.floor(longitudImperial.getLongitudEnMillas())).to.be.equal(1);', () => {
        expect(Math.floor(longitudImperial.getLongitudEnMillas())).to.be.equal(1);
      });
    });
  });

  const longitudMetrica = new MetricLength(700000);
  describe('Clase MetricLength', () => {
    describe('Funciona los gets en las distintas unidades del sistema metrico', () => {
      it('expect(longitudMetrica.getLongitudEnCentimetros()).to.be.equal(700000);', () => {
        expect(longitudMetrica.getLongitudEnCentimetros()).to.be.equal(700000);
      });
      it('expect(longitudMetrica.getLongitudEnMetros()).to.be.equal(7000);', () => {
        expect(longitudMetrica.getLongitudEnMetros()).to.be.equal(7000);
      });
      it('expect(longitudMetrica.getLongitudEnKilometros()).to.be.equal(7);', () => {
        expect(longitudMetrica.getLongitudEnKilometros()).to.be.equal(7);
      });
    });
  });

  const longitudImperial2 = new ImperialLength();
  longitudImperial2.setMillas(100);
  const adaptadorLength5833Pies = new AdapterLength(longitudImperial);
  const adaptadorLength100Millas = new AdapterLength(longitudImperial2);
  describe('Clase AdapterLength', () => {
    describe('Funciona el paso del sistema imperial a metrico con 5833 pies', () => {
      it('expect(adaptadorLength5833Pies.getLongitudEnCentimetros()).to.be.equal(6400434.24);', () => {
        expect(adaptadorLength5833Pies.getLongitudEnCentimetros()).to.be.equal(6400434.24);
      });
      it('expectMath.floor((adaptadorLength5833Pies.getLongitudEnMetros())).to.be.equal(76548);', () => {
        expect(Math.floor(adaptadorLength5833Pies.getLongitudEnMetros())).to.be.equal(76548);
      });
      it('expect(adaptadorLength5833Pies.getLongitudEnKilometros()).to.be.equal(0.001);', () => {
        expect(adaptadorLength5833Pies.getLongitudEnKilometros()).to.be.equal(0.001);
      });
    });

    describe('Funciona el paso del sistema imperial a metrico con 100 millas', () => {
      it('expect(adaptadorLength100Millas.getLongitudEnCentimetros()).to.be.equal(579363840);', () => {
        expect(adaptadorLength100Millas.getLongitudEnCentimetros()).to.be.equal(579363840);
      });
      it('expectMath.floor((adaptadorLength100Millas.getLongitudEnMetros())).to.be.equal(6929133);', () => {
        expect(Math.floor(adaptadorLength100Millas.getLongitudEnMetros())).to.be.equal(6929133);
      });
      it('expect(adaptadorLength100Millas.getLongitudEnKilometros()).to.be.equal(0.001);', () => {
        expect(adaptadorLength100Millas.getLongitudEnKilometros()).to.be.equal(0.001);
      });
    });
  });

  const masaImperial = new ImperialMass();
  masaImperial.setLibras(100);
  describe('Clase MassLength', () => {
    describe('Funciona los gets en las distintas unidades del sistema imperial', () => {
      it('expect(masaImperial.getMasaEnOnzas()).to.be.equal(1600);', () => {
        expect(masaImperial.getMasaEnOnzas()).to.be.equal(1600);
      });
      it('expect(masaImperial.getMasaEnLibras()).to.be.equal(100);', () => {
        expect(masaImperial.getMasaEnLibras()).to.be.equal(100);
      });
      it('expect(masaImperial.getMasaEnPiedras()).to.be.equal(7.142857142857143);', () => {
        expect(masaImperial.getMasaEnPiedras()).to.be.equal(7.142857142857143);
      });
      it('expect(masaImperial.getMasaEnCentenas()).to.be.equal(0.8928571428571429);', () => {
        expect(masaImperial.getMasaEnCentenas()).to.be.equal(0.8928571428571429);
      });
      it('expect(masaImperial.getMasaEnToneladas()).to.be.equal(0.04535918807053354);', () => {
        expect(masaImperial.getMasaEnToneladas()).to.be.equal(0.04535918807053354);
      });
    });
  });
});
