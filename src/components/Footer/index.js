import React from 'react';
import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@mui/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0),
        marginTop: theme.spacing(8),
        borderTop: `1px solid ${theme.palette.divider}`,
    },
    icon: {
        margin: theme.spacing(1),
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
    },
    contactText: {
        color: theme.palette.text.secondary,
    },
}));

const Footer = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Container maxWidth="lg">
                <Box className={classes.socialLinks}>
                    <IconButton
                        component={MuiLink}
                        href="https://www.linkedin.com/in/maximiliano-benitez-6a4974245/"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                        className={classes.icon}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        component={MuiLink}
                        href="https://github.com/MaximilianoBenitez"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                        className={classes.icon}
                    >
                        <GitHubIcon />
                    </IconButton>
                </Box>
                <Typography variant="body2" align="center" className={classes.contactText}>
                    {t('footer.contactMe')}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
