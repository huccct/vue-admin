import type { App } from 'vue'
import * as components from './components'

const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export default install
export * from './components'
