import { createApp } from 'vue'
import App from './App.vue'
import * as echartsGmap  from 'echarts-extension-gmap';
const app=createApp(App)
app.use(echartsGmap,{
    load: {
        key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg', // 将YOUR_API_KEY替换为你的 Google Maps API 密钥
        //libraries: 'places', // 你可能需要根据你的需求添加其他库
    },
})

app.mount('#app')


