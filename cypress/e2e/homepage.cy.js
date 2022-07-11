/// <references types="cypress" />

describe('Carga la página principal', () => {
  it('Prueba el Header de la página principal', () => {
    cy.visit('http://localhost:8000/')

    cy.get('[data-cy="heading-sitio"]').should('exist');
    cy.get('[data-cy="heading-sitio"]').invoke('text').should('equal', 'Venta de casas y Departamentos Exclusivos de Lujo');
    cy.get('[data-cy="heading-sitio"]').invoke('text').should('not.equal', 'Bienes Raices');

  })
  it('Prueba el header de los iconos', () => {
    cy.get('[data-cy="heading-nosotros"]').should('exist');
    cy.get('[data-cy="heading-nosotros"]').should('have.prop', 'tagName').should('equal', 'H2');
  })
  it('Selecciona los iconos', () => {
    cy.get('[data-cy="iconos-nosotros"]').should('exist');
    cy.get('[data-cy="iconos-nosotros"]').find('.icono').should('have.length', 3);
    cy.get('[data-cy="iconos-nosotros"]').find('.icono').should('not.have.length', 4);
  })
  it('Prueba sección de propiedades', () => {
    cy.get('[data-cy="heading-propiedades"]').should('exist');
    cy.get('[data-cy="listado-propiedades"]').should('exist');
    cy.get('[data-cy="listado-propiedades"]').find('.anuncio').should('have.length', 2);
    cy.get('[data-cy="anuncio"]').should('exist');
    cy.get('[data-cy="enlace-propiedad"]').should('exist');
    cy.get('[data-cy="enlace-propiedad"]').should('have.class', 'boton-amarillo-block');
    cy.get('[data-cy="enlace-propiedad"]').should('not.have.class', 'boton-verde-block');

    cy.get('[data-cy="enlace-propiedad"]').first().invoke('text').should('equal', 'Ver más sobre la propiedad');
    cy.get('[data-cy="enlace-propiedad"]').first().click();

    cy.get('[data-cy="titulo-propiedad"]').should('exist');

    cy.wait(1000);
    cy.go('back');
  })

  it('Prueba routing hacia todas las propiedades', () => {
    cy.get('[data-cy="todas-propiedades"]').should('exist');
    cy.get('[data-cy="todas-propiedades"]').should('have.class', 'boton-verde');
    cy.get('[data-cy="todas-propiedades"]').invoke('attr', 'href').should('equal', '/propiedades');
    cy.get('[data-cy="todas-propiedades"]').click();

    cy.get('[data-cy="heading-propiedades"]').should('exist');
    cy.get('[data-cy="heading-propiedades"]').invoke('text').should('equal', 'Casas y Depas en Venta');

    cy.wait(1000);
    cy.go('back');
  })
  it('Prueba bloque de contacto', () => {
    cy.get('[data-cy="heading-contacto"]').should('exist');
    cy.get('[data-cy="heading-contacto"]').invoke('text').should('equal', 'Encuentra la casa de tus sueños');

    cy.get('[data-cy="texto-contacto"]').should('exist');
    cy.get('[data-cy="texto-contacto"]').invoke('text').should('equal', 'Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad');

    cy.get('[data-cy="enlace-contacto"]').should('exist');
    cy.get('[data-cy="enlace-contacto"]').should('have.class', 'boton-amarillo');
    cy.get('[data-cy="enlace-contacto"]').invoke('text').should('equal', 'Cotáctanos');
    cy.get('[data-cy="enlace-contacto"]').invoke('attr', 'href').should('equal', '/contacto');
    cy.get('[data-cy="enlace-contacto"]').click();

    cy.wait(1000);
    cy.go('back');
  })

  it('Probando blog y testimoniales', () => {
    cy.get('[data-cy="blog"]').should('exist');
    cy.get('[data-cy="blog"]').find('h3').invoke('text').should('equal', 'Nuestro Blog');
    cy.get('[data-cy="blog"]').find('h3').invoke('text').should('not.equal', 'Blog');
    cy.get('[data-cy="blog"]').find('img').should('have.length', 2);



    cy.get('[data-cy="testimoniales"]').should('exist');
    cy.get('[data-cy="testimoniales"]').find('h3').invoke('text').should('equal', 'Testimoniales');
    cy.get('[data-cy="testimoniales"]').find('h3').invoke('text').should('not.equal', 'Nuestros Testimoniales');

  })
  
})