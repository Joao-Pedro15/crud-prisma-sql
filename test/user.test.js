const app = require('../server')
const { describe, it } = require('mocha')
const request = require('supertest')
const assert = require('assert')
const users = require('./mocks/users.json').data

describe('API Suite test', () => {
    describe('/users', () => {
        it('should request the all users and return HTTP 200', async () => {
            const response = await request(app)
            .get('/users')
            .expect(200)
            const [user, ...rest] = response.body
            assert.deepStrictEqual(user, users[0])
        })
    })

    describe('/user', () => {
        it('should request post a new user and return HTTP 200', async () => {
            const response = await request(app)
            .post('/user')
            .send({name: 'Erick Wendelol', email: 'jooj@gmail.com'})
            .expect(200)

            assert.deepStrictEqual(response.status, 200)
        })
        it('should a not be able to submit new user and return HTTP 401', async () => {
            const response = await request(app)
            .post('/user')
            .send({name: 'Jooj', email: 'jjoao.monteiro10@gmail.com'})
            .expect(401)
    
            assert.ok(response.unauthorized)
            assert.deepStrictEqual(response.text, "errado!")
        })
    })
})