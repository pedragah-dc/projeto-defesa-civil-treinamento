import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    // Cor Principal da Marca (Usada em botões principais, destaques, etc)
    primary: {
      main: '#FC4F00',
      contrastText: '#ffffff',
    },
    // Cor Secundária / Ação Secundária
    secondary: {
      main: '#fbbf24',
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#000000',
    },
    text: {
      primary: '#01203F',
      secondary: '#64748b',
      disabled: '#94a3b8',
    },
    // Customização de Linhas / Dividers
    divider: '#e2e8f0',
    // Cores de Feedback e Estado
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f97316',
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
    // Tons Neutros para Textos e Bordas
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // Superfícies e Fundos
    background: {
      default: '#f8fafc', // Fundo principal da página
      paper: '#EFEFEF',   // Fundo de Cards, Modais e Menus
      transparent: '#EFEFEF67'
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});