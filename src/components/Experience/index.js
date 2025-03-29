import React, { forwardRef } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const experiences = [
    { key: "experience.planning", icon: "📅" },
    { key: "experience.development", icon: "🛠️" },
    { key: "experience.testing", icon: "🔍" },
    { key: "experience.deployment", icon: "🚀" }
];

const Experience = forwardRef((props, ref) => {
    const { t } = useTranslation();

    return (
        <Container 
            sx={{
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textAlign: 'center',
                paddingTop: 4,
            }} 
            ref={ref}
        >
            <Typography 
                variant="h4" 
                sx={{ 
                    marginBottom: 4, 
                    color: 'primary.main',
                }}
            >
                {t("experience.title")}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {experiences.map((exp, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Paper 
                            sx={{
                                padding: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                                backgroundColor: 'background.paper',
                                boxShadow: 3,
                                flex: 1,
                                minHeight: '200px',
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Typography sx={{ fontSize: '2rem', color: 'secondary.main' }}>
                                {exp.icon}
                            </Typography>
                            <div>
                                <Typography variant="h6">{t(exp.key + ".title")}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.primary', textAlign: 'left' }}>
                                    {t(exp.key + ".description")}
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
});

export default Experience;
