<template>
  <div class="auth-container">
    <Head>
      <Title class="auth-title mb-3">ثبت نام در سایت</Title>
    </Head>
    <div class="auth-title mb-3">ثبت نام در سایت</div>
    <!-- start of auth-box -->
    <div class="auth-box ui-box">
      <!-- start of auth-form -->
      <Form :validation-schema="registerSchema" class="auth-form" v-slot="{ meta }" @submit="requestRegister"
        action="#">
        <!-- start of form-element -->
        <div class="form-element-row mb-5">
          <CInput v-model="registerData.phoneNumber" name="phoneNumber" class="mb-3" label="شماره تلفن"
            placeholder="شماره تلفن خود را وارد کنید" />
          <CInput v-model="registerData.password" name="password" type="password" label="کلمه عبور" class="mb-3"
            placeholder="کلمه عبور  را وارد کنید" />
          <CInput v-model="registerData.confirmPassword" name="confirmPassword" class="mb-3" label="تکرار کلمه عبور"
            placeholder="تکرار کلمه عبور را وارد کنید" />
        </div>
        <!-- end of form-element -->
        <!-- start of form-element -->

        <div class="form-element-row mb-3">
          <CButtom :disabled="meta.valid == false || loding" class="btn btn-primary" :loding="loding">
            ثبت نام در فروشگاه
          </CButtom>
        </div>
        <!-- end of form-element -->
        <!-- start of form-element -->
        <div class="form-element-row">
          <div>قبلا ثبت نام کرده اید؟
            <nuxt-link href="/auth/login" class="link">ورود به سایت</nuxt-link>
            .
          </div>
          <hr />
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
import { RegisterUser } from "~/Services/auth.service";
import type { Register } from "~/models/auth/register";
import * as Yup from "yup";
import { Form } from "vee-validate";
import CButtom from "~/components/base/CButtom.vue";
definePageMeta({
  layout: 'auth'
});
const registerSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required()
    .min(11, "شماره تلفن نامعتبر است")
    .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().min(5, "کلمه عبور باید بیشتر از پنج کاراکتر باشد.").required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "کلمه های عبور یکسان نیستند"
  ),
});
const loding = ref(false);
const registerData: Register = reactive({
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});
const router = useRouter();
const requestRegister = async () => {
  loding.value = true;
  const result = await RegisterUser(registerData);
  loding.value = false;
    if (result.isSuccess) {
      router.push("/auth/login");
    }
    else{
        alert(result.metaData.massage);
    }
    

}

</script>

<style scoped></style>