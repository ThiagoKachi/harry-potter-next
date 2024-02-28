describe('Characters', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to click in a character and redirect to details', () => {
    cy.get('a[href^="/character"]').first().click()

    cy.url().should('include', '/character')
    
    cy.get('a[href^="/"]').first().click()
    cy.url().should('include', '/')
  })

  it('should be able to search a character by name', () => {
    cy.get('input[name=search-character]').type('Harry')

    cy.get('a[href^="/character"]').first().click()

    cy.url().should('include', '/character/1')
  })
})