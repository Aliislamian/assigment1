import { Mrbook } from './mrbookSources';

describe('Automation testing of Mr Book website', () =>{
    
    const MrbookSources = new Mrbook()

    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
        cy.contains('MR. Books')
    })
    
    it('Verify that user is reaschable to upload book page ', () =>{
        cy.visit('http://localhost:3000/')
        cy.contains('MR. Books')
    })

    it('Verify that the user is able to add new book to the book list', () =>{
        MrbookSources.title('Book Name')
        MrbookSources.description('new book')
        MrbookSources.category('Urdu books')
        MrbookSources.price('300')
        MrbookSources.salePrice('320')
        MrbookSources.uploadImage('home-1.jpg')
        MrbookSources.submitBtn()
        cy.wait(2000);
        cy.contains('Book Name')
    })

    it('Verify that the user is not able to add new book without uploading image to the book list', () =>{
        MrbookSources.title('New book')
        MrbookSources.description('new book')
        MrbookSources.category('Urdu books')
        MrbookSources.price('300')
        MrbookSources.salePrice('320')
        // MrbookSources.uploadImage('home-1.jpg')
        MrbookSources.submitBtn()
        cy.contains('#book-list', 'New book').should('not.exist')
    })

    it('verify that appropriate error messages are displayed', () =>{
        MrbookSources.title('New book')
        MrbookSources.description('new book')
        MrbookSources.category('Urdu books')
        MrbookSources.price('300')
        MrbookSources.salePrice('320')

        cy.on('window:alert', (text) => {
            expect(text).to.equal('An error occurred. Please check the console for details.'); 
          });
    })

    it('Verify that user is able to Delte book by its name', () =>{
        MrbookSources.deleteBook('book1')
        cy.contains('#book-list', 'book1').should('not.exist');
    })

    it('Verify that the user is able to edit existing book in the book list.', () => {
        MrbookSources.updateBook('book1')
        MrbookSources.title('Book Name')
        MrbookSources.price('200')
        MrbookSources.salePrice('210')
        MrbookSources.submitBtn()
        cy.contains('#book-list', 'Book Name').should('exist'); 
    });




})