describe('TAB navigation', () => {
  beforeEach(() => {
    cy.setCookie('cookieConsent', 'accepted')
    cy.visit('/')
    cy.get('[aria-label="Open messenger"]').click()
  })

  it('navigates through the messenger using the TAB key', () => {
    
  })
})
