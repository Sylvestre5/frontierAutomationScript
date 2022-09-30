describe('Frontier Token UI Test', ()=>{

    before('Open site', ()=>{

        cy.visit("/")
        //cy.wait(5000)

    })


    it('Click on Navbar', ()=>{

        cy.contains('Tokens').should('be.visible').click()
        cy.location('pathname').should('eq', '/tokens')
        
    })


 it('Assert text', ()=>{

        cy.contains("Ethereum ballance").should('be.visible')
        cy.contains("IMX ballance").should('be.visible')
    
    })


})