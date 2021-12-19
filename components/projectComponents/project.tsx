import projectStyles from '../../styles/projects.module.scss';


interface Props {
    projectName: string;
};

const Project:React.FC<Props> = ({projectName}) => {

    return (
        <div className={projectStyles.project}>
            <div className={projectStyles.projectInfo}>
                <h2>Project Name</h2>
                <p>Project Description</p>
                <p>Topics: {['Node.js', 'Next.js', 'React.js', 'SCSS'].join(', ')}</p>
            </div>
            <img src='/logo.png' className={projectStyles.projectImg}></img>
        </div>
    )
}

export default Project;