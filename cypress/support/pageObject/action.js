class Action {
   randomPassword = `User${Math.floor(Math.random() * 10000)}@password`;
    signIn(){
        cy.contains("Sign In").click();
      }

      generateRandomEmail(){
        const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;
        Cypress.env('randomEmail', randomEmail);
      }

      generateRandomPassword(){
        const randomPassword = `User${Math.floor(Math.random() * 10000)}@password`;
        Cypress.env('randomPassword', randomPassword);
      }

      enterPassword() {
        const randomPassword = Cypress.env('randomPassword');
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').type(randomPassword);
      }

      enterConfirmPassword(){
        const randomPassword = Cypress.env('randomPassword');
        cy.get(':nth-child(6) > .MuiInputBase-root > #outlined-basic').type(randomPassword);
      }

      enterEmail(){
        const randomEmail = Cypress.env('randomEmail');
        cy.get("#outlined-basic").type(randomEmail);
      }

      signInButton(){
        cy.get('.MuiButton-contained').click();
      }

      getStartedBtn(){
        cy.contains("Get Started").should('be.visible').click();
      }

      signOut(){
        cy.contains("Sign Out").should('be.visible').click();
      }

      alreadyAccntExists(){
        cy.contains("Already have an account? Click here to sign in.").click()

      }   
}
export default new Action();