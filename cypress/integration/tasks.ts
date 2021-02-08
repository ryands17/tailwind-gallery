it('checks if the home page works', () => {
  cy.visit(Cypress.env('HOST'))
})

it('checks if the cards are loaded', () => {
  cy.wait(3000)
  cy.get('.gallery').should('exist')
  cy.get('.search-box').should('exist')
})

// it('adds an element and successfully updates the remaining count', () => {
//   cy.get('input.new-todo').type('Perform E2E tests{enter}')
//   cy.get('ul.todo-list').children().should('have.length', 3)
//   cy.get('span.todo-count').contains('2 items left', { matchCase: false })
// })

// it('should show only active tasks on clicking the "Active" link', () => {
//   cy.get('ul.filters').find('a').contains('Active', { matchCase: true }).click()
//   cy.get('ul.todo-list').children().should('have.length', 2)

//   // cleanup
//   cy.get('ul.filters').find('a').contains('All', { matchCase: true }).click()
// })

// it('should toggle all tasks on the toggle all checkbox', () => {
//   cy.get('input.toggle-all').check()
//   cy.get('span.todo-count').contains('1 item left', { matchCase: false })

//   //cleanup
//   cy.get('input.toggle-all').uncheck()
// })

// it('should sucessfully complete an unchecked task and update the remaining count', () => {
//   cy.get('input.toggle').eq(1).check()
//   cy.get('span.todo-count').contains('1 item left', { matchCase: false })

//   // cleanup
//   cy.get('input.toggle').eq(1).uncheck()
// })

// it('should clear the completed tasks and update the remaining count', () => {
//   cy.get('button.clear-completed').click()
//   cy.get('span.todo-count').contains('2 items left', { matchCase: false })
// })

// it('should successfully delete a task and update the remaining count', () => {
//   cy.get('button.destroy').eq(0).invoke('show').click()
//   cy.get('ul.todo-list').children().should('have.length', 1)
//   cy.get('span.todo-count').contains('1 item left', { matchCase: false })
// })
