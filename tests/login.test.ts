import request from 'supertest';

describe('Login API Tests', () => {
  const baseUrl = 'https://api.practicesoftwaretesting.com'; // Replace with your actual base URL

  it('should return access token on successful login', async () => {
    const payload = {
      email: 'customer@practicesoftwaretesting.com',
      password: 'welcome01',
    };

    const response = await request(baseUrl)
      .post('/users/login')
      .send(payload);

    expect(response.status).toBe(200); // Assert status code
    expect(response.body).toHaveProperty('access_token'); // Assert response contains 'access_token'
  });
});