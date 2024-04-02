import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Sample from './Sample.vue'

//const app = createApp(Sample)

const app = createApp({
    setup() {
        console.log(errorraise);
        return {}
    }
})

// 전역 설정
app.config.globalProperties.appName = "HelloVue";
//app.config.globalProperties.axios = axios

app.config.errorHandler = (err) => { console.log("err", err)}
app.config.warnHandler = (warn) => { console.log("warn", warn)}

app.mount('#app')