import request from "supertest";

describe('Brands API', () => {
  const baseUrl = 'https://api.practicesoftwaretesting.com';

  it('should retrieve at least two brands', async () => {
    const response = await request(baseUrl).get('/brands');
    expect(response.status).toBe(200); // Assert status code is 200
    const data = response.body;
    expect(data.length).toBeGreaterThanOrEqual(2); // Assert that at least 2 brands are returned
  });
});