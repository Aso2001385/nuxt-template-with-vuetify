<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">Verify Register</h3>
          </v-card-title>
          <v-divider class="pb-5" />
          <div class="pa-10">
            <v-text-field v-model="name" label="Name" type="text" />
            <v-text-field v-model="email" label="Email" type="text" />
            <v-text-field v-model="password" label="Password" type="password" />
            <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" />
            <v-row justify="center" class="mt-5 mb-5">
              <v-btn color="grey darken-3 white--text" @click="register">認証コードを取得</v-btn>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/auth/verify/login">ログインページへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/auth/verify">戻る</NuxtLink>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    ...mapGetters({
      authFlg: 'api/verify/authFlg',
    }),
  },
  created() {
    if (this.authFlg) alert('ログイン済みです')
  },
  methods: {
    async register() {
      if (this.authFlg) return

      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirmPassword,
      }
      if (await this.$store.dispatch('api/users/postLogin', { data: user })) this.$router.push({ path: '/' })
    },
  },
}
</script>
