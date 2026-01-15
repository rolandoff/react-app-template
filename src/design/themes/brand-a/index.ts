/**
 * Brand A Theme - Semantic tokens
 * Uses yellow as primary color
 */
import { baseColors } from '../../foundations/colors';

export const brandATheme = {
  colors: {
    // Primary - yellow brand color
    primary: {
      lighter: baseColors.yellow[100],
      light: baseColors.yellow[300],
      main: baseColors.yellow[500],
      dark: baseColors.yellow[600],
      darker: baseColors.yellow[700],
      contrast: baseColors.black,
    },

    // Secondary - gray for secondary actions
    secondary: {
      lighter: baseColors.gray[100],
      light: baseColors.gray[300],
      main: baseColors.gray[500],
      dark: baseColors.gray[600],
      darker: baseColors.gray[700],
      contrast: baseColors.white,
    },

    // Success - green for positive states
    success: {
      lighter: baseColors.green[100],
      light: baseColors.green[300],
      main: baseColors.green[500],
      dark: baseColors.green[600],
      darker: baseColors.green[700],
      contrast: baseColors.white,
    },

    // Warning - using red for warnings (yellow is primary)
    warning: {
      lighter: baseColors.red[100],
      light: baseColors.red[300],
      main: baseColors.red[400],
      dark: baseColors.red[500],
      darker: baseColors.red[600],
      contrast: baseColors.white,
    },

    // Error - red for errors
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
      subtle: baseColors.yellow[50],
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

export type BrandATheme = typeof brandATheme;
