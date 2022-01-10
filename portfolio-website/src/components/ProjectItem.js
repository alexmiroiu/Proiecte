import { useContext } from 'react';

import classes from './ProjectItem.module.css';
import SvgFolder from './iconComponents/Folder';
import SvgGithubLogo from './iconComponents/GithubLogo';
import SvgLink from './iconComponents/Link';

import Theme from '../store/theme';

const ProjectItem = (props) => {
const ctx = useContext(Theme);

 return <div className={classes.project}>
     <div className={classes.upperWrapper}>
        <div className={classes.header}>
            <SvgFolder />
            <div className={classes.iconSet}>
                <SvgGithubLogo className={classes.github}/>
                <SvgLink className={classes.link}/>
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