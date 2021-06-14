import { Selector } from 'testcafe';

fixture `PruebaFalabella`
.page `https://www.google.com/`

test   
    ('compra-xboxseries', async t => {
        try{
            
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
            
             
            try {
                await t.maximizeWindow();
            }
            catch(error) {
                console.log(error);
            }
            
            
            await t.typeText(campoGoogle, 'Falabella')
            .wait(2000)
            .pressKey('enter')
            .wait(2000)
            .click(Selector('h3').withText('Lo encontré en Falabella.com'));

            try {
                await t.click(botonCerrarVentana);
            }
            catch(error) {
                console.log(error);
            }
            
            await t.wait(5000)
            .typeText(campobuscadorProductos, 'Consola XBOX Series');
            await t.click(botonbuscadorProductos).wait(2000);

            try {
                await t.click(consolaElegida);
            }
            catch(error) {
                console.log(error);
            }
            await t.wait(7000)
            .click(Selector('#testId-modal-close'))
            .click(agregarBolsa)
            .wait(5000);

            await t.expect(validarModal).ok();
            await t.click(garantiaDosAnios)
            .click(verBolsa)
            .wait(5000);
            await t.click(incrementarProductos)
            .click(continuarCompra)
            .wait(5000);
            await t.expect(ValidarDespacho).ok();



        }catch(error){
            console.log(error);
            throw error;
        }
    });