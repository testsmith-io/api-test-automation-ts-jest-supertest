import request from 'supertest';

const baseUrl = 'https://api.practicesoftwaretesting.com';

let token: string;

beforeAll(async () => {
  const payload = {
    email: 'customer@practicesoftwaretesting.com',
    password: 'welcome01',
  };

  const response = await request(baseUrl)
    .post('/users/login')
    .send(payload);

  expect(response.status).toBe(200);
  token = response.body.access_token;
});

describe('Invoice API Tests', () => {
  it('should retrieve invoices with a valid token', async () => {
    const headers = { Authorization: `Bearer ${token}` };

    const response = await request(baseUrl)
      .get('/invoices')
      .set(headers);

    expect(response.status).toBe(200);

    const invoices = response.body.data || [];
    expect(invoices.length).toBeGreaterThanOrEqual(15);
  });
});
