const { describe, it } = require('mocha')
const app = require('../server')
const request = require('supertest')
const { deepStrictEqual, notDeepStrictEqual } = require('assert')

describe('Tests from post controllers', () => {

  describe('/posts', () => {
    it('should request the all posts and return HTTP status 200.', async () => {
      const response = await request(app)
      .get('/posts').expect(200)
      console.log(response.body[0], 'opa')
      const expected = response.body[0]
      deepStrictEqual(Object.keys(expected), ['id', 'content', 'userId'])
      for await(let key of Object.values(expected)) {
        notDeepStrictEqual(key, null)
      }
    })
  })

})