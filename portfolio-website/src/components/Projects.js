import React from 'react';
import { useRef, useImperativeHandle, useContext } from 'react';

import classes from './Projects.module.css';
import ProjectItem from './ProjectItem';

import GlobalState from '../store/store';

const easyProjectsList = [
    {
        title: 'Calculator',
        description: 'Un proiect facut cu html, css si javascript. Am incercat sa copiez calculatorul care se gaseste pe Iphone.',
        githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/calculator',
        projectLink: 'https://alexmiroiu.github.io/calculator/',
        technologies: ['Html', 'Css', 'Javascript'],
        format: ['Mobile', 'Desktop']
},
    {
        title: 'Contact Form',
        description: 'Un simplu formular de contact pe care am exersat validarea campurilor.',
        githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/contactForm',
        projectLink: 'https://alexmiroiu.github.io/contactForm/',
        technologies: ['Html', 'Css', 'Javascript'],
        format: ['Mobile', 'Desktop']
},
    {
        title: 'Weather App',
        description: 'O aplicatie care indica vremea in orasul ales de tine. Este primul proiect in care am folosit fetch Api.',
        githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/weatherAPP',
        projectLink: 'https://alexmiroiu.github.io/weatherAPP/',
        technologies: ['Html', 'Css', 'Javascript', 'Rest API'],
        format: ['Mobile', 'Desktop']
}];

const intermediateProjects = [
{
    title: 'JS Maze',
    description: 'Un joc in care se manevreaza caracterul prin intermediul sagetilor de la tastatura.',
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/JSMaze',
    projectLink: 'https://alexmiroiu.github.io/JSmaze/',
    technologies: ['Html', 'Css', 'Javascript'],
    format: ['Desktop']
},
{
    title: 'F1 Website',
    description: 'Un website care afiseaza informatii curente despre campionatul de Formula 1.',
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/F1website',
    projectLink: 'https://alexmiroiu.github.io/F1Website/',
    technologies: ['Html', 'Css', 'Javascript', 'Rest API'],
    format: ['Desktop']
},
{
    title: 'Drawing App',
    description: 'O aplicatie in care se poate desena folosind cursorul.',
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/drawing-app/drawing-app',
    projectLink: 'https://alexmiroiu.github.io/drawingApp/',
    technologies: ['React', 'Canvas API'],
    format: ['Desktop']
},
{
    title: 'QuizApp',
    description: 'O aplicatie in care se sustine un test, din diferite domenii, la final afisandu-se rezultatele.',
    githubLink: 'https://github.com/alexmiroiu/Proiecte/tree/main/quiz-app',
    projectLink: 'https://alexmiroiu.github.io/quiz/',
    technologies: ['React', 'Redux'],
    format: ['Mobile', 'Desktop']
},
{
    title: 'CeGatim App',
    description: 'O aplicatie in care poti adauga preparate pe care le gatesti ca mai apoi sa le poti vizualiza.',
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

    const navigate = () => {
        projectsRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToProjects: navigate
        };
    });
    
    return <div className={`${classes.projectsContainer} ${dark ? classes.projectsContDark : classes.projectsContLight}`} ref={projectsRef}>
        <h2>Proiecte</h2>
        <div className={classes.easy}>
            <h3><span className={classes.preTitleLine}></span>Dificultate redusa<span className={classes.postTitleLine}></span></h3>
            <div className={classes.projectsBox}>
                {easyProjectsList.map(project => <ProjectItem title={project.title} description={project.description} technologies={project.technologies} gitHubLink={project.githubLink} projectLink={project.projectLink} projectFormat={project.format}/>)}
            </div>
        </div>
        <div className={classes.intermediate}>
            <h3><span className={classes.preTitleLine}></span>Dificultate medie<span className={classes.postTitleLine}></span></h3>
            <div className={classes.projectsBox}>
                {intermediateProjects.map(project => <ProjectItem title={project.title} description={project.description} technologies={project.technologies} gitHubLink={project.githubLink} projectLink={project.projectLink} projectFormat={project.format}/>)}
            </div>
        </div>
    </div>
});

export default Projects;