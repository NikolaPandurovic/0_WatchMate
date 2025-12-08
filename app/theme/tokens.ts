// app/theme/tokens.ts
// Zentrale Design-Definition für Farben, Abstände, Schatten etc.

export const colors = {
  // Hauptfarben
  primary: '#BDF2F2',    // hellblau (Header, Buttons)
  secondary: '#BDEFD9',  // pastellgrün (History Trips)
  background: '#F7F7F7',
  text: '#0F172A',
  muted: '#6B7280',

  // Zusatzfarben
  border: '#E5E7EB',
  black: '#000000',
  white: '#FFFFFF',
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 14,
  lg: 20,
  xl: 32,
};

export const shadow = {
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.12,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
};

// Für ältere Komponenten (Kompatibilität)
export const fig = {
  bg: colors.background,
  header: colors.primary,
  cardUpcoming: colors.primary,
  cardHistory: colors.secondary,
  text: colors.text,
  muted: colors.muted,
  border: colors.border,
  radius: radius.lg,
  pad: spacing.md,
  shadow,
};
