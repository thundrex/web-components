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
  neuDark?: string;
  neuLight?: string;
}

export const themes: Record<string, TxTheme> = {
  light: {
    bg: '#E8ECF0',
    surface: '#E8ECF0',
    surfaceAlt: '#DFE3E8',
    accent: '#F3B23A',
    primary: '#4A7CFF',
    text: '#1A2138',
    textSecondary: '#4D5B6A',
    textMuted: '#6B7886',
    border: 'rgba(0, 0, 0, 0.06)',
    neuDark: 'rgba(174,182,196,0.18)',
    neuLight: 'rgba(255,255,255,0.65)',
  },
  dark: {
    bg: '#141414',
    surface: '#141414',
    surfaceAlt: '#0C0C0C',
    accent: '#F3B23A',
    primary: '#6B9AFF',
    text: '#E8ECF4',
    textSecondary: '#A0A8B4',
    textMuted: '#6E7A88',
    border: 'rgba(255, 255, 255, 0.06)',
    neuDark: 'rgba(0,0,0,0.5)',
    neuLight: 'rgba(255,255,255,0.04)',
  },
  ocean: {
    bg: '#E2EBF0',
    surface: '#E2EBF0',
    surfaceAlt: '#D6DFE8',
    accent: '#0EA5E9',
    primary: '#0284C7',
    text: '#0C2340',
    textSecondary: '#3D5A74',
    textMuted: '#567390',
    border: 'rgba(0, 0, 0, 0.06)',
    neuDark: 'rgba(160,175,190,0.22)',
    neuLight: 'rgba(255,255,255,0.68)',
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
  neuDark: '--tx-neu-dark',
  neuLight: '--tx-neu-light',
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
