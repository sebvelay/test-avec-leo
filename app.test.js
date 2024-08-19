const request = require('supertest');
const app = require('./app');

describe('GET /ok', () => {
  it('should return a 200 status with a message', async () => {
    const response = await request(app).get('/ok');
    
    expect(response.status).toBe(200);
    expect(response.text).toBe('Everything is OK');
  });
});

describe('GET /ko', () => {
  it('should return a 500 status with an error message', async () => {
    const response = await request(app).get('/ko');
    
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message', 'Something went wrong');
  });
});