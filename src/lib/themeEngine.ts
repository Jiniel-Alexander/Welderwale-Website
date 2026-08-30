import { ThemeSettings } from '@/types';

export function generateCssVariables(theme: ThemeSettings): string {
  return `
    :root {
      --color-primary: ${theme.primaryColor};
      --color-primary-hover: ${theme.primaryHoverColor};
      --color-secondary: ${theme.secondaryColor};
      --color-accent: ${theme.accentColor};
      --color-bg: ${theme.backgroundColor};
      --color-surface: ${theme.surfaceColor};
      --color-surface-dark: ${theme.surfaceDarkColor};
      --color-text: ${theme.textColor};
      --color-text-muted: ${theme.textMutedColor};
      --color-border: ${theme.borderColor};
      --color-success: ${theme.successColor};
      --color-error: ${theme.errorColor};
      --radius-btn: ${theme.radiusBtn};
      --radius-card: ${theme.radiusCard};
      --font-heading: ${theme.headingFont};
      --font-body: ${theme.bodyFont};
      --container-max-width: ${theme.containerWidth};
    }
  `;
}
