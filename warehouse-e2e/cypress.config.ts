import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run warehouse:serve:development',
        production: 'nx run warehouse:serve:production',
      },
      ciWebServerCommand: 'nx run warehouse:serve-static',
    }),
    baseUrl: 'http://localhost:4203',
  },
});
