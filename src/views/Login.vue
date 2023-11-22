<template>
  <div class="login">
    <div class="logo mr50">
      <img alt="logo" class="logo" src="@/assets/logo.png" width="250" height="250" />
    </div>
    <div class="w60">
      <h1 class="black">Office Resource</h1>
      <v-text-field label="Username" v-model="storeLogin.username"></v-text-field>
      <v-text-field label="Password" v-model="storeLogin.password" type="password"></v-text-field>
      <v-btn :onclick="valLogin">Log in</v-btn>
      <v-alert
        v-if="storeLogin.showSnackbar"
        class="mt20"
        border="start"
        variant="tonal"
        color="error"
        title="Login Failed"
        text="Sorry, your username or password was incorrect!"
      ></v-alert>
    </div>
  </div>
</template>

<script>
import { useLogin } from '@/stores/login'
import { useCompositeApi } from '@/stores/api'

export default {
  setup() {
    const storeLogin = useLogin()
    const { valLogin } = useCompositeApi();
    
    return {
      storeLogin,
      valLogin,
    }
  },
}
</script>