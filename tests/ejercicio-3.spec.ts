import 'mocha';
import {expect} from 'chai';
import {serie} from '../src/ejercicio-3/seriecollection';
import {SerieCollection} from '../src/ejercicio-3/seriecollection';
import {pelicula} from '../src/ejercicio-3/peliculacollection';
import {PeliculaCollection} from '../src/ejercicio-3/peliculacollection';
import {documental} from '../src/ejercicio-3/documentalcollection';
import {DocumentalCollection} from '../src/ejercicio-3/documentalcollection';

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

      it('serieColeccion.quitarEmision(serie5);', () => {
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

      it('serieColeccion.busqueda("Nombre", "Prison Break")', () => {
        console.log(`Búsqueda de la serie Prison Break\n`);
        expect(serieColeccion.busqueda("Nombre", "Prison Break")).to.deep.equal([serie1]);
      });

      it('serieColeccion.busqueda("Temporadas", 4)', () => {
        console.log(`Búsqueda de series con 4 temporadas\n`);
        expect(serieColeccion.busqueda("Temporadas", 4)).to.deep.equal([serie3, serie4]);
      });
    });
  });

  const pelicula1 : pelicula = {nombre: "El lobo de Wall Street", añoPublicacion: 2013, duracionMinutos: 180};
  const pelicula2 : pelicula = {nombre: "Piratas del Caribe: La maldición de la perla negra", añoPublicacion: 2003, duracionMinutos: 143};
  const pelicula3 : pelicula = {nombre: "La Gran Apuesta", añoPublicacion: 2015, duracionMinutos: 130};
  const pelicula4 : pelicula = {nombre: "La Reina de los Lagartos", añoPublicacion: 2019, duracionMinutos: 63};
  const pelicula5 : pelicula = {nombre: "Godzilla vs. Kong", añoPublicacion: 2021, duracionMinutos: 113};
  const peliculaColeccion = new PeliculaCollection([pelicula1, pelicula2, pelicula3, pelicula4]);
  describe('Clase PeliculaCollection', () => {
    describe('Funciona el get de la colección de peliculas', () => {
      it('expect(peliculaColeccion.getColeccion()).to.deep.equal([pelicula1, pelicula2, pelicula3, pelicula4]);', () => {
        expect(peliculaColeccion.getColeccion()).to.deep.equal([pelicula1, pelicula2, pelicula3, pelicula4]);
      });
    });

    describe('Funciona añadir y quitar peliculas de la colección', () => {
      it('peliculaColeccion.añadirEmision(pelicula5);', () => {
        peliculaColeccion.añadirEmision(pelicula5);
        expect(peliculaColeccion.getColeccion()).to.deep.equal([pelicula1, pelicula2, pelicula3, pelicula4, pelicula5]);
      });

      it('peliculaColeccion.quitarEmision(pelicula4);', () => {
        peliculaColeccion.quitarEmision(pelicula4);
        expect(peliculaColeccion.getColeccion()).to.deep.equal([pelicula1, pelicula2, pelicula3, pelicula5]);
      });
    });

    describe('Mostrar colección', () => {
      it('peliculaColeccion.imprimirColeccion();', () => {
        console.log(`Colección de peliculas\n`);
        peliculaColeccion.imprimirColeccion();
      });
    });

    describe('Buscar peliculas en la colección', () => {
      it('peliculaColeccion.busqueda("Año de publicación", 2021);', () => {
        console.log(`Búsqueda de peliculas publicadas en 2021\n`);
        expect(peliculaColeccion.busqueda("Año de publicación", 2021)).to.deep.equal([pelicula5]);
      });

      it('peliculaColeccion.busqueda("Nombre", "La Gran Apuesta")`);', () => {
        console.log(`Búsqueda de la pelicula La Gran Apuesta\n`);
        expect(peliculaColeccion.busqueda("Nombre", "La Gran Apuesta")).to.deep.equal([pelicula3]);
      });

      it('peliculaColeccion.busqueda("Largas", undefined)', () => {
        console.log(`Búsqueda de peliculas largas\n`);
        expect(peliculaColeccion.busqueda("Largas", undefined)).to.deep.equal([pelicula1]);
      });
    });
  });

  const documental1 : documental = {nombre: "Rol & Rol", añoPublicacion: 2021, duracionMinutos: 89};
  const documental2 : documental = {nombre: "Monográfico: Desiertos", añoPublicacion: 2018, duracionMinutos: 29};
  const documental3 : documental = {nombre: "Persia, la historia de Irán", añoPublicacion: 2021, duracionMinutos: 51};
  const documental4 : documental = {nombre: "Visto y no visto", añoPublicacion: 2020, duracionMinutos: 29};
  const documental5 : documental = {nombre: "El abismo libio", añoPublicacion: 2021, duracionMinutos: 57};
  const documentalColeccion = new DocumentalCollection([documental1, documental2, documental3, documental4]);
  describe('Clase PeliculaCollection', () => {
    describe('Funciona el get de la colección de documentales', () => {
      it('expect(documentalColeccion.getColeccion()).to.deep.equal([documental1, documental2, documental3, documental4]);', () => {
        expect(documentalColeccion.getColeccion()).to.deep.equal([documental1, documental2, documental3, documental4]);
      });
    });

    describe('Funciona añadir y quitar documentales de la colección', () => {
      it('documentalColeccion.añadirEmision(documental5);', () => {
        documentalColeccion.añadirEmision(documental5);
        expect(documentalColeccion.getColeccion()).to.deep.equal([documental1, documental2, documental3, documental4, documental5]);
      });

      it('documentalColeccion.quitarEmision(documental3);', () => {
        documentalColeccion.quitarEmision(documental3);
        expect(documentalColeccion.getColeccion()).to.deep.equal([documental1, documental2, documental4, documental5]);
      });
    });

    describe('Mostrar colección', () => {
      it('documentalColeccion.imprimirColeccion();', () => {
        console.log(`Colección de documentales\n`);
        documentalColeccion.imprimirColeccion();
      });
    });

    describe('Buscar documentales en la colección', () => {
      it('documentalColeccion.busqueda("Año de publicación", 2021);', () => {
        console.log(`Búsqueda de documentales publicados en 2021\n`);
        expect(documentalColeccion.busqueda("Año de publicación", 2021)).to.deep.equal([documental1, documental5]);
      });

      it('documentalColeccion.busqueda("Nombre", "Rol & Rol")', () => {
        console.log(`Búsqueda del documental Rol & Rol\n`);
        expect(documentalColeccion.busqueda("Nombre", "Rol & Rol")).to.deep.equal([documental1]);
      });

      it('documentalColeccion.busqueda("Cortos", undefined)', () => {
        console.log(`Búsqueda de documentales cortos\n`);
        expect(documentalColeccion.busqueda("Cortos", undefined)).to.deep.equal([documental2, documental4]);
      });
    });
  });
});