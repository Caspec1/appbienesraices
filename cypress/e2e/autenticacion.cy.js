describe('Probar la autenticación', () => {
    it('Prueba la autenticación en /login', () => {
        cy.visit('http://localhost:8000/login');

        cy.get('[data-cy="heading-login"]').should('exist');
        cy.get('[data-cy="heading-login"]').should('have.text', 'Iniciar Sesión');

        cy.get('[data-cy="formulario-login"]').should('exist');

        cy.get('[data-cy="formulario-login"]').submit();

        cy.get('[data-cy="alerta-login"]').should('exist');
        cy.get('[data-cy="alerta-login"]').eq(0).should('have.class', 'alerta').and('have.class', 'error');
        
        cy.get('[data-cy="alerta-login"]').eq(1).should('have.class', 'alerta').and('have.class', 'error');
    })
});