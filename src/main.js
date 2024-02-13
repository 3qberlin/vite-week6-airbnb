// 外部套件，優先順序 Top
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 本地套件，優先順序 Secondary
import 'bootstrap/scss/bootstrap.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
