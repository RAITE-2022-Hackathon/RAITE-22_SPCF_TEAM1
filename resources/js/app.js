import './bootstrap';
import Vue from 'vue';
import App from './App.vue';

// Import our custom CSS
import '../sass/app.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

new Vue({
    render: (h) => h(App),
}).$mount('#app');
