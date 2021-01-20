import { createApp } from 'vue';
import Vuestrap from '../src/main';
import router from './router';
import App from './App.vue';

import 'bootstrap';
import './styles.scss';

createApp(App)
    .use(router)
    .use(Vuestrap)
    .mount('#app');
