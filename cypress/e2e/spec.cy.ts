describe('Landing screen', () => {
  it('should show landing screen before Angular loads', () => {
    cy.visit('/');
    cy.getByDataCy('landing-screen').should('exist');
    cy.get('app-root').should('not.be.visible');
    cy.wait(1000);
    cy.getByDataCy('landing-screen').should('not.exist');
    cy.get('app-root').should('exist');
  });
});
