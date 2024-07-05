import { ApiResponse, AppStatusCode } from "@/models/ApiResponse";
import { BASE_URL } from "@/utilitis/ApiConfig";
import { FetchOptions, FetchError } from "ofetch";
import { userAuthStor } from "~/stores/authStore";

export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {}
): Promise<ApiResponse<T>> {
  config = {
    baseURL: BASE_URL,
    ...config,
  };
  const authStor = userAuthStor();
  if(!config.headers){
    config.headers={}
  }

  if (authStor && authStor.isLogin) {
    var loginData = authStor.loginResult;
    config.headers = {
      ...config.headers,
      Authentication: `Bearer ${loginData?.token}`,
    }
    // config.headers.["Authorization"] = `Bearer ${loginData?.token}`;

    console.log(loginData);
  }
  return $fetch<ApiResponse<T>>(url, config)
    .then((res) => {
      return res;
    })
    .catch((e: FetchError) => {
      console.log(e);
      return {
        data: null,
        isSuccess: false,
        metaData: {
          appStatusCode: AppStatusCode.UnAuthorize,
          message:
            e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده",
        },
      };

    });
}