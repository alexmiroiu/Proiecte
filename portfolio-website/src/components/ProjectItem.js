import { useContext } from 'react';

import classes from './ProjectItem.module.css';
import SvgFolder from './iconComponents/Folder';
import SvgGithubLogo from './iconComponents/GithubLogo';
import SvgLink from './iconComponents/Link';

import GlobalState from '../store/store';

const ProjectItem = (props) => {
const ctx = useContext(GlobalState);
const dark = ctx.darkMode;
const format = ctx.format;

let clickHandler = (e) => {
    if(!props.projectFormat.includes('Mobile') & format === 'Mobile') {
        e.preventDefault();
        ctx.changeModalState();
        document.body.style.overflowY = 'hidden';
    } else if (!props.projectFormat.includes('Desktop') & format === 'Desktop') {
        e.preventDefault();
        ctx.changeModalState();
        document.body.style.overflowY = 'hidden';
    }
}

 return <a href={props.projectLink} onClick={clickHandler} target="_blank" rel="noreferrer noopener" className={`${classes.project} ${dark ? classes.projectDark : classes.projectLight}`}>
     <div className={classes.upperWrapper}>
        <div className={classes.header}>
            <SvgFolder fill={dark ? 'var(--antique-white)' : ''}/>
            <div className={classes.iconSet}>
                <a href={props.gitHubLink} target="_blank" rel="noreferrer noopener">
                <SvgGithubLogo className={`${classes.github} ${dark ? classes.githubDark : classes.githubLight}`}/>
                </a>
                <a href={props.projectLink} target="_blank" rel="noreferrer noopener">
                <SvgLink className={`${classes.link} ${dark ? classes.linkDark : classes.linkLight}`}/>
                </a>
            </div>
        </div>
        <div className={classes.body}>
            <h3 className={classes.projectTitle}>{props.title}</h3>
            <p className={classes.description}>{props.description}</p>
        </div>
     </div>
    <div className={classes.footer}>
         {props.technologies.map(item => <p className={`${dark ? classes.techDark : classes.techLight}`}>{item}</p>)}
    </div>
 </a>
}

export default ProjectItem;