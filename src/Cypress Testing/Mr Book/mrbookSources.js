export class Mrbook{

    title(name){
        cy.get('#title').type(name)
    }

    description(des){
        cy.get('#textarea').type(des)
    }

    category(category){
        cy.get('#category').select(category)
    }
    price(price){
        cy.get('#price').type(price)
    }
    salePrice(saleprice){
        cy.get('#sale-price').type(saleprice)
    }
    uploadImage(img){
        cy.get('#image').attachFile(img)
    }
    submitBtn(){
        cy.get('#submit-btn').click()
    }
    
    deleteBook(bookName){
        cy.contains('#book-list', bookName)
      .find('#delete-btn')
      .click();
    }

    updateBook(bookName){
        cy.contains('#book-list', bookName)
        .find('#update-btn')
        .click();
        cy.get('#title').clear()
    }

}