import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon, Menu as MenuIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const useStyles = makeStyles((theme) => ({
    flagIcon: {
        width: 24,
        height: 24,
        cursor: 'pointer',
    },
    menuItemFlag: {
        display: 'flex',
        alignItems: 'center',
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    desktopMenu: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    mobileMenu: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },
    logo: {
        height: 80,
        cursor: 'pointer',
    },
    header: {
        transition: 'top 0.3s ease-in-out, transform 0.3s ease-in-out',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        transform: 'translateY(0)',
    },
    hidden: {
        top: '-80px', 
        transform: 'translateY(-100%)',
    },
}));

function Header({ theme, toggleTheme, aboutMeRef, experienceRef, practiceRef }) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const navigate = useNavigate();

    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuClick = (event) => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        handleMenuClose();
        handleMobileMenuClose();
    };

    const scrollToSection = (sectionRef) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppBar className={`${classes.header} ${!visible ? classes.hidden : ''}`}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="Logo" className={classes.logo} onClick={() => navigate('/')} />
                <div className={classes.desktopMenu}>
                    <Button color="inherit" onClick={() => scrollToSection(aboutMeRef)}>{t('header.about')}</Button>
                    <Button color="inherit" onClick={() => scrollToSection(experienceRef)}>{t('header.experience')}</Button>
                    <Button color="inherit" onClick={() => scrollToSection(practiceRef)}>{t('header.practice')}</Button>
                    <Button color="inherit" onClick={() => window.open('https://www.linkedin.com/in/maximiliano-benitez-6a4974245/','_blanck')}>{t('header.contact')}</Button>
                    <IconButton color="inherit" onClick={handleMenuClick}>
                        <FlagIcon code={i18n.language === 'es' ? "ES" : "US"} size={24} className={classes.flagIcon} />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={() => changeLanguage('es')} className={classes.menuItemFlag}>
                            <FlagIcon code="ES" size={24} className={classes.flagIcon} /> Español
                        </MenuItem>
                        <MenuItem onClick={() => changeLanguage('en')} className={classes.menuItemFlag}>
                            <FlagIcon code="US" size={24} className={classes.flagIcon} /> English
                        </MenuItem>
                    </Menu>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </div>
                <div className={classes.mobileMenu}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMobileMenuClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={mobileMenuAnchorEl} open={Boolean(mobileMenuAnchorEl)} onClose={handleMobileMenuClose}>
                        <MenuItem onClick={() => { scrollToSection(aboutMeRef); handleMobileMenuClose(); }}>{t('header.about')}</MenuItem>
                        <MenuItem onClick={() => { scrollToSection(experienceRef); handleMobileMenuClose(); }}>{t('header.experience')}</MenuItem>
                        <MenuItem onClick={() => { navigate('/projects'); handleMobileMenuClose(); }}>{t('header.projects')}</MenuItem>
                        <MenuItem onClick={() => { navigate('/contact'); handleMobileMenuClose(); }}>{t('header.contact')}</MenuItem>
                        <MenuItem onClick={() => changeLanguage('es')} className={classes.menuItemFlag}>
                            <FlagIcon code="ES" size={24} className={classes.flagIcon} /> Español
                        </MenuItem>
                        <MenuItem onClick={() => changeLanguage('en')} className={classes.menuItemFlag}>
                            <FlagIcon code="US" size={24} className={classes.flagIcon} /> English
                        </MenuItem>
                        <MenuItem onClick={toggleTheme}>
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
