module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm exec vinext start --port 4173',
      startServerReadyPattern: 'Production server running',
      startServerReadyTimeout: 60000,
      url: ['http://localhost:4173/', 'http://localhost:4173/blog', 'http://localhost:4173/blog/dolore-al-piede'],
      numberOfRuns: 3,
      settings: { chromeFlags: '--no-sandbox' },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.95 }],
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.95 }],
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/reports' },
  },
};
