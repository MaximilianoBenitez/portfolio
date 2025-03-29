import { createTheme } from '@mui/material/styles';

const lightPalette = {
    primary: {
        main: '#9594B5',  // Color principal
        light: '#B0BFD6', // Color claro
        dark: '#A460A4',  // Color oscuro
        contrastText: '#F8F6F4',  // Texto de contraste claro
    },
    secondary: {
        main: '#7C776E', // Color secundario
        light: '#F5F6F6', // Color principal claro
        dark: '#364978',  // Color de fondo oscuro
        contrastText: '#000000', // Texto de contraste oscuro
    },
    background: {
        default: '#F5F6F6', // Fondo principal claro
        paper: '#ffffff',   // Fondo de los componentes
    },
    text: {
        primary: '#000000',  // Texto principal
        secondary: '#74627F', // Texto secundario
    },
    
};

const darkPalette = {
    primary: {
        main: '#91AECB',  // Color principal claro
        light: '#F5F6F6', // Color claro
        dark: '#364978',  // Color oscuro
        contrastText: '#000000',  // Texto de contraste oscuro
    },
    secondary: {
        main: '#74627F', // Color secundario oscuro
        light: '#364978', // Color principal oscuro
        dark: '#7C776E',  // Color de fondo secundario
        contrastText: '#ffffff', // Texto de contraste claro
    },
    background: {
        default: '#121212', // Fondo principal oscuro
        paper: '#1E1E1E',   // Fondo de los componentes oscuros
    },
    text: {
        primary: '#ffffff',  // Texto principal claro
        secondary: '#91AECB', // Texto secundario claro
    },
};

const getDesignTokens = (mode) => ({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: {
        fontFamily: 'Inter, sans-serif',
      },
});

const theme = (mode) => createTheme(getDesignTokens(mode));

export default theme;
