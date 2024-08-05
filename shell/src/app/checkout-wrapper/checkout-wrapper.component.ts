import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import { loadRemoteModule } from '@angular-architects/module-federation';
// import { loadRemoteModule } from '@nx/angular/mf';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-wrapper.component.html',
  styleUrl: './checkout-wrapper.component.css',
})
export class CheckoutWrapperComponent implements AfterViewInit {
  @ViewChild('reactContainer', { static: true }) reactContainer!: ElementRef;

  async ngAfterViewInit() {
    // all of the different imports are working
    // const ReactModule = await loadRemoteModule('checkout', './Module');
    // const ReactModule = React.lazy(() => import('checkout/Module'));
    const ReactModule = await import('checkout/Module');

    const ReactApp = ReactModule.default; // Assuming default export
    const reactElement = React.createElement(ReactApp);

    const container = this.reactContainer.nativeElement;
    const root = ReactDOM.createRoot(container);
    root.render(reactElement); // Render using 'createRoot'
  }
}
