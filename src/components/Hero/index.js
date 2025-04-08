import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AvatarImage from '../../assets/Avatar.png';
import ReactLogo from '../../assets/React.png';
import JSLogo from '../../assets/Js.png';
import NodeLogo from '../../assets/Node.png';
import CSSLogo from '../../assets/Css.png';
import HTMLLogo from '../../assets/Html.png';

const Hero = () => {
    const { t, i18n } = useTranslation();

    const handleDownloadCV = () => {
        const cvFile = process.env.PUBLIC_URL + (i18n.language === 'es' ? '/cv-es.pdf' : '/cv-en.pdf');
        window.open(cvFile, '_blank');
    };    

    return (
        <Box
            sx={{
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(to bottom, #B0BFD6, transparent)",
                backgroundColor: 'background.default',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                paddingTop: "60px",
            }}
        >
            <Container 
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingTop: 4,
                    paddingBottom: 4,
                }}
            >
                {/* Título y Nombre */}
                <Typography 
                    variant="h4" 
                    sx={{ marginBottom: 2, color: 'text.primary' }}
                >
                    {t('hero.greeting')}
                </Typography>

                <Typography 
                    variant="h2" 
                    sx={{ color: 'text.primary', fontWeight: 'bold', marginBottom: 2 }}
                >
                    {t('hero.name')}
                </Typography>

                <Typography 
                    variant="h5" 
                    sx={{ color: 'text.primary', marginBottom: 4 }}
                >
                    {t('hero.role')}
                </Typography>

                {/* Imagen de Avatar */}
                <Box sx={{ marginBottom: 3 }}>
                    <img 
                        src={AvatarImage} 
                        alt="Avatar" 
                        style={{ width: '160px', height: '150px', borderRadius: '50%' }} 
                        loading="lazy"
                    />
                </Box>

                {/* Habilidades */}
                <Typography 
                    variant="h5" 
                    sx={{ color: 'text.secondary', marginBottom: 2 }}
                >
                    {t('hero.skill')}
                </Typography>

                {/* Logos de Tecnologías */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexWrap: 'wrap', 
                        gap: 2, 
                        marginTop: 2 
                    }}
                >
                    {[ReactLogo, JSLogo, NodeLogo, CSSLogo, HTMLLogo].map((logo, index) => (
                        <img 
                            key={index} 
                            src={logo} 
                            alt="Tech Logo" 
                            style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
                            loading="lazy"
                        />
                    ))}
                </Box>

                {/* Botones de habilidades */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        flexWrap: 'wrap', 
                        gap: 1.5, 
                        marginTop: 3 
                    }}
                >
                    {['methodical', 'communicative', 'adaptable', 'analytical'].map((skillKey) => (
                        <Button 
                            key={skillKey} 
                            variant="outlined" 
                            color="primary" 
                            sx={{ borderRadius: '20px', px: 2.5, py: 1 }}
                        >
                            {t(`hero.skills.${skillKey}`)}
                        </Button>
                    ))}
                </Box>

                {/* Botón para descargar CV */}
                <Box sx={{ marginTop: 4 }}>
                    <Button
                        variant="contained"
                        sx={{
                            px: 3,
                            py: 1.5,
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            '&:hover': { backgroundColor: 'primary.dark' },
                        }}
                        onClick={handleDownloadCV}
                    >
                        {t('hero.moreAboutMe')}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
