context('Busca pelo CEP', () => {
    beforeEach(() => {
        cy.visit('/encontrar-diarista');
    });

    it('botao desabilitado e habilitado', () => {
        cy.get('.MuiOutlinedInput-input').type('1234567');
        const button = cy.get('button').contains(/buscar/i);
        button.should('be.disabled');

        cy.wait(1000);

        cy.get('.MuiOutlinedInput-input').clear().type('12345678');
        button.should('not.be.disabled');
    });

    it('Buscar cep', () => {
        cy.get('.MuiOutlinedInput-input').type('68040210');
        cy.get('button')
            .contains(/buscar/i)
            .click();

        cy.get('div').contains('Santarém').should('be.visible');
    });
});
