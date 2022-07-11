/// <references types="cypress" />

describe('Carga la página principal', () => {
    it('Prueba el Header de la página principal', () => {
      cy.visit('http://localhost:8000/')
    })

    it('Prueba la navegación del header', () => {
        cy.get('[data-cy="navegacion-header"]').should('exist');
        cy.get('[data-cy="navegacion-header"]').find('a').should('have.length', 4);
        cy.get('[data-cy="navegacion-header"]').find('a').should('not.have.length', 6);


        cy.get('[data-cy="navegacion-header"]').find('a').eq(0).invoke('attr', 'href').should('equal', '/nosotros');
        cy.get('[data-cy="navegacion-header"]').find('a').eq(0).invoke('text').should('equal', 'Nosotros');


        cy.get('[data-cy="navegacion-header"]').find('a').eq(1).invoke('attr', 'href').should('equal', '/propiedades');
        cy.get('[data-cy="navegacion-header"]').find('a').eq(1).invoke('text').should('equal', 'Propiedades');


        cy.get('[data-cy="navegacion-header"]').find('a').eq(2).invoke('attr', 'href').should('equal', '/blog');
        cy.get('[data-cy="navegacion-header"]').find('a').eq(2).invoke('text').should('equal', 'Blog');


        cy.get('[data-cy="navegacion-header"]').find('a').eq(3).invoke('attr', 'href').should('equal', '/contacto');
        cy.get('[data-cy="navegacion-header"]').find('a').eq(3).invoke('text').should('equal', 'Contacto');
    })
    it('Prueba la navegación del footer', () => {
        cy.get('[data-cy="navegacion-footer"]').should('exist');
        cy.get('[data-cy="navegacion-footer"]').should('have.prop','class').should('equal', 'navegacion');
        cy.get('[data-cy="navegacion-footer"]').find('a').should('have.length', 4);
        cy.get('[data-cy="navegacion-footer"]').find('a').should('not.have.length', 6);


        cy.get('[data-cy="navegacion-footer"]').find('a').eq(0).invoke('attr', 'href').should('equal', '/nosotros');
        cy.get('[data-cy="navegacion-footer"]').find('a').eq(0).invoke('text').should('equal', 'Nosotros');


        cy.get('[data-cy="navegacion-footer"]').find('a').eq(1).invoke('attr', 'href').should('equal', '/propiedades');
        cy.get('[data-cy="navegacion-footer"]').find('a').eq(1).invoke('text').should('equal', 'Propiedades');


        cy.get('[data-cy="navegacion-footer"]').find('a').eq(2).invoke('attr', 'href').should('equal', '/blog');
        cy.get('[data-cy="navegacion-footer"]').find('a').eq(2).invoke('text').should('equal', 'Blog');


        cy.get('[data-cy="navegacion-footer"]').find('a').eq(3).invoke('attr', 'href').should('equal', '/contacto');
        cy.get('[data-cy="navegacion-footer"]').find('a').eq(3).invoke('text').should('equal', 'Contacto');


        cy.get('[data-cy="copyright"]').should('have.prop','class').should('equal', 'copyright');

    })
  })