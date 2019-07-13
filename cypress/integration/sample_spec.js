const home_page_url = 'https://celianon.github.io'
const localhost = 'localhost:3000'

describe('My First Test', () => {
  it('Check email form', () => {
    cy.visit(localhost)
    cy.get('input[name="email"]')
      .type('test@gmail.com')
      .should('have.value', 'test@gmail.com')

    cy.get('button[type="submit"]').click()
    cy.get('#alert-dialog-title').get('h6').should('include.text', 'test@gmail.com?')

    cy.contains('Yes').click()
  })
  it('second test', () => {
    console.log(123)
  })
})