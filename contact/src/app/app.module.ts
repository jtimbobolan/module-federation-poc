import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [BrowserModule,ContactComponent],
  declarations: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ContactElement = createCustomElement(ContactComponent, { injector: this.injector });
    customElements.define('angular-app-component', ContactElement);
  }
}
