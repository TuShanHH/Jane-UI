import Button from './Button.vue'

export { Button }

export default {
  install(app) {
    app.component('Button', Button)
  }
}