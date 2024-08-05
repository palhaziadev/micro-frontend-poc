import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'warehouse',
    loadChildren: () => import('warehouse/Routes').then((m) => m.remoteRoutes),
    //     return loadRemoteModule('warehouse', './Routes').then(
    //       (m) => m.remoteRoutes
    //     );
  },
  {
    path: 'cart',
    loadChildren: () =>
      //   loadRemoteModule('cart', './Routes').then((m) => m.remoteRoutes),
      import('cart/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'shop',
    loadChildren: () =>
      //     loadRemoteModule('shop', './Routes').then((m) => m.remoteRoutes),
      import('shop/Routes').then((m) => m.remoteRoutes),
  },
  // {
  //   path: 'checkout',
  //   loadChildren: () => import('checkout/Module').then((m) => m.remoteRoutes as WebCom),
  //   // loadRemoteModule('checkout', './Module').then((m) => m),
  // },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
