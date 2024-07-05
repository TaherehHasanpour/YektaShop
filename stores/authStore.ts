
import { defineStore } from "pinia";
import { GetCurrentUser } from "~/Services/user.service";
import { AppStatusCode } from "~/models/ApiResponse";
import type { LoginResult } from "~/models/auth/loginResult";
import type { Users } from "~/models/users/user";


export const userAuthStor = defineStore("auth", () => {
    const loginResult: Ref<LoginResult | null> = ref(null);
    const currentUser: Ref<Users | null> = ref(null);
    const isLogin = computed(() => loginResult.value != null);
    const loding = ref(false);
    const SetCurrentUserValue = async () => {
        console.log("SetCurrentUserValue");
        const localStoregData = localStorage.getItem("auth-data");
        if (!localStoregData) {
          return;
        }
        const loginData = JSON.parse(localStoregData);
        loding.value = true;
        loginResult.value = loginData;
        var result = await GetCurrentUser();
        if (result.isSuccess) {
            currentUser.value = result.data;
        }else if(result.metaData.appStatusCode == AppStatusCode.UnAuthorize){
            loginResult.value = null;
            localStorage.removeItem("auth-data");
        };
        loding.value = false;
    };
return{ loding , currentUser , loginResult , SetCurrentUserValue , isLogin}
});