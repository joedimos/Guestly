const API_URL = 'http://localhost:3000/api';

export const getCustomers = async () => {
  const response = await fetch(`${API_URL}/customers`);
  return response.json();
};
