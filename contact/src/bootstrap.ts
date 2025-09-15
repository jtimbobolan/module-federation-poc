import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export default (el: HTMLElement) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    const contactEl = document.createElement('contact-element');
    el.appendChild(contactEl);
  });
};
