import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from "naive-ui";
import VueRouter from './components/routers/routers'
import {createPinia} from 'pinia';
import axios from 'axios'

const app = createApp(App)

app.use(naive)
app.use(VueRouter)
app.use(createPinia())
// app.use(axios)

app.mount('#app')