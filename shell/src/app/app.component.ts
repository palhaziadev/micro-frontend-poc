import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CheckoutWrapperComponent } from './checkout-wrapper/checkout-wrapper.component';
import { store } from '@org/state-manager';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CheckoutWrapperComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements AfterViewInit {
  async ngAfterViewInit() {
    store.subscribe(() => {
      console.log('aaa state in shell', store.getState());
    });
  }

  public decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }

  title = 'shell 2';
}
