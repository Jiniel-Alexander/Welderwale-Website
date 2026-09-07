import type { Config } from 'tailwindcss';

export default <Config>{
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        success: 'var(--color-success)',
        error: 'var(--color-error)'
      },
      borderRadius: {
        btn: 'var(--radius-button)',
        card: 'var(--radius-card)'
      }
    }
  },
  plugins: []
};
