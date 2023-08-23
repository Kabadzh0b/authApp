import AuthResponse from "./AuthResponse";

export interface AuthState {
    authData: AuthResponse,
    loading: boolean,
    error: null | string,
}
