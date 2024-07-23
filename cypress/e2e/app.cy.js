describe('change pwd', () => {
  const config = { ssid: '', pwd: '' }

  it('logs in', () => {
    cy.visit('http://192.168.10.1')
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('#login').click()
  })

})
