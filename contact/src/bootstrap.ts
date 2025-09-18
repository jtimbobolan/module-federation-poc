/* import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ContactComponent } from './app/contact/contact.component';

@NgModule({
  imports: [BrowserModule, ContactComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ContactComponent, { injector });
    customElements.define('my-angular-element', el);
  }
  ngDoBootstrap() {}
} */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const mount = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export { mount }