import { reactive } from 'vue'

export const store = {
  state: reactive({
    user: {},
  }),
}
export const userNameStore = {
  state: reactive({
    user: {
      user_metadata: {
        firstName: {},
      },
    },
  }),
}
