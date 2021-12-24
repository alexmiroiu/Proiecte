import classes from './Projects.module.css';
import ProjectItem from './ProjectItem';

const projectsList = [
    {
        title: 'Calculator',
        description: 'Un proiect facut cu html, css si javascript.',
        githubLink: 'https://github.com/alexmiroiu',
        projectLink: 'www.google.ro',
        technologies: ['html', 'css', 'javascript']
},
    {
        title: 'Contact Form',
        description: 'Un formular de contact pe care mi-am exersat cunostintele de html, css si js.',
        githubLink: 'https://github.com/alexmiroiu',
        projectLink: 'www.google.ro',
        technologies: ['html', 'css', 'javascript']
},

]

const Projects = () => {
    

    return <div className={classes.projectsContainer}>
        <div className={classes.easy}>
            <h1>Primele proiecte</h1>
            <div className={classes.projectsBox}>
                {projectsList.map(project => <ProjectItem title={project.title} description={project.description} technologies={project.technologies} />)}

            </div>
        </div>
        <div className={classes.intermediate}>
            <h1>Proiecte de dificultate medie</h1>
            <div className={classes.projectsBox}>
            </div>

        </div>
    </div>
}

export default Projects;