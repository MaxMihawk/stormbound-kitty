import s from './selectors'

describe('Deck Builder - Personal decks', () => {
  before(() => cy.visit('/deck/yours'))

  it('should display no deck and a ghost', () => {
    cy.get(s.PERSONAL_DECKS)
      .should('have.length', 0)

      .get(s.GHOST_DECK)
      .should('be.visible')
  })

  it('should be possible to add a deck', () => {
    cy.get(s.GHOST_DECK_BTN)
      .click()
      .get(s.DECK_FORM)
      .should('be.visible')
      .get(s.DECK_ID_INPUT)
      .type(
        'https://stormbound-kitty.com/deck/5n15n35n675n145n165w55w95w125w195n575w235n58',
        { delay: 0 }
      )
      .get(s.DECK_NAME_INPUT)
      .type('Test')
      .get(s.DECK_SUBMIT_BTN)
      .click()
      .get(s.DECK_FORM)
      .should('not.be.visible')
      .get(s.PERSONAL_DECKS)
      .should('have.length', 1)
  })

  it('should be possible to edit a deck', () => {
    cy.get(s.PERSONAL_DECKS)
      .first()
      .find(s.EDIT_DECK_BTN)
      .click()
      .get(s.DECK_FORM)
      .should('be.visible')
      .get(s.DECK_ID_INPUT)
      .should('have.attr', 'readonly')
      .get(s.DECK_NAME_INPUT)
      .clear()
      .type('Renamed')
      .get(s.DECK_SUBMIT_BTN)
      .click()
      .get(s.DECK_FORM)
      .should('not.be.visible')
      .get(s.PERSONAL_DECKS)
      .should('have.length', 1)
      .get(s.PERSONAL_DECKS)
      .first()
      .find('.FeaturedDeck__name')
      .should('contain', 'Renamed')
    cy.saveLocalStorage()
  })

  it('should be backed up in local storage', () => {
    cy.restoreLocalStorage()
    cy.reload().get(s.PERSONAL_DECKS).should('have.length', 1)
  })

  it('should be possible to delete a deck', () => {
    cy.on('window:confirm', () => true)
      .get(s.PERSONAL_DECKS)
      .first()
      .find(s.DELETE_DECK_BTN)
      .click()
      .get(s.PERSONAL_DECKS)
      .should('have.length', 0)
  })
})