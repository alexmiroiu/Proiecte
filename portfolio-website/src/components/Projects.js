import React from 'react';
import { useRef, useImperativeHandle, useContext } from 'react';

import classes from './Projects.module.css';
import ProjectItem from './ProjectItem';

import GlobalState from '../store/store';

const easyProjectsList = [
    {
        title: 'Calculator',
        description: [
            'Un proiect facut cu html, css si javascript. Am incercat sa copiez calculatorul care se gaseste pe Iphone.',
            'The project was made using HTML, CSS and Javascript. I tried to replicate the calculator app found on the Iphone.'
        ],
        githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/calculator',
        projectLink: 'https://alexmiroiu.github.io/calculator/',
        technologies: ['Html', 'Css', 'Javascript'],
        format: ['Mobile', 'Desktop']
},
    {
        title: 'Contact Form',
        description: [
            'Un simplu formular de contact pe care am exersat validarea campurilor si CSS.',
            'A simple contact form which I used to practice form validation on. I also focused on styling more than usual to practice CSS.'
        ],
        githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/contactForm',
        projectLink: 'https://alexmiroiu.github.io/contactForm/',
        technologies: ['Html', 'Css', 'Javascript'],
        format: ['Mobile', 'Desktop']
},
    {
        title: 'Weather App',
        description: [
            'O aplicatie care indica vremea in orasul ales de tine. Este primul proiect in care am folosit Javascript pentru a ma conecta la un API.',
            'A simple weather app that shows the weather in the City you choose. It was the time I used Javascript to connect to an API.'
        ],
        githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/weatherAPP',
        projectLink: 'https://alexmiroiu.github.io/weatherAPP/',
        technologies: ['Html', 'Css', 'Javascript', 'Rest API'],
        format: ['Mobile', 'Desktop']
}];

const intermediateProjects = [
{
    title: 'JS Maze',
    description: [
        'Este un joc in care utilizatorul trebuie sa manevreze caracterul prin intermediul sagetilor tastaturii pentru a rezolva labirintul',
        'A game in which the user has to move the character around using the keyboard arrows keys in order to solve the maze.'
],
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/JSMaze',
    projectLink: 'https://alexmiroiu.github.io/JSmaze/',
    technologies: ['Html', 'Css', 'Javascript'],
    format: ['Desktop']
},
{
    title: 'F1 Website',
    description: [
        'Un website care afiseaza informatii curente despre campionatul de Formula 1.',
        'A website that displays live and up to date information about the ongoing F1 championship as well as the currently active F1 drivers.'
    ],
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/F1website',
    projectLink: 'https://alexmiroiu.github.io/F1Website/',
    technologies: ['Html', 'Css', 'Javascript', 'Rest API'],
    format: ['Desktop']
},
{
    title: 'Drawing App',
    description: [
        'O aplicatie in care se poate desena folosind mouse-ul.',
        'A web app in which the user can draw in a canvas using the mouse.'
    ],
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/drawing-app/drawing-app',
    projectLink: 'https://alexmiroiu.github.io/drawingApp/',
    technologies: ['React', 'Canvas API'],
    format: ['Desktop']
},
{
    title: 'QuizApp',
    description: [
        'Un website unde utilizatorul poate alege sa sustina unul din trei teste disponibile, la finalul caruia i se afiseaza rezultatul.',
        'An app where the user can take a test choosing from 3 available variants.'
    ],
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/quiz-app',
    projectLink: 'https://alexmiroiu.github.io/quiz/',
    technologies: ['React', 'Redux'],
    format: ['Mobile', 'Desktop']
},
{
    title: 'CeGatim App',
    description: [
        'O aplicatie in care utilizatorul poate adauga mancarurile pe care le gateste intr-o baza de date pentru ca ulterior sa le poata vizualiza.',
        'An app where the user can add dishes he/she cooks and then view them in a list.'
    ],
    githubLink: 'https://github.com/alexmiroiu',
    projectLink: 'https://alexmiroiu.github.io/ceGatim/',
    technologies: ['React', 'Firebase'],
    format: ['Mobile']
},
    
]

const Projects = React.forwardRef((props, ref) => {
    const projectsRef = useRef();
    const ctx = useContext(GlobalState);

    const dark = ctx.darkMode;
    const language = ctx.currentLanguage;

    const navigate = () => {
        projectsRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToProjects: navigate
        };
    });

    const displayedText = {
        title: {
            ro: 'Proiecte',
            eng: 'Projects'
        },
        difficulty1:{
            ro: 'Dificultate redusa',
            eng: 'Easy difficulty'
        },
        difficulty2:{
            ro: 'Dificultate medie',
            eng: 'Intermediate difficulty'
        }
    }
    
    return <div className={`${classes.projectsContainer} ${dark ? classes.projectsContDark : classes.projectsContLight}`} ref={projectsRef}>
        <h2>{language === 'ro' ? displayedText.title.ro : displayedText.title.eng}</h2>
        <div className={classes.easy}>
            <h3><span className={classes.preTitleLine}></span>{language === 'ro' ? displayedText.difficulty1.ro : displayedText.difficulty1.eng}<span className={classes.postTitleLine}></span></h3>
            <div className={classes.projectsBox}>
                {easyProjectsList.map(project => <ProjectItem title={project.title} description={language === 'ro' ? project.description[0] : project.description[1]} technologies={project.technologies} gitHubLink={project.githubLink} projectLink={project.projectLink} projectFormat={project.format}/>)}
            </div>
        </div>
        <div className={classes.intermediate}>
            <h3><span className={classes.preTitleLine}></span>{language === 'ro' ? displayedText.difficulty2.ro : displayedText.difficulty2.eng}<span className={classes.postTitleLine}></span></h3>
            <div className={classes.projectsBox}>
                {intermediateProjects.map(project => <ProjectItem title={project.title} description={language === 'ro' ? project.description[0] : project.description[1]} technologies={project.technologies} gitHubLink={project.githubLink} projectLink={project.projectLink} projectFormat={project.format}/>)}
            </div>
        </div>
    </div>
});

export default Projects;