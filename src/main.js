import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from './UI'
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping, faX, faHeart as faSolidHeart, faPen } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faCartShopping, faSolidHeart, faHeart, faX, faPen)

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component)

})

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.use(store)

app.mount('#app');
