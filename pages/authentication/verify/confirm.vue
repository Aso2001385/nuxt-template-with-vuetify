<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="5" md="6" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">Verify Email Confirmation</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <div class="pa-10">
            <p>verify code</p>
            <v-otp-input v-model="code" :length="6" type="number" />

            <p class="blue--text">認証コードを再送します</p>

            <v-row class="my-10 pb-10" no-gutters> 入力されたメールアドレスに認証コードが送信されました。 </v-row>

            <v-row justify="end" align-content="center" class="mt-5" no-gutters>
              <div class="blue--text pt-auto" style="display: flex; align-items: center">
                メールアドレスを再入力します
              </div>
              <v-spacer />
              <v-btn color="grey darken-3 white--text" @click="submit">SEND CODE</v-btn>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import { mapGetters } from 'vuex'

export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      code: '',
    }
  },
  methods: {
    async submit() {
      if (this.code !== '') {
        const user = {
          email: this.email,
          code: this.code,
        }

        if (await this.$store.dispatch('api/users/confirmRegister', { data: user }))
          await this.$router.push({ path: '/' })
      } else {
        alert('確認コードを入力しましょう。')
      }
    },
    async reSend() {
      await this.$store.dispatch('api/users/reSendEmail', { email: this.auth.email })
    },
  },
}
</script>
