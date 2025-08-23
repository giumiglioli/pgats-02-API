//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');


// Testes
describe('TransferExternalgit add', () => {
    describe('POST /transfer', () => {
        it ('Quando informo remetente e destinatario inexistentes recebo 400', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/transfer')
                .send({ 
                    from: "jose", 
                    to: "marcos", 
                    value: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('message', 'Usuário remetente ou destinatário não encontrado.');

        });

    });

 /*   describe ('POST /transfer', () => {
        it ('Quando não informo remetente e destinatario recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfer')
                .send({ 
                    from: "", 
                    to: "", 
                    value: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('message', 'Dados de transferência inválidos.');

        });
        //it ...
    });

/*
    describe('POST /register', () => {
        it ('Quando informo username e password recebo 201', async () => {
            const resposta = await request(app)
                .post('/register')
                .send({ 
                    username: "giuliana", 
                    password: "abc123",
                });

            expect(resposta.status).to.equal(201);
            //expect(resposta.body).to.have.property('transfer');
            expect(resposta.body.transfer).to.have.property('username', 'giuliana');
            expect(resposta.body.transfer).to.have.property('password', 'abc123');
            //expect(resposta.body.transfer).to.have.property('value', 100);
        });
    }); */
});