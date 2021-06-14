const examplePage = require('../soporte/paginas/elementos.js');
const {Given, When, And, Then} = require('cucumber');
const { Selector } = require('testcafe');

Given ('accedo a sitio web google.cl', async function(){
    await testController.navigateTo('https://google.cl');
    try {
        await testController.maximizeWindow();
    }
    catch(error) {
        console.log(error);
    }  
});
When ('ingreso a sitio falabella mediante el buscador', async function(){
    await testController.typeText(examplePage.elements.campoGoogle(), 'Falabella')
            .wait(2000)
            .pressKey('enter')
            .wait(2000)
            .click(Selector('h3').withText('Lo encontré en Falabella.com'));
});
When ('busco el producto solicitado', async function(){
    try {
        await testController.click(examplePage.elements.botonCerrarVentana());
    }
    catch(error) {
        console.log(error);
    }
    await testController.wait(5000)
            .typeText(examplePage.elements.campobuscadorProductos(), "Consola XBOX Series");
    await testController.click(examplePage.elements.botonbuscadorProductos()).wait(2000);

    try {
        await testController.click(examplePage.elements.consolaElegida());
    }
    catch(error) {
        console.log(error);
    }
});
When ('agrego producto al carro con garantia 2 años', async function(){
    await testController.wait(7000)
            .click(examplePage.elements.agregarBolsa())
            .wait(5000);

            await t.expect(examplePage.elements.validarModal()).ok();
            await t.click(examplePage.elements.garantiaDosAnios())
            .click(examplePage.elements.verBolsa())
            .wait(5000);
});
When ('adiciono otro producto mas', async function(){
    await testController.click(examplePage.elements.incrementarProductos())
            .click(examplePage.elements.continuarCompra())
            .wait(5000);
});
Then ('Deberia ver la segunda opción de despacho', async function(){
    await testController.expect(examplePage.elements.ValidarDespacho()).ok();
});