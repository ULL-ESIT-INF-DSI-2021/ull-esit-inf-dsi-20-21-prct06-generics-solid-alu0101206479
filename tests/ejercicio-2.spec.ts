import 'mocha';
import {expect} from 'chai';
import {Velocidad} from '../src/ejercicio-2/velocidad';
import {Masa} from '../src/ejercicio-2/masa';
import {Longitud} from '../src/ejercicio-2/longitud';
import {Tiempo} from '../src/ejercicio-2/tiempo';
import {Temperatura} from '../src/ejercicio-2/temperatura';
import {Fuerza} from '../src/ejercicio-2/fuerza';
import {Volumen} from '../src/ejercicio-2/volumen';

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

  const tiempo1 = new Tiempo(74, "Horas");
  const tiempo2 = new Tiempo(7380, "Minutos");
  const tiempoerror = new Tiempo(74, "Segundos");
  describe('Clase Tiempo', () => {
    describe('Funciona los getters y setters', () => {
      it('expect(tiempo1.cantidad).to.be.equal(74);', () => {
        expect(tiempo1.cantidad).to.be.equal(74);
      });
      it('tiempo2.cantidad = 80;', () => {
        tiempo2.cantidad = 80;
        expect(tiempo2.cantidad).to.be.equal(80);
        tiempo2.cantidad = 7380;
      });
      it('expect(tiempo1.unidad).to.be.equal("Horas");', () => {
        expect(tiempo1.unidad).to.be.equal("Horas");
      });
      it('tiempo2.unidad = "Horas";', () => {
        tiempo2.unidad = "Horas";
        expect(tiempo2.unidad).to.be.equal("Horas");
        tiempo2.unidad = "Minutos";
      });
    });

    describe('Funciona el conversor', () => {
      it('tiempo1.conversor("Minutos");', () => {
        tiempo1.conversor("Minutos");
        expect(Math.trunc(tiempo1.cantidad)).to.be.equal(4440);
        expect(tiempo1.unidad).to.be.equal("Minutos");
      });
      it('tiempo2.conversor("Horas");', () => {
        tiempo2.conversor("Horas");
        expect(Math.trunc(tiempo2.cantidad)).to.be.equal(123);
        expect(tiempo2.unidad).to.be.equal("Horas");
      });
      it('¡ERROR!', () => {
        console.log(`\n`);
        tiempoerror.conversor("Horas");
      });
    });
  });

  const temperatura1 = new Temperatura(74, "Grados Celsius");
  const temperatura2 = new Temperatura(74, "Grados Fahrenheit");
  const temperaturaerror = new Temperatura(74, "Kelvin");
  describe('Clase Temperatura', () => {
    describe('Funciona los getters y setters', () => {
      it('expect(temperatura1.cantidad).to.be.equal(74);', () => {
        expect(temperatura1.cantidad).to.be.equal(74);
      });
      it('temperatura2.cantidad = 80;', () => {
        temperatura2.cantidad = 80;
        expect(temperatura2.cantidad).to.be.equal(80);
        temperatura2.cantidad = 74;
      });
      it('expect(temperatura1.unidad).to.be.equal("Grados Celsius");', () => {
        expect(temperatura1.unidad).to.be.equal("Grados Celsius");
      });
      it('temperatura2.unidad = "Grados Celsius";', () => {
        temperatura2.unidad = "Grados Celsius";
        expect(temperatura2.unidad).to.be.equal("Grados Celsius");
        temperatura2.unidad = "Grados Fahrenheit";
      });
    });

    describe('Funciona el conversor', () => {
      it('temperatura1.conversor("Grados Fahrenheit");', () => {
        temperatura1.conversor("Grados Fahrenheit");
        expect(Math.trunc(temperatura1.cantidad)).to.be.equal(165);
        expect(temperatura1.unidad).to.be.equal("Grados Fahrenheit");
      });
      it('temperatura2.conversor("Grados Celsius");', () => {
        temperatura2.conversor("Grados Celsius");
        expect(Math.trunc(temperatura2.cantidad)).to.be.equal(23);
        expect(temperatura2.unidad).to.be.equal("Grados Celsius");
      });
      it('¡ERROR!', () => {
        console.log(`\n`);
        temperaturaerror.conversor("Grados Celsius");
      });
    });
  });

  const fuerza1 = new Fuerza(74, "Kilopondios");
  const fuerza2 = new Fuerza(74, "Newtons");
  const fuerzaerror = new Fuerza(74, "N");
  describe('Clase Fuerza', () => {
    describe('Funciona los getters y setters', () => {
      it('expect(fuerza1.cantidad).to.be.equal(74);', () => {
        expect(fuerza1.cantidad).to.be.equal(74);
      });
      it('fuerza2.cantidad = 80;', () => {
        fuerza2.cantidad = 80;
        expect(fuerza2.cantidad).to.be.equal(80);
        fuerza2.cantidad = 74;
      });
      it('expect(fuerza1.unidad).to.be.equal("Kilopondios");', () => {
        expect(fuerza1.unidad).to.be.equal("Kilopondios");
      });
      it('fuerza2.unidad = "Kilopondios";', () => {
        fuerza2.unidad = "Kilopondios";
        expect(fuerza2.unidad).to.be.equal("Kilopondios");
        fuerza2.unidad = "Newtons";
      });
    });

    describe('Funciona el conversor', () => {
      it('fuerza1.conversor("Newtons");', () => {
        fuerza1.conversor("Newtons");
        expect(Math.trunc(fuerza1.cantidad)).to.be.equal(725);
        expect(fuerza1.unidad).to.be.equal("Newtons");
      });
      it('fuerza2.conversor("Kilopondios");', () => {
        fuerza2.conversor("Kilopondios");
        expect(Math.trunc(fuerza2.cantidad)).to.be.equal(7);
        expect(fuerza2.unidad).to.be.equal("Kilopondios");
      });
      it('¡ERROR!', () => {
        console.log(`\n`);
        fuerzaerror.conversor("Kilopondios");
      });
    });
  });

  const volumen1 = new Volumen(74, "Litros");
  const volumen2 = new Volumen(74000, "Mililitros");
  const volumenerror = new Volumen(74, "N");
  describe('Clase Volumen', () => {
    describe('Funciona los getters y setters', () => {
      it('expect(volumen1.cantidad).to.be.equal(74);', () => {
        expect(volumen1.cantidad).to.be.equal(74);
      });
      it('volumen2.cantidad = 80;', () => {
        volumen2.cantidad = 80;
        expect(volumen2.cantidad).to.be.equal(80);
        volumen2.cantidad = 74000;
      });
      it('expect(volumen1.unidad).to.be.equal("Litros");', () => {
        expect(volumen1.unidad).to.be.equal("Litros");
      });
      it('volumen2.unidad = "Litros";', () => {
        volumen2.unidad = "Litros";
        expect(volumen2.unidad).to.be.equal("Litros");
        volumen2.unidad = "Mililitros";
      });
    });

    describe('Funciona el conversor', () => {
      it('volumen1.conversor("Mililitros");', () => {
        volumen1.conversor("Mililitros");
        expect(Math.trunc(volumen1.cantidad)).to.be.equal(74000);
        expect(volumen1.unidad).to.be.equal("Mililitros");
      });
      it('volumen2.conversor("Litros");', () => {
        volumen2.conversor("Litros");
        expect(Math.trunc(volumen2.cantidad)).to.be.equal(74);
        expect(volumen2.unidad).to.be.equal("Litros");
      });
      it('¡ERROR!', () => {
        console.log(`\n`);
        volumenerror.conversor("Litros");
      });
    });
  });
});
