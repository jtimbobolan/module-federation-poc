import { createApp } from 'vue';
import Careers from './components/Careers.vue';
import './style.css';
import router from './router';
import { createBridgeComponent } from '@module-federation/bridge-vue3';

export default createBridgeComponent({
  rootComponent: Careers,
  appOptions: ({ app }) => {
    app.use(router);
  },
});
