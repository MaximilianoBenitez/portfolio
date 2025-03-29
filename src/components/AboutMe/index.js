import React, { forwardRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        padding: theme.spacing(8, 2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(4),
        color: theme.palette.primary.main,
    },
    description: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        marginBottom: theme.spacing(4),
        maxWidth: '100%', 
    },
}));

const AboutMe = forwardRef((props, ref) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Container className={classes.aboutContainer} ref={ref}> {}
            <Typography variant="h4" className={classes.title}>
                {t('aboutMe.title')}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" className={classes.title}>
                        {t('aboutMe.name')}
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                        {t('aboutMe.description')}
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                        {t('aboutMe.description2')}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
});

export default AboutMe;
