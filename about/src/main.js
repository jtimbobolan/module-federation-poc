import { createApp } from 'vue';
import AboutRemote from './components/About.vue';
import './style.css';

export default (el) => {
  const app = createApp(AboutRemote);
  app.mount(el);
  return () => app.unmount();
};