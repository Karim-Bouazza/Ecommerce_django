import { tokenManager } from "@/app/lib/tokenManager";
import { authService } from "@/app/services/api/AuthService";
import { useAuth } from "@/app/store/auth/auth.context";

export default function useAuthActions() {
  const { dispatch } = useAuth();

  const login = async (username: string, password: string) => {
    dispatch({ type: "AUTH_START" });
    try {
      const response = await authService.Login(username, password);
      tokenManager.setToken(response.access_token);
      dispatch({ type: "AUTH_SUCCESS", payload: response });
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE" });
      throw error;
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string,
    password_confirmation: string,
  ) => {
    dispatch({ type: "AUTH_START" });
    try {
      const response = await authService.Register(
        username,
        email,
        password,
        password_confirmation,
      );
      tokenManager.setToken(response.access_token);
      dispatch({ type: "AUTH_SUCCESS", payload: response });
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE" });
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return { login, register, logout };
}
