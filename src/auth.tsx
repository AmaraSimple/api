const TOKEN_KEY = 'token';
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);
const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
  return localStorage.removeItem(TOKEN_KEY);
};

export { isAuthenticated, logout, login, getToken };
