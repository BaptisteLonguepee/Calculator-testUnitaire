import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.js'], // Inclure uniquement les tests unitaires
    exclude: ['tests/e2e/**', 'node_modules/**'], // Exclure les tests E2E et les tests dans node_modules
  },
});
