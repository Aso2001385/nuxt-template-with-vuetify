import axios from 'axios'

const API_URL = process.env.API_BASE_URL + '/api'
const BASE_URL = process.env.API_BASE_URL

axios.defaults.withCredentials = true

export const state = () => ({
  auth: {},
  authFlg: false,
})

export const getters = {
  auth: state => {
    return state.auth
  },
  authFlg: state => {
    return state.authFlg
  },
}

export const mutations = {
  setAuth(state, response) {
    state.auth = response
    state.authFlg = true
  },
}

export const actions = {
  // 仮登録(ユーザー情報送信)
  register: async ({ commit }, argument) => {
    return await axios
      .get(`${BASE_URL}/sanctum/csrf-cookie`)
      .then(async () => {
        return await axios
          .post(`${API_URL}/users`, argument.data)
          .then(response => {
            commit('setTempMail', response.data)
            return true
          })
          .catch(() => {
            return false
          })
      })
      .catch(() => {
        return false
      })
  },

  // ログイン
  login: async ({ commit }, argument) => {
    return await axios
      .get(`${BASE_URL}/sanctum/csrf-cookie`)
      .then(async () => {
        return await axios
          .post(`${BASE_URL}/login`, argument.data)
          .then(response => {
            commit('setAuth', response.data)
            return true
          })
          .catch(() => {
            return false
          })
      })
      .catch(() => {
        return false
      })
  },
}