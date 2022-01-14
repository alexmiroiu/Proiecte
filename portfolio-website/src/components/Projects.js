import React from 'react';
import { useRef, useImperativeHandle } from 'react';

import classes from './Projects.module.css';
import ProjectItem from './ProjectItem';

const easyProjectsList = [
    {
        title: 'Calculator',
        description: 'Un proiect facut cu html, css si javascript.',
        githubLink: 'https://github.com/alexmiroiu',
        projectLink: 'www.google.ro',
        technologies: ['Html', 'Css', 'Javascript']
},
    {
        title: 'Contact Form',
        description: 'Un formular de contact pe care mi-am exersat cunostintele de html, css si js.',
        githubLink: 'https://github.com/alexmiroiu',
        projectLink: 'www.google.ro',
        technologies: ['Html', 'Css', 'Javascript']
},
    {
        title: 'Weather App',
        description: 'O aplicatie care indica vremea in orasul ales de tine.',
        githubLink: 'https://github.com/alexmiroiu',
        projectLink: 'www.google.ro',
        technologies: ['Html', 'Css', 'Javascript']
}];

const intermediateProjects = [
    {
        title: 'JS Maze',
        description: 'Un proiect facut cu html, css si javascript.',
        githubLink: 'https://github.com/alexmiroiu',
        projectLink: 'www.google.ro',
        technologies: ['Html', 'Css', 'Javascript']
},
{
    title: 'F1 Website',
    description: 'Un proiect facut cu html, css si javascript.',
    githubLink: 'https://github.com/alexmiroiu',
    projectLink: 'www.google.ro',
    technologies: ['Html', 'Css', 'Javascript']
},
{
    title: 'Drawing App',
    description: 'Proiectul a fost realizat in react, folosind canvas API.',
    githubLink: 'https://github.com/alexmiroiu',
    projectLink: 'www.google.ro',
    technologies: ['Html', 'Css', 'Javascript']
},
{
    title: 'QuizApp',
    description: 'Proiect realizat in react. Am folosit redux, pentru prima data.',
    githubLink: 'https://github.com/alexmiroiu',
    projectLink: 'www.google.ro',
    technologies: ['Html', 'Css', 'Javascript']
},
{
    title: 'CeMancam App',
    description: 'Primul proiect pe care l-am facut in react.',
    githubLink: 'https://github.com/alexmiroiu',
    projectLink: 'www.google.ro',
    technologies: ['Html', 'Css', 'Javascript']
},
    
]

const Projects = React.forwardRef((props, ref) => {
    const projectsRef = useRef();

    const navigate = () => {
        projectsRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToProjects: navigate
        };
    });
    
    return <div className={classes.projectsContainer} ref={projectsRef}>
        <h2>Proiecte</h2>
        <div className={classes.easy}>
            <h3><span className={classes.preTitleLine}></span>Dificultate redusa<span className={classes.postTitleLine}></span></h3>
            <div className={classes.projectsBox}>
                {easyProjectsList.map(project => <ProjectItem title={project.title} description={project.description} technologies={project.technologies} />)}
            </div>
        </div>
        <div className={classes.intermediate}>
            <h3><span className={classes.preTitleLine}></span>Dificultate medie<span className={classes.postTitleLine}></span></h3>
            <div className={classes.projectsBox}>
                {intermediateProjects.map(project => <ProjectItem title={project.title} description={project.description} technologies={project.technologies} />)}
            </div>
        </div>
    </div>
});

export default Projects;