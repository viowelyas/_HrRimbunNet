import { defineStore } from 'pinia'

export const useLogin = defineStore('login', {
  state: () => {
    return {
      username: '',
      password: '',
      login: false,
      showSnackbar: false
    }
  }
})
