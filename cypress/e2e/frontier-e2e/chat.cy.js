describe('Frontier Chat UI Test', ()=>{

    before('Open site', ()=>{

        cy.visit("/")
        //cy.wait(5000)

    })

     it('Assert Title', ()=>{

    cy.title().then(txt=>{
        expect(txt).to.eql('Create Next App')
    })   
    
})


it('Click on Navbar', ()=>{

    cy.contains("Chat").should('be.visible').click()
    cy.location('pathname').should('eq', '/chat')  
    
})


it('Enter Blank Email for Login', ()=>{

    cy.fixture('element').then((loc)=>{

        //cy.get(loc.emailBox).should('be.visible').type(loc.emailDataBlank)
        cy.get(loc.submitButton).contains("Login").click()
        cy.wait(5000)
     

    })

})


it('Enter Wrong Email Format for Login', ()=>{

    cy.fixture('element').then((loc)=>{
        
        cy.get(loc.emailBox).should('be.visible').type(loc.emailDataWrongEmail, {force: true}).clear()
        cy.get(loc.submitButton).contains("Login").click()
        cy.wait(5000)

    })

})

    it('Enter Email for Login', ()=>{

        cy.fixture('element').then((loc)=>{
            
            cy.get(loc.emailBox).should('be.visible').type(loc.emailData, {force: true})
            cy.get(loc.submitButton).contains("Login").click()
         

        })

    })

    
})