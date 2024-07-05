import type { ApiResponse } from "~/models/ApiResponse";
import type { Register } from "~/models/auth/register";
import { FetchApi } from "~/utilitis/CustomApiFech";
import type { LoginResult } from "~/models/auth/loginResult";

export function RegisterUser(command: Register): Promise<ApiResponse<null>> {
    return FetchApi("/auth/register", {
        method: "post",
        body: command
    });
};
export function LoginUser(  phoneNumber: string,password: string): Promise<ApiResponse<LoginResult>> {
    return FetchApi("/auth/login", {
        method: "post",
        body: {
            phoneNumber: phoneNumber,
            password: password
        }
    });
};
