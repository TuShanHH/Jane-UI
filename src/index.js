import Button from './components/Button.vue'
import Input from './components/Input.vue'
export { Button }

export default {
  install(app) {
    app.component('wl-button', Button)
    app.component('wl-input', Input)
  }
}