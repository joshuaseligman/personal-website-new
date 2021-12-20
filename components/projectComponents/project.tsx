import Link from 'next/link';

import { useEffect, useRef } from 'react';

import projectStyles from '../../styles/projects.module.scss';
import animations from '../../styles/animations.module.scss';

interface Props {
    project: {
        projectName: string,
        projectDescription: string,
        topics: string[],
        localPathToImg: string,
        projectURL: string
    }
};

const Project:React.FC<Props> = ({ project }) => {

    const areaRef = useRef<HTMLAnchorElement>(null);

    /**
     * Function that determines if a section is visible
     * @param section The HTML div that is being checked
     * @returns Whether or not the div is visible on the screen
     */
    function isInViewport(section:HTMLAnchorElement):boolean {
        // Get the bounding box of the div element
        const box:DOMRect = section.getBoundingClientRect();
        return  (box.top >= 0 && box.top < window.innerHeight) || // Top is visible
                (box.bottom >= 0 && box.bottom < window.innerHeight) || // Bottom is visible
                (box.top < 0 && box.bottom > window.innerHeight); // Neither top nor bottom are visible but we are in between
    }

    function runAnimations() {
        if (areaRef.current !== null) {
            if (isInViewport(areaRef.current) && areaRef.current.classList.contains(animations.hidden)) {
                areaRef.current.classList.replace(animations.hidden, animations.slideUp10Class);
            }
        }
    }

    useEffect(() => {
        setTimeout(runAnimations, 1000);
        window.addEventListener('scroll', runAnimations);
    });

    return (                    
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