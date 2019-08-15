/// <reference types="Cypress" />

context('Network request', () => {
    it('Visual', () => {
        cy
            .request('https://jsonplaceholder.typicode.com/todos/1')
            .then((resp) => {
                expect(resp.status).equal(200);
                expect(resp.body.title).equal('delectus aut autem');
                expect(resp.body.userId).equal(1);
                expect(resp.body.id).equal(1);
                expect(resp.body.completed).equal(false);
            })
    })
});
