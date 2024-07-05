import type { ApiResponse } from "~/models/ApiResponse";
import type { Users } from "~/models/users/user";
import { FetchApi } from "~/utilitis/CustomApiFech";


export const GetCurrentUser  = ():Promise<ApiResponse<Users>> => {
return FetchApi("/users/current")
}