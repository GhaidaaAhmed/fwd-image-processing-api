import supertest from 'supertest'
import app from '../index'

const request = supertest(app)
describe('Test image endpoint response', () => {
    it('gets 400 respone for not having height parameter', async (done) => {
        const response = await request.get(
            '/api/images?image=encenadaport.jpg&width=200'
        )
        expect(response.status).toBe(400)
        done()
    })
})
