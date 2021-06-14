Feature: PruebaFalabella

    Scenario: busqueda producto Xbox Series
        Given accedo a sitio web google.cl
        When ingreso a sitio falabella mediante el buscador
        When busco el producto solicitado
        When agrego producto al carro con garantia 2 años
        When adiciono otro producto mas 
        Then Deberia ver la segunda opción de despacho
