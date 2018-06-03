'use strict'

const request = require('supertest')
const assert = require('assert')
const app = require('../../server')

describe('test express-frame http request', () => {
  let server = app.listen(9000)
  describe('test user module', () => {
    let createUser = {
      name: 'test009',
      password: '123456'
    }
    it('test /users (post) create ', async () => {
      let response = await request(server)
        .post('/users')
        .send(createUser)
        .set('Accept', 'application/json')
        .expect(200)
      assert.deepEqual(0, response.body.errorCode)
    })
  })
})
