import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartNxWelcomeComponent } from './cart-nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, CartNxWelcomeComponent],
  selector: 'app-cart-entry',
  template: `<app-cart-nx-welcome></app-cart-nx-welcome>`,
})
export class RemoteEntryComponent {}
