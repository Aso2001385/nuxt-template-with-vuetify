<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="6" sm="7" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">Verify Email Confirmation</h3>
          </v-card-title>
          <v-divider class="pb-5" />
          <div class="pa-10">
            <p>verify code</p>
            <v-otp-input v-model="code" :length="6" type="number" />

            <v-btn
              class="blue--text pt-auto pl-0"
              text
              style="display: flex; align-items: center"
              @click="$router.push({ path: '/auth/verify/register' })"
            >
              認証コードを再送します
            </v-btn>
            <v-spacer />

            <v-row class="my-10 pb-10" justify="center" align-content="center" no-gutters>
              入力されたメールアドレスに認証コードが送信されました。
            </v-row>

            <v-row justify="end" align-content="center" class="mt-5" no-gutters>
              <v-btn
                class="blue--text pt-auto pl-0"
                text
                style="display: flex; align-items: center"
                @click="$router.push({ path: '/auth/verify/register' })"
              >
                メールアドレスを再入力します
              </v-btn>
              <v-spacer />
              <v-btn color="grey darken-3 white--text" @click="sendCode">SEND CODE</v-btn>
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
  layout: 'auth',
  data() {
    return {
      email: '',
      code: '',
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
    async sendCode() {
      if (this.authFlg) return
      if (this.code !== '') {
        const user = {
          code: this.code,
        }

        if (await this.$store.dispatch('api/verify/sendVerufyCode', { email: this.email, data: user }))
          await this.$router.push({ path: '/' })
      } else {
        alert('確認コードを入力してください')
      }
    },
    async reSend() {
      if (this.authFlg) return
      await this.$store.dispatch('api/verify/reSendEmail', { email: this.email })
    },
  },
}
</script>
