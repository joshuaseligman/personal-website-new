import { useEffect, useRef, useState } from 'react';

import globalStyles from '../../styles/global.module.scss';

// Interface that determines what gets passed into the component
interface Props {
    title: string;
}

/**
 * React component for the title of a page
 * @param title The title of the page to be shown 
 * @returns The component for the title with its animations
 */
const PageTitle: React.FC<Props> = ({title}) => {
    // State for determining which character the animation is on
    const [charState, setCharState] = useState<number>(0);

    // Reference for the main text
    const titleRef = useRef<HTMLSpanElement>(null);
    // Reference for the random text
    const randRef = useRef<HTMLSpanElement>(null);

    // Run this code every time charState gets updated
    useEffect((): void => {
        // If there are still more characters in the page title
        if (charState < title.length + 1) {
            // Start a new animation to show the next letter
            setTimeout(setRandomChars, 100, 1);
        }
    }, [charState]);

    /**
     * This function mixes up the characters in the random part of the text
     * @param x The iteration of the scrable to determine when to break out of the recursive loop
     */
    function setRandomChars(x: number): void {
        if (randRef.current !== null) {
            // Set the text of the random part to be a random string while keeping a consistent length in the overall string
            randRef.current.textContent = Math.random().toString(36).substring(2, title.length - charState + 2);
        }
        // Scramble the letters 5 times before getting the next letter from the title
        if (x < 5) {
            setTimeout(setRandomChars, 75, x + 1);
        } else {
            nextChar();
        }
    }

    /**
     * This function increments the charState variable and uses the updated value on the title text
     */
    function nextChar(): void {
        setCharState(charState + 1);
        if (titleRef.current !== null) {
            titleRef.current.textContent += title.charAt(charState);
        }
    }

    return (
        // The title of the pages is an h1
        <h1 className={globalStyles.title}>
            {/* Part of the title that has been shown */}
            <span ref={titleRef}></span>
            {/* Part of the title that is still scrambled */}
            <span ref={randRef}></span>
        </h1>
    );
};

export default PageTitle;