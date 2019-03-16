'use strict';

const server = require('../../../src/app.js').server;
const supergoose = require('../../supergoose.js');

jest.setTimeout(5000 * 5000);

const mockRequest = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Protected book routes', () => {
  
 it('responds with unauthorized requesting all books', () => {
     return mockRequest.get('/books')
     .then(result => {
         expect(result.status).toBe(401);
     })
     .catch(console.error);
 })

 it('responds with unauthorized requesting a specific book', () => {
    return mockRequest.get('/books/1')
    .then(result => {
        expect(result.status).toBe(401);
    })
    .catch(console.error);
})
  
});