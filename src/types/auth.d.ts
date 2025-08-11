// auth types file
export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    statusCode: boolean;
    user: {
        id: string;
        user_id: string,
        email: string;
        fullname: string,
        role: string,
        created_at: string,
        updated_at: string,
    };
    message: string;
}

export interface LogoutResponse {
    message: string;
}
