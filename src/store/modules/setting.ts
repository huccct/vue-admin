import { defineStore } from 'pinia'

let userLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      isCollapse: false,
    }
  },
})

export default userLayOutSettingStore
