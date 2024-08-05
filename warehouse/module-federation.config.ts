import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'warehouse',
  exposes: {
    './Routes': 'warehouse/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
