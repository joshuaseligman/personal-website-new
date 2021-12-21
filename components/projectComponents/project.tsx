import Link from 'next/link';

import { useEffect, useRef } from 'react';

import projectStyles from '../../styles/projects.module.scss';
import animations from '../../styles/animations.module.scss';

import { ProjectInterface, isInViewport } from '../../utils/util';

interface Props {
    project: ProjectInterface;
};

/**
 * The React component for each individual project
 * @param project The project to be rendered 
 * @returns The React component with its animations
 */
const Project:React.FC<Props> = ({ project }) => {

    // Reference to the project on the webpage
    const areaRef = useRef<HTMLAnchorElement>(null);

    /**
     * Function that runs the animation if the project is in the viewport and is still hidden
     */
    function runAnimations():void {
        if (areaRef.current !== null) {
            if (isInViewport(areaRef.current) && areaRef.current.classList.contains(animations.hidden)) {
                areaRef.current.classList.replace(animations.hidden, animations.slideUp10Class);
            }
        }
    }

    useEffect(() => {
        // Wait a second to run the animations
        setTimeout(runAnimations, 1000);
        // Check when the user scrolls
        window.addEventListener('scroll', runAnimations);
    });

    return (             
        // The project leads to a link       
        <Link href={project.projectURL}>
            <a target='_blank' ref={areaRef} className={animations.hidden}>
                <div className={projectStyles.project}>
                    <div className={projectStyles.projectInfo}>
                        <h2>{project.projectName}</h2>
                        <p>{project.projectDescription}</p>
                        <p>Topics: {project.topics.join(', ')}</p>
                    </div>
                    <img src={project.localPathToImg} className={projectStyles.projectImg}></img>
                </div>
            </a>
        </Link>
    );
}

export default Project;