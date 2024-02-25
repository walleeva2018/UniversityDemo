import '@/assets/main.css';
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core CSS
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(Vue3Toasity, {
  autoClose: 3000
} as ToastContainerOptions);

app.mount('#app');
