import { useRef, useEffect } from 'react';

import indexStyles from '../../styles/index.module.scss';

// Interface to determine what gets inputted into the component
interface Props {
    state: number;
};

/**
 * The React component for the blinking cursor on the landing page
 * @param state The current state of the animation
 * @returns The JSX component with the animation
 */
const IndexBlink: React.FC<Props> = ({state}) => {
    // Reference for the HTML element
    const blinkRef = useRef<HTMLSpanElement>(null);
    // Reference for if the cursor is visible 
    const visibleRef = useRef<number>(1);

    useEffect((): void => {
        // Run the code only if the animation state is 0
        if (state === 0) {
            setTimeout(blink, 750);
        }
    });

    /**
     * Function that toggles the visibility of the cursor
     */
    function blink(): void {
        if (blinkRef.current !== null) {
            // Toggle the visibility of the cursor
            blinkRef.current.style.display = (visibleRef.current === 1) ? 'none' : 'inline';
            // Update the reference for the visibility
            visibleRef.current = (visibleRef.current === 1) ? 0 : 1;
        }
        // Call the function again to continue an infinite loop of blinking
        setTimeout(blink, 750);
    }

    return (
        // The span element for the cursor that is hooked up to the reference
        <span id={indexStyles.blink} ref={blinkRef}>|</span>
    );
};

export default IndexBlink;