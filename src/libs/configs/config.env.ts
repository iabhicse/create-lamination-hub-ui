"server-only";
import dotenv from 'dotenv';
dotenv.config();

const _envAppConfig = {
    APP_NAME: process.env.APP_NAME || "Lamination-Hub",
    APP_VERSION: process.env.APP_VERSION || "1.0.0",
    APP_HOST: process.env.APP_HOST || "localhost",
    APP_PORT: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
    APP_ENV: process.env.APP_ENV || "development",
};

const _envPersonalInfo = {
    PERSONAL_MOBILE: process.env.PERSONAL_MOBILE || "",
    PERSONAL_EMAIL: process.env.PERSONAL_EMAIL || "",
    PERSONAL_NAME: process.env.PERSONAL_NAME || "",

}

const _envBackendConfig = {
    APP_BACKEND: process.env.APP_BACKEND || "http://localhost:7164",
    APP_BACKEND_API_URL:
        process.env.APP_BACKEND_API_URL || "http://localhost:7164/api",
};

const _envFrontendConfig = {
    APP_FRONTEND: process.env.APP_FRONTEND || "http://localhost:3000",
    APP_FRONTEND_API_URL: process.env.APP_FRONTEND_API_URL || "http://localhost:3000/api",
};


const _envGoogleConfig = {
    GOOGLE_CLIENT_ID:
        (process.env.GOOGLE_CLIENT_ID as string) || "google-client-id",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
    GOOGLE_REDIRECT_URL: process.env.GOOGLE_REDIRECT_URL as string,
    GOOGLE_VERIFICATION:
        process.env.GOOGLE_VERIFICATION || "google-verification-code",
    GOOGLE_MAP_LOCATION: process.env.GOOGLE_MAP_LOCATION as string,
};

export const envAppConfig = Object.freeze(_envAppConfig);
export const envPersonalInfo = Object.freeze(_envPersonalInfo);
export const envBackendConfig = Object.freeze(_envBackendConfig);
export const envFrontendConfig = Object.freeze(_envFrontendConfig);
export const envGoogleClient = Object.freeze(_envGoogleConfig);