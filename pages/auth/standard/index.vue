<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">Standard User Info</h3>
          </v-card-title>
          <v-divider class="pb-5" />
          <div class="pa-10">
            <v-text-field v-model="name" label="Name" type="text" disabled />
            <v-text-field v-model="email" label="Email" type="text" disabled />
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/auth">戻る</NuxtLink>
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
    }
  },
  computed: {
    ...mapGetters({
      auth: 'api/standard/auth',
    }),
  },
  created() {
    this.name = this.auth.name
    this.email = this.auth.email
  },
}
</script>
