import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from '../src/ejercicio-clase/ImperialLength';
import {MetricLength} from '../src/ejercicio-clase/MetricLength';

describe('Pruebas del ejercicio de clase del 7 de abril', () => {
  const longitudImperial = new ImperialLength(70000);
  describe('Clase ImperialLength', () => {
    describe('Funciona los gets en las distintas unidades del sistema imperial', () => {
      it('expect(longitudImperial.getLongitudEnPulgadas()).to.be.equal(70000);', () => {
        expect(longitudImperial.getLongitudEnPulgadas()).to.be.equal(70000);
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
});
