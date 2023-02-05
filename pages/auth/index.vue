<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <div class="pa-10">
            <v-row class="my-10" justify="center" no-gutters>
              <v-icon class="mr-2">mdi-email-off</v-icon><NuxtLink to="/auth/standard">メール認証なしルートへ</NuxtLink>
            </v-row>
            <v-divider />
            <v-row class="my-10" justify="center" no-gutters>
              <v-icon class="mr-2">mdi-email-check-outline</v-icon>
              <NuxtLink to="/auth/verify">メール認証ありルートへ</NuxtLink>
            </v-row>
            <v-divider />
            <v-row justify="center" class="mt-10" no-gutters>
              <v-btn color="grey darken-3 white--text" @click="logout">ログアウト</v-btn>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    logout() {
      this.clearAllCookies()
    },
    clearAllCookies() {
      document.cookie.split(';').forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;max-age=${0};`)
      })
    },
  },
}
</script>
