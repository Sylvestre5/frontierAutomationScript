describe('Frontier Settings UI Test', ()=>{

    before('URL Navigation', ()=>{

        cy.visit("/")
    })

    it('Click on Navbar', ()=>{

        cy.contains('Setting').should('be.visible').click()
        cy.location('pathname').should('eq', '/settings')
        cy.wait(5000)
        
    })


    it('Click to Select Network', ()=>{

    
        cy.contains('Choose networks').should('be.visible')
        cy.get('select').should('be.visible').select('mainnet')

        cy.get("button[type='submit']").contains('Save').should('be.visible').click({force: true})
        
    })

   


})