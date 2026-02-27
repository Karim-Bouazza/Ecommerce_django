const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class AuthService {
  async Login(username: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/users/login/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }

    return await response.json();
  }

  async Register(
    username: string,
    email: string,
    password: string,
    password_confirmation: string,
  ) {
    const response = await fetch(`${API_BASE_URL}/users/register/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation,
      }),
    });
    if (!response.ok) {
      throw Error("Registration failed");
    }

    return await response.json();
  }
}

export const authService = new AuthService();
