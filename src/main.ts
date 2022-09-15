import { createApp } from 'vue'
import App from './App.vue'
import vuescrollto from 'vue-scrollto'
const app = createApp(App)
// vue-scroll-to
app
  .use(vuescrollto, {
    duration: 800, //早すぎないように遅くする
    offset: -60, //オフセットで遷移先の要素がヘッダーに隠れるのを対策
    easing: 'ease-in-out', //ease-outが直感的かと思い採用
  })
  .mount('#app')
