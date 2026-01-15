/**
 * Default Theme - Semantic tokens
 * Maps semantic meaning to foundation primitives
 */
import { baseColors } from '../../foundations/colors';

export const defaultTheme = {
  colors: {
    // Primary - used for primary actions, links, focus states
    primary: {
      lighter: baseColors.blue[100],
      light: baseColors.blue[300],
      main: baseColors.blue[500],
      dark: baseColors.blue[600],
      darker: baseColors.blue[700],
      contrast: baseColors.white,
    },

    // Secondary - used for secondary actions
    secondary: {
      lighter: baseColors.gray[100],
      light: baseColors.gray[300],
      main: baseColors.gray[500],
      dark: baseColors.gray[600],
      darker: baseColors.gray[700],
      contrast: baseColors.white,
    },

    // Success - used for success states, confirmations
    success: {
      lighter: baseColors.green[100],
      light: baseColors.green[300],
      main: baseColors.green[500],
      dark: baseColors.green[600],
      darker: baseColors.green[700],
      contrast: baseColors.white,
    },

    // Warning - used for warning states, cautions
    warning: {
      lighter: baseColors.yellow[100],
      light: baseColors.yellow[300],
      main: baseColors.yellow[500],
      dark: baseColors.yellow[600],
      darker: baseColors.yellow[700],
      contrast: baseColors.black,
    },

    // Error - used for error states, destructive actions
    error: {
      lighter: baseColors.red[100],
      light: baseColors.red[300],
      main: baseColors.red[500],
      dark: baseColors.red[600],
      darker: baseColors.red[700],
      contrast: baseColors.white,
    },

    // Background
    background: {
      default: baseColors.white,
      paper: baseColors.gray[50],
      subtle: baseColors.gray[100],
    },

    // Text
    text: {
      primary: baseColors.gray[900],
      secondary: baseColors.gray[600],
      disabled: baseColors.gray[400],
      inverse: baseColors.white,
    },

    // Border
    border: {
      light: baseColors.gray[200],
      main: baseColors.gray[300],
      dark: baseColors.gray[400],
    },
  },
} as const;

export type Theme = typeof defaultTheme;
