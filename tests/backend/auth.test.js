const { login } = require('../../backend/controllers/authController');

test('User login', () => {
  const req = {};
  const res = { json: jest.fn() };

  login(req, res);
  expect(res.json).toHaveBeenCalledWith({ message: 'User logged in' });
});
