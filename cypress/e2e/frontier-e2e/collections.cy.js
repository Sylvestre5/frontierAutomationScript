describe('Frontier Collections UI Test', ()=>{

    before('URL Navigation', ()=>{

        cy.visit("/")
    })

    it('Click on Navbar', ()=>{

        cy.contains('NFTs').should('be.visible').click()
        cy.location('pathname').should('eq', '/nfts')
        //cy.location().should((loc) => {
        //expect(loc.pathname).to.eq('/nft')

       // })

        
    })


    it('Click on Receive and Send NFT Buttons', ()=>{

        cy.contains("Receive NFT").click()

        cy.contains("Buy NFT").click()

        cy.contains("Collections").click()

        cy.contains("Favorites").click()

        cy.contains("Activity").click()


        
    })

   


})