import { useContext } from 'react';

import classes from './ProjectItem.module.css';
import SvgFolder from './iconComponents/Folder';
import SvgGithubLogo from './iconComponents/GithubLogo';
import SvgLink from './iconComponents/Link';

import Theme from '../store/theme';

const ProjectItem = (props) => {
const ctx = useContext(Theme);
const dark = ctx.darkMode;

 return <div className={`${classes.project} ${dark ? classes.projectDark : classes.projectLight}`}>
     <div className={classes.upperWrapper}>
        <div className={classes.header}>
            <SvgFolder fill={dark ? 'var(--antique-white)' : ''}/>
            <div className={classes.iconSet}>
                <SvgGithubLogo className={`${classes.github} ${dark ? classes.githubDark : classes.githubLight}`}/>
                <SvgLink className={`${classes.link} ${dark ? classes.linkDark : classes.linkLight}`}/>
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
 </div>
}

export default ProjectItem;