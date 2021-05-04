
function imprimirDatos(nombre, altura) {
    var dato = `<h6> hola ${nombre} tu altura es ${altura}</h6>`
    return dato;
}

function muestraNombre() {
    var valor = document.getElementById("datos");
    valor.innerHTML = imprimirDatos("Samuel", 1.90)
}

muestraNombre();

nombres = ['samuel', 'adonay', 'samus'];

for (i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br/>');
}

nombres.forEach((nombres) =>
    document.write(nombres + '<br/>'));

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad, this.propiedades);
    },
    propiedades: "Valor Aleatorio"
};

document.write(`<h1>El modelo es ${coche.modelo}</h1>`);

coche.mostrarDatos();

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola a todos";
        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo');
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});