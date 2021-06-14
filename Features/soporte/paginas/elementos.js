const {Selector} = require('testcafe');

const campoGoogle = Selector('input[title="Buscar"]');
const campobuscadorProductos = Selector('.SearchBar-module_searchBar__Input__3xQbs');
const botonbuscadorProductos = Selector('.SearchBar-module_searchBtnIcon__VR3f5');
const botonCerrarVentana = Selector('.dy-lb-close');  
const consolaElegida = Selector('img[alt = \'MICROSOFT - Consola Xbox Series S - Ssd 512Gb\']');
const agregarBolsa = Selector('button[class = \'jsx-1816208196 button button-primary button-primary-xtra-large\']');
const validarModal = Selector('span').withText('Producto(s) agregado(s) a la bolsa de compras');
const garantiaDosAnios = Selector('span').withText('Consolas 2 Años $ 54.900');
const verBolsa = Selector('#linkButton');
const incrementarProductos = Selector('button[class*=\'increment\']');
const continuarCompra = Selector('button').withText('Continuar compra');
const ValidarDespacho = Selector('div[class=\'jsx-3748498677 timeline-circle timeline-circle-inProgress timeline-circle-1\']')

exports.elements = {
        campoGoogle: function() {
            return Selector('input[title="Buscar"]');
        },
        campobuscadorProductos: function() {
            return Selector('.SearchBar-module_searchBar__Input__3xQbs');
        },
        botonbuscadorProductos: function() {
            return Selector('.SearchBar-module_searchBtnIcon__VR3f5');
        },
        botonCerrarVentana: function() {
            return Selector('.dy-lb-close');  
        },
        consolaElegida: function() {
            return Selector('img[alt = \'MICROSOFT - Consola Xbox Series S - Ssd 512Gb\']');
        },
        agregarBolsa: function() {
            Selector('button[class = \'jsx-1816208196 button button-primary button-primary-xtra-large\']');
        },
        validarModal: function() {
            return Selector('span').withText('Producto(s) agregado(s) a la bolsa de compras');
        },
        garantiaDosAnios: function() {
            return Selector('span').withText('Consolas 2 Años $ 54.900');
        },
        verBolsa: function() {
            return Selector('#linkButton');
        },
        incrementarProductos: function() {
            Selector('button[class*=\'increment\']');
        },
        continuarCompra: function() {
            return Selector('button').withText('Continuar compra');
        },
        ValidarDespacho: function() {
            return Selector('div[class=\'jsx-3748498677 timeline-circle timeline-circle-inProgress timeline-circle-1\']')
        },
    }
    