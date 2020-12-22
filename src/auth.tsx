const TOKEN_KEY = 'token';
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);
const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
  localStorage.removeItem('username-vintage-studio');
  localStorage.removeItem('email-vintage-studio');
  localStorage.removeItem('photo-vintage-studio');
  localStorage.removeItem('name-vintage-studio');
  localStorage.removeItem('nameperson-vintage-studio');
  localStorage.removeItem('surnameperson-vintage-studio');
  localStorage.removeItem('login-vintage-studio');
  return localStorage.removeItem(TOKEN_KEY);
};

export { isAuthenticated, logout, login, getToken };
