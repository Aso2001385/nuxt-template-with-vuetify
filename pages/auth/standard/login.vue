<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">Standard Login</h3>
          </v-card-title>
          <v-divider class="pb-5" />
          <div class="pa-10">
            <v-text-field v-model="email" label="email" type="text" />
            <v-text-field v-model="password" label="password" type="password" />
            <v-row justify="center" class="mt-5 mb-5">
              <v-btn color="grey darken-3 white--text" @click="login">ログイン</v-btn>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/auth/standard/register">サインアップページへ</NuxtLink>
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
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters({
      authFlg: 'api/standard/authFlg',
    }),
  },
  created() {
    if (this.authFlg) alert('ログイン済みです')
  },
  methods: {
    async login() {
      if (this.authFlg) return
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmRegister: this.confirmRegister,
      }
      if (await this.$store.dispatch('api/standard/postLogin', { data: user })) this.$router.push({ path: '/' })
    },
  },
}
</script>
