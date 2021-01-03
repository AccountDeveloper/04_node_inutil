var hbs = require('hbs');
//HELPERS
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (eltexto) => {
    let palabras = eltexto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});