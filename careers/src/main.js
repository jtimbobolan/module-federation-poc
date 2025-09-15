import { createApp } from 'vue';
import Careers from './components/Careers.vue';
import './style.css';
import { createBridgeComponent } from '@module-federation/bridge-vue3';

export default createBridgeComponent({
  rootComponent: Careers,
   appOptions: ({ app }) => {
    // Optional: adding a plugin to the new Vue instance on the host application side
  },
});
