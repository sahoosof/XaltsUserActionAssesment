import Action from "../support/pageObject/action";
describe("Automating user action: Sign Up, Sign Out and Sign In",()=>{
    before(() => {
        cy.visitUrl();
        Action.generateRandomEmail();
        Action.generateRandomPassword();
    });
    it("Basic user activity",()=>{
        Action.signIn();
        Action.enterEmail();
        Action.enterPassword();
        Action.enterConfirmPassword();
        Action.signInButton();
        Action.signOut();
        Action.getStartedBtn();
        Action.alreadyAccntExists();
        Action.enterEmail();
        Action.enterPassword();
        Action.signIn();
    })
})