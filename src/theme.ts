export interface TxTheme {
  bg?: string;
  surface?: string;
  surfaceAlt?: string;
  accent?: string;
  primary?: string;
  text?: string;
  textSecondary?: string;
  textMuted?: string;
  border?: string;
  radius?: string;
}

export const themes: Record<string, TxTheme> = {
  light: {
    bg: '#F5F6FA',
    surface: '#FFFFFF',
    surfaceAlt: '#F8F9FC',
    accent: '#F3B23A',
    primary: '#4A7CFF',
    text: '#111827',
    textSecondary: '#4B5563',
    textMuted: '#9CA3AF',
    border: '#E5E7EB',
  },
  dark: {
    bg: '#0F1117',
    surface: '#1A1D2B',
    surfaceAlt: '#242737',
    accent: '#F3B23A',
    primary: '#6B9AFF',
    text: '#F3F4F6',
    textSecondary: '#9CA3AF',
    textMuted: '#6B7280',
    border: '#2D3142',
  },
  ocean: {
    bg: '#F0F7FF',
    surface: '#FFFFFF',
    surfaceAlt: '#F0F7FF',
    accent: '#0EA5E9',
    primary: '#0284C7',
    text: '#0C2340',
    textSecondary: '#3D5A74',
    textMuted: '#94A3B8',
    border: '#E0EAFF',
  },
};

const tokenMap: Record<keyof TxTheme, string> = {
  bg: '--tx-bg',
  surface: '--tx-surface',
  surfaceAlt: '--tx-surface-alt',
  accent: '--tx-accent',
  primary: '--tx-primary',
  text: '--tx-text',
  textSecondary: '--tx-text-secondary',
  textMuted: '--tx-text-muted',
  border: '--tx-border',
  radius: '--tx-radius',
};

export function setTheme(themeOrName: string | TxTheme, root: HTMLElement = document.documentElement): void {
  const resolved = typeof themeOrName === 'string' ? themes[themeOrName] : themeOrName;
  if (!resolved) return;

  for (const [key, value] of Object.entries(resolved)) {
    const prop = tokenMap[key as keyof TxTheme];
    if (prop && value) root.style.setProperty(prop, value);
  }
}

export function resetTheme(root: HTMLElement = document.documentElement): void {
  for (const prop of Object.values(tokenMap)) {
    root.style.removeProperty(prop);
  }
}
