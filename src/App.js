import React, { useState, useMemo, useRef } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Practice from './components/Practice';
import Footer from "./components/Footer";
import theme from "./components/theme";
import Experience from './components/Experience';

const App = () => {
    const [mode, setMode] = useState('light');
    const aboutMeRef = useRef(null);
    const experienceRef = useRef(null);
    const practiceRef = useRef(null);

    const themeConfig = useMemo(() => theme(mode), [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={themeConfig}>
            <CssBaseline />
            <Router>
                {}
                <Header 
                    theme={themeConfig} 
                    toggleTheme={toggleTheme} 
                    aboutMeRef={aboutMeRef} 
                    experienceRef={experienceRef} 
                    practiceRef={practiceRef}
                />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            {}
                            <AboutMe ref={aboutMeRef} />
                            <Experience ref={experienceRef} />
                            <Practice ref={practiceRef} /> {}
                        </>
                    } />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
