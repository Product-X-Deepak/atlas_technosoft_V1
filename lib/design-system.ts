/**
 * Atlas Technosoft Design System
 *
 * This file defines the core design tokens and utilities for the Atlas Technosoft design system.
 * It follows atomic design principles and ensures consistency across the application.
 */

// Color palette with semantic naming
export const colors = {
  // Primary colors
  primary: {
    50: "hsl(220, 47%, 97%)",
    100: "hsl(220, 47%, 94%)",
    200: "hsl(220, 47%, 90%)",
    300: "hsl(220, 47%, 80%)",
    400: "hsl(220, 47%, 60%)",
    500: "hsl(220, 47%, 25%)", // Navy #223A5E
    600: "hsl(220, 47%, 20%)",
    700: "hsl(220, 47%, 15%)",
    800: "hsl(220, 47%, 10%)",
    900: "hsl(220, 47%, 7%)",
    950: "hsl(220, 47%, 4%)",
  },

  // Secondary colors
  secondary: {
    50: "hsl(204, 23%, 97%)",
    100: "hsl(204, 23%, 94%)",
    200: "hsl(204, 23%, 90%)",
    300: "hsl(204, 23%, 80%)",
    400: "hsl(204, 23%, 70%)",
    500: "hsl(204, 23%, 93%)", // Light Gray #E8EEF1
    600: "hsl(204, 23%, 80%)",
    700: "hsl(204, 23%, 60%)",
    800: "hsl(204, 23%, 40%)",
    900: "hsl(204, 23%, 20%)",
    950: "hsl(204, 23%, 10%)",
  },

  // Accent colors
  accent: {
    50: "hsl(210, 6%, 97%)",
    100: "hsl(210, 6%, 94%)",
    200: "hsl(210, 6%, 90%)",
    300: "hsl(210, 6%, 80%)",
    400: "hsl(210, 6%, 75%)", // Silver #BFC0C0
    500: "hsl(210, 6%, 75%)", // Silver #BFC0C0
    600: "hsl(210, 6%, 60%)",
    700: "hsl(210, 6%, 50%)",
    800: "hsl(210, 6%, 40%)",
    900: "hsl(210, 6%, 30%)",
    950: "hsl(210, 6%, 20%)",
  },

  // Gold accent (use sparingly)
  gold: {
    50: "hsl(30, 85%, 95%)",
    100: "hsl(30, 85%, 90%)",
    200: "hsl(30, 85%, 80%)",
    300: "hsl(30, 85%, 70%)",
    400: "hsl(30, 85%, 62%)", // Gold #EF8354
    500: "hsl(30, 85%, 62%)", // Gold #EF8354
    600: "hsl(30, 85%, 50%)",
    700: "hsl(30, 85%, 40%)",
    800: "hsl(30, 85%, 30%)",
    900: "hsl(30, 85%, 20%)",
    950: "hsl(30, 85%, 10%)",
  },

  // Neutral colors for dark mode
  darkNeutral: {
    50: "hsl(220, 47%, 98%)",
    100: "hsl(220, 47%, 95%)",
    200: "hsl(220, 47%, 90%)",
    300: "hsl(220, 47%, 80%)",
    400: "hsl(220, 47%, 70%)",
    500: "hsl(220, 47%, 60%)",
    600: "hsl(220, 47%, 50%)",
    700: "hsl(220, 47%, 40%)",
    800: "hsl(220, 47%, 30%)",
    900: "hsl(220, 47%, 20%)",
    950: "hsl(220, 47%, 10%)",
  },

  // Neutral colors for light mode
  lightNeutral: {
    50: "hsl(204, 23%, 98%)",
    100: "hsl(204, 23%, 96%)",
    200: "hsl(204, 23%, 93%)",
    300: "hsl(204, 23%, 90%)",
    400: "hsl(204, 23%, 80%)",
    500: "hsl(204, 23%, 70%)",
    600: "hsl(204, 23%, 60%)",
    700: "hsl(204, 23%, 50%)",
    800: "hsl(204, 23%, 40%)",
    900: "hsl(204, 23%, 30%)",
    950: "hsl(204, 23%, 20%)",
  },
}

// Typography scale with modular scaling
export const typography = {
  fontFamily: {
    sans: "var(--font-montserrat), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    heading: "var(--font-heading), var(--font-montserrat), ui-sans-serif, system-ui",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSize: {
    // Fluid typography scale using clamp for responsive text
    xs: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
    sm: "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
    base: "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
    lg: "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
    xl: "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
    "2xl": "clamp(1.5rem, 1.3rem + 1vw, 1.875rem)",
    "3xl": "clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)",
    "4xl": "clamp(2.25rem, 1.9rem + 1.75vw, 3rem)",
    "5xl": "clamp(3rem, 2.5rem + 2.5vw, 4rem)",
    "6xl": "clamp(3.75rem, 3rem + 3.75vw, 6rem)",
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    none: "1",
    tight: "1.2",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
}

// Spacing scale with consistent increments
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
  // Fluid spacing using clamp
  "fluid-1": "clamp(0.25rem, 0.5vw, 0.5rem)",
  "fluid-2": "clamp(0.5rem, 1vw, 1rem)",
  "fluid-4": "clamp(1rem, 2vw, 1.5rem)",
  "fluid-8": "clamp(1.5rem, 4vw, 2rem)",
  "fluid-16": "clamp(2rem, 8vw, 4rem)",
}

// Border radius scale
export const borderRadius = {
  none: "0",
  sm: "0.125rem",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
}

// Shadow scale with consistent increments
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
  // Premium shadows with subtle color
  "premium-sm": "0 2px 5px 0 rgba(255, 140, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
  "premium-md": "0 4px 10px -1px rgba(255, 140, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "premium-lg": "0 10px 20px -3px rgba(255, 140, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
}

// Z-index scale
export const zIndex = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
  auto: "auto",
}

// Animation timing
export const animation = {
  duration: {
    fastest: "100ms",
    faster: "200ms",
    fast: "300ms",
    normal: "400ms",
    slow: "500ms",
    slower: "600ms",
    slowest: "800ms",
  },
  easing: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
}

// Breakpoints for responsive design
export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
}

// Container sizes
export const containers = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
}

// Media queries
export const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
  motion: "(prefers-reduced-motion: no-preference)",
  hover: "(hover: hover)",
}

// Design tokens for semantic use
export const tokens = {
  // Light mode
  light: {
    background: colors.lightNeutral[50],
    foreground: colors.lightNeutral[950],
    muted: colors.lightNeutral[100],
    mutedForeground: colors.lightNeutral[700],
    border: colors.lightNeutral[200],
    input: colors.lightNeutral[200],
    ring: colors.primary[500],
  },
  // Dark mode
  dark: {
    background: colors.darkNeutral[950],
    foreground: colors.darkNeutral[50],
    muted: colors.darkNeutral[900],
    mutedForeground: colors.darkNeutral[400],
    border: colors.darkNeutral[800],
    input: colors.darkNeutral[800],
    ring: colors.primary[500],
  },
}

// Export the complete design system
export const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  zIndex,
  animation,
  breakpoints,
  containers,
  mediaQueries,
  tokens,
}

export default designSystem
