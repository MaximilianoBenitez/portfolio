import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    header: {
                        title: "My Portfolio",
                        about: "About Me",
                        experience: "Experience",
                        practice: "Practices",
                        skills: "Skills",
                        contact: "Contact"
                    },
                    about: {
                        title: "About Me",
                        description: "I am Osvaldo Maximiliano Benitez Lezcano, a Support QA and Web Developer with a passion for creating intuitive and responsive web applications. My skills include working with technologies such as React, Node.js, JavaScript, CSS, and HTML. I am committed to continuous learning and improvement in my field."
                    },
                    hero: {
                        greeting: "WELCOME!",
                        name: "I am Osvaldo Maximiliano Benitez Lezcano",
                        role: "Support QA & Web Developer",
                        skill: "Skills",
                        skills: {
                            methodical: "Methodical",
                            communicative: "Communicative",
                            adaptable: "Adaptable",
                            analytical: "Analytical"
                        },
                        moreAboutMe: "Download CV"
                    },
                    aboutMe: {
                        title: "About Me",
                        description: "I am a web, mobile, and QA developer with one year of experience. I have gained knowledge in tools such as HTML, CSS, JavaScript, React.js, React Native, SQL, and Git, which are essential for the work I do.",
                        description2: "As a freelancer, I focus on creating innovative and high-quality web solutions, always aiming to exceed my clients' expectations and stay updated with the latest trends to ensure secure and up-to-date projects.",
                        name: "Osvaldo Maximiliano Benitez Lezcano"
                    },
                    experience: {
                        title: "Experience",
                        planning: {
                            title: "Planning and Design",
                            description: "Understanding client needs, objectives, and requirements to design a proper structure."
                        },
                        development: {
                            title: "Development and Construction",
                            description: "Selecting the right tools and platforms to build efficient and secure solutions."
                        },
                        testing: {
                            title: "Testing and Quality Assurance",
                            description: "Ensuring the functionality, performance, and security of applications through rigorous testing."
                        },
                        deployment: {
                            title: "Deployment and Maintenance",
                            description: "Launching applications and providing continuous maintenance and support."
                        }
                    },
                    practice: {
                        title: "My Practice",
                        viewMore: "Go to repository",
                        technologies: "Technologies",
                        todoList: {
                            title: "To-Do List App",
                            description: "An application to manage pending tasks with the ability to add, delete, and mark tasks as completed.",
                            technologies: "React, JavaScript, CSS"
                        },
                        weatherApp: {
                            title: "Weather App",
                            description: "An application to check the current weather using a weather API.",
                            technologies: "React, API, Javascript, CSS"
                        }
                    },
                    footer: {
                        rights: "All rights reserved.",
                        follow: "Follow me",
                        contactMe: "Contact me"  
                    }
                    
                }
            },
            es: {
                translation: {
                    header: {
                        title: "Mi Portafolio",
                        about: "Sobre Mí",
                        experience: "Experiencia",
                        practice: "Prácticas",
                        skills: "Habilidades",
                        contact: "Contacto"
                    },
                    about: {
                        title: "Sobre Mí",
                        description: "Soy Osvaldo Maximiliano Benitez Lezcano, un Support QA y Desarrollador Web con pasión por crear aplicaciones web intuitivas y responsivas. Mis habilidades incluyen trabajar con tecnologías como React, Node.js, JavaScript, CSS y HTML. Estoy comprometido con el aprendizaje continuo y la mejora en mi campo."
                    },
                    hero: {
                        greeting: "¡BIENVENIDOS!",
                        name: "Soy Osvaldo Maximiliano Benitez Lezcano",
                        role: "Support QA & Desarrollador Web",
                        skill: "Habilidades",
                        skills: {
                            methodical: "Metódico",
                            communicative: "Comunicativo",
                            adaptable: "Adaptable",
                            analytical: "Analítico"
                        },
                        moreAboutMe: "Descargar Cv"
                    },
                    aboutMe: {
                        title: "Sobre Mí",
                        description: "Soy programador web, móvil y QA con un año de experiencia. He adquirido conocimientos sobre herramientas como HTML, CSS, JavaScript, React.js, React Native, SQL y Git, las cuales son esenciales para los trabajos que llevo a cabo.",
                        description2: "Como freelancer, me enfoco en crear soluciones web innovadoras y de alta calidad, siempre buscando superar las expectativas de mis clientes y mantenerme al día con las últimas tendencias para asegurar proyectos seguros y actuales.",
                        name: "Osvaldo Maximiliano Benitez Lezcano"
                    },
                    experience: {
                        title: "Experiencia",
                        planning: {
                            title: "Planificación y Diseño",
                            description: "Comprender las necesidades del cliente, objetivos y requisitos para diseñar una estructura adecuada."
                        },
                        development: {
                            title: "Desarrollo y Construcción",
                            description: "Selección de herramientas y plataformas para crear soluciones eficientes y seguras."
                        },
                        testing: {
                            title: "Pruebas y Control de Calidad",
                            description: "Garantizar la funcionalidad, rendimiento y seguridad de las aplicaciones mediante pruebas rigurosas."
                        },
                        deployment: {
                            title: "Despliegue y Mantenimiento",
                            description: "Lanzamiento de aplicaciones y mantenimiento continuo."
                        }
                    },
                    practice: {
                        title: "Mis Prácticas",
                        viewMore: "Ir al repositorio",
                        technologies: "Tecnologías",
                        todoList: {
                            title: "Aplicación de Tareas",
                            description: "Una aplicación para gestionar tareas pendientes con funcionalidad de agregar, eliminar y marcar tareas como completas.",
                            technologies: "React, JavaScript, CSS"
                        },
                        weatherApp: {
                            title: "Aplicación del Clima",
                            description: "Aplicación para consultar el clima actual usando una API de clima.",
                            technologies: "React, API, Javacript, CSS"
                        }
                    },
                    footer: {
                        rights: "Todos los derechos reservados.",
                        follow: "Sígueme",
                        contactMe: "Contáctame"  
                    }
                }
            }
        },
        lng: 'es', 
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
