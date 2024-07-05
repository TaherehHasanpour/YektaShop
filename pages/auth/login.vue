<template>
  <div class="auth-container">
    <Head>
      <Title class="auth-title mb-3">ورود به حساب</Title>
    </Head>
    <div class="auth-title mb-3">ورود به حساب</div>
    <!-- start of auth-box -->
    <div class="auth-box ui-box">
      <!-- start of auth-form --> 
      <Form action="#" class="auth-form" :validation-schema="loginSchema"  v-slot="{ meta }" @submit="requestLoding">
        <!-- start of form-element -->
        <div class="form-element-row mb-3">
          <CInput name="phoneNumber" class="mb-3" label="شماره تلفن"
                  placeholder="شماره تلفن خود را وارد کنید" v-model="loginData.phoneNumber"/>
          <CInput name="password" type="password" label="کلمه عبور" class="mb-3"
                  placeholder="کلمه عبور  را وارد کنید" v-model="loginData.password"/>
        </div>

        <div class="form-element-row mb-3">
          <CButtom wFull :disabled="meta.valid == false || loding">ورود به حساب</CButtom>
        </div>
        <div class="form-element-row">
          <div>حساب کاربری ندارید؟
            <nuxt-link to="/auth/register" class="link">ثبت و نام کنید</nuxt-link>
            .
          </div>
          <hr/>
        </div>
          <div class="form-element-row">
            <div>با ورود و یا ثبت نام در سایت شما <a href="#" class="link">شرایط و
              قوانین</a> استفاده
              از تمام سرویس های
              سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را می‌پذیرید.
            </div>
          </div>
          <!-- end of form-element -->
      </Form>
      <!-- end of auth-form -->
    </div>
    <!-- end of auth-box -->
  </div>
</template>

<script setup lang="ts">
import CInput from "@/components/base/CInput.vue";
import CButtom from "@/components/base/CButtom.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { LoginUser } from "~/Services/auth.service";
definePageMeta({
  layout: 'auth'
})
const loding= ref(false);
const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required()
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().min(5, "کلمه عبور باید بیشتر از پنج کاراکتر باشد.").required(),
});
const loginData = reactive({
  phoneNumber: "",
  password: "",
});
const router = useRouter();
const requestLoding = async () => {
  loding.value = true;
  const result = await LoginUser(loginData.phoneNumber,loginData.password);
  loding.value = false;
    if (result.isSuccess) {
      localStorage.setItem("auth-data",JSON.stringify(result.data))
      router.push("/");
    }
    else{
        alert(result.metaData.massage);
    
        
    }
    

}

</script>

<style scoped>

</style>