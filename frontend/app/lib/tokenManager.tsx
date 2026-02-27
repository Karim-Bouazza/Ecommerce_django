let accessToken: string | null = null;

export const tokenManager = {
  getToken() {
    return accessToken;
  },
  setToken(token: string) {
    accessToken = token;
  },
  clearToken() {
    accessToken = null;
  },
};
