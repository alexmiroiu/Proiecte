import classes from './ProjectItem.module.css';
import folderIcon from '../assets/icons/folder.svg';
import githubIcon from '../assets/icons/githubLogo.svg';
import linkIcon from '../assets/icons/link.svg';

const ProjectItem = (props) => {
 return <div className={classes.project}>
     <div className={classes.upperWrapper}>
        <div className={classes.header}>
            <img src={folderIcon} alt="folder" />
            <div className={classes.iconSet}>
                <img src={githubIcon} alt='github' />
                <img src={linkIcon} alt='external link' />
            </div>
        </div>
        <div className={classes.body}>
            <h3 className={classes.projectTitle}>{props.title}</h3>
            <p className={classes.description}>{props.description}</p>
        </div>
     </div>
    <div className={classes.footer}>
         {props.technologies.map(item => <p>{item}</p>)}
    </div>
 </div>
}

export default ProjectItem;