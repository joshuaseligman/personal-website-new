import { useEffect, useRef } from 'react';

import indexStyles from '../../styles/index.module.scss';
import animations from '../../styles/animations.module.scss';

// Interface to determine what gets passed into the component
interface Props {
    state: number;
};

/**
 * React component for the bottom text on the landing page
 * @param state The current state of the overall animation 
 * @returns The React component with its animation
 */
const IndexTextBottom: React.FC<Props> = ({state}) => {
    // Reference to the HTML element for the bottom text
    const bottomTextRef = useRef<HTMLHeadingElement>(null);

    useEffect((): void => {
        // Run this code only when the animation state is 1
        if (state === 1) {
            if (bottomTextRef.current !== null) {
                // Add "bottomAnimClass" to the element's class list to make it run the CSS animation
                if (!bottomTextRef.current.classList.contains(animations.slideInFromRightClass)) {
                    bottomTextRef.current.classList.add(animations.slideInFromRightClass);
                }
            }
        }
    });

    return (
        // The HTML element that is hooked up to the reference
        <h2 id={indexStyles.landingBottom} ref={bottomTextRef}>Feel free to navigate through the website to learn more about me!</h2>
    );
};

export default IndexTextBottom;