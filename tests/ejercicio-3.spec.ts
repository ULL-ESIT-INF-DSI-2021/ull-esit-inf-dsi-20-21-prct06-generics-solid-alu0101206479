import 'mocha';
import {expect} from 'chai';
import {serie} from '../src/ejercicio-3/seriecollection';
import {SerieCollection} from '../src/ejercicio-3/seriecollection';

describe('Pruebas del Ejercicio 3 - DSIflix', () => {
  const serie1 : serie = {nombre: "Prison Break", añoPublicacion: 2005, temporadas: 5};
  const serie2 : serie = {nombre: "Breaking Bad", añoPublicacion: 2008, temporadas: 5};
  const serie3 : serie = {nombre: "La Casa De Papel", añoPublicacion: 2017, temporadas: 4};
  const serie4 : serie = {nombre: "Vis a Vis", añoPublicacion: 2015, temporadas: 4};
  const serie5 : serie = {nombre: "Dark", añoPublicacion: 2017, temporadas: 3};
  const serieColeccion = new SerieCollection([serie1, serie2, serie3, serie4]);
  describe('Clase SerieCollection', () => {
    describe('Funciona el get de la colección de series', () => {
      it('expect(serieColeccion.getColeccion()).to.deep.equal([serie1, serie2, serie3, serie4]);', () => {
        expect(serieColeccion.getColeccion()).to.deep.equal([serie1, serie2, serie3, serie4]);
      });
    });

    describe('Funciona añadir y quitar series de la colección', () => {
      it('serieColeccion.añadirEmision(serie5);', () => {
        serieColeccion.añadirEmision(serie5);
        expect(serieColeccion.getColeccion()).to.deep.equal([serie1, serie2, serie3, serie4, serie5]);
      });

      it('serieColeccion.quitarEmision(serie3);', () => {
        serieColeccion.quitarEmision(serie5);
        expect(serieColeccion.getColeccion()).to.deep.equal([serie1, serie2, serie3, serie4]);
      });
    });

    describe('Mostrar colección', () => {
      it('serieColeccion.imprimirColeccion();', () => {
        console.log(`Colección de series\n`);
        serieColeccion.imprimirColeccion();
      });
    });

    describe('Buscar series en la colección', () => {
      it('serieColeccion.busqueda("Año de publicación", 2008);', () => {
        console.log(`Búsqueda de series publicadas en 2008\n`);
        expect(serieColeccion.busqueda("Año de publicación", 2008)).to.deep.equal([serie2]);
      });

      it('serieColeccion.quitarEmision(serie3);', () => {
        console.log(`Búsqueda de la serie Prison Break\n`);
        expect(serieColeccion.busqueda("Nombre", "Prison Break")).to.deep.equal([serie1]);
      });

      it('serieColeccion.quitarEmision(serie3);', () => {
        console.log(`Búsqueda de series con 4 temporadas\n`);
        expect(serieColeccion.busqueda("Temporadas", 4)).to.deep.equal([serie3, serie4]);
      });
    });
  });
});
