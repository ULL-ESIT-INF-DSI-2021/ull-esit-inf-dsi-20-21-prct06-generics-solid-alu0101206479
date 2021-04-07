import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from '../src/ejercicio-clase/ImperialLength';

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
});
