import { createApp } from 'vue';
import { Quasar } from 'quasar';
import './style.css';
import App from './App.vue';
import 'quasar/dist/quasar.prod.css';
import '@quasar/extras/material-icons/material-icons.css'


const app = createApp(App);
app.use(Quasar, {});
app.mount('#app');
