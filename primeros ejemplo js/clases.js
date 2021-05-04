class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad() {
        this.velocidad += 1;
    }

    reducirVelocidad() {
        this.velocidad -= 1;
    }

}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura=5;
    }

    mostrarAltura(){
        return "La altura del bus es"+this.altura;
    }
}

var choche1 =new Coche("BMW", 200, 2017);
var choche2 =new Coche("Audi", 100, 201);
var choche3 =new Coche("Mercedes", 200, 2017);
var choche4 =new Coche("Renaul", 200, 2017);

console.log(choche1);