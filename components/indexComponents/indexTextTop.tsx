import { useRef, useEffect } from 'react';

import indexStyles from '../../styles/index.module.scss';

/**
 * Interface to determine what gets inputted into the component
 */
interface Props {
    state: number;
    fireFunction: (input: number) => void;
};

/**
 * React component that controls the animation of the top text of the landing page
 * @param state The current state of the snimation
 * @param fireFunction The function that will get executed once the animation is complete
 * @returns The React component with all of the animations
 */
const IndexTextTop: React.FC<Props> = ({state, fireFunction}) => {

    // The reference for the text in the HTML
    const textRef = useRef<HTMLSpanElement>(null);
    
    // Arrays for the different parts of the text
    const phrase = 'Hello, my name is Josh. Welcome to'.split(' ');
    const lastPart = ['the Matrix.','my website :)']

    useEffect((): void => {
        // Run the code only if the state is 0
        if (state === 0) {
            // Start the actual code 0.5 seconds after the website is loaded
            setTimeout((): void => {
                setTimeout(addTextFirst, secondsToType(0, phrase[0].length), 0, 0);
            }, 500);
        }
    });

    /**
     * Function for the first part of the animation
     * @param wordIndex The index for the word that is being typed
     * @param charIndex The index for the character within the word that is being typed
     */
    function addTextFirst(wordIndex: number, charIndex: number): void {
        // Add the next letter to the word
        if (charIndex < phrase[wordIndex].length) {
            if (textRef.current !== null) {
                textRef.current.textContent += phrase[wordIndex].charAt(charIndex);
            }
        } else {
            // If the word is complete, add the space and move on to the next word and reset the counters
            if (textRef.current !== null) {
                textRef.current.textContent += ' ';
                charIndex = -1;
                wordIndex++;
            }
        }
        // If the first phrase is done, move on the the next part of the animation
        if (wordIndex >= phrase.length) {
            setTimeout(addTextSecond, secondsToType(0, 4), 0, 0, true);
        } else {
            // Otherwise, continue with the current part of the animation
            setTimeout(addTextFirst, secondsToType(charIndex, phrase[wordIndex].length), wordIndex, charIndex + 1);
        }
    }

    /**
     * Function for the second part of the animation
     * @param wordIndex The index of the word that is being typed
     * @param charIndex The index of the character that is being typed
     * @param isForwards Boolean that determines if the text is forwards or backwards
     * @returns 
     */
    function addTextSecond(wordIndex: number, charIndex: number, isForwards: boolean): void {
        // If we are moving forwards
        if (isForwards) {
            // Add the next character of the word being typed, if possible
            if (charIndex < lastPart[wordIndex].length) {
                if (textRef.current !== null) {
                    textRef.current.textContent += lastPart[wordIndex].charAt(charIndex);
                    charIndex++;
                }
            } else {
                // If the word is typed and is the first word
                if (wordIndex === 0) {
                    // Wait 0.75 seconds and being going backwords
                    isForwards = false;
                    setTimeout(() => {
                        setTimeout(addTextSecond, secondsToType(charIndex, 4), wordIndex, charIndex, isForwards);
                    }, 750);
                    return;
                } else {
                    // If the animation is complete, fire function passed in with a parameter of 1
                    fireFunction(1);
                }
            }
        } else {
            // If we are going backwards and there are still characters to erase
            if (charIndex > 0) {
                // Remove the next character and update the counter
                if (textRef.current !== null && textRef.current.textContent !== null) {
                    textRef.current.textContent = textRef.current.textContent.slice(0, -1);
                    charIndex--;
                }
            } else {
                // If we are done going backwards, update the word counter and switch directions
                wordIndex++;
                isForwards = true;
            }
        }
        // Add or remove the next character accordingly
        setTimeout(addTextSecond, secondsToType(charIndex, 4), wordIndex, charIndex, isForwards);
    }

    /**
     * Function that determines how long to wait for a character to type
     * @param x The position of the character in the word
     * @param mean The average word length
     * @returns The time to wait before typing the next character
     */
    function secondsToType(x: number, mean: number): number {
        // Create the real mean to be mean / 2 and the standard deviation to be mean / 3
        mean = (mean + 1) / 2;
        const stdDev = mean / 3;
        // If x is greater than the mean, get the remainder to keep the number within the appropriate range
        x = x % mean;

        // Get the position of the character in a normal function with a little variance
        // The middle of the word is typed quicker than the ends to make it appear more natural
        return (1 - (1 / (stdDev * Math.sqrt(2 * Math.PI))
            * Math.exp(- 1 / 2 * Math.pow((x - mean) / stdDev, 2))
            * Math.sin(Math.random() * Math.PI)) - 0.7) * 1000;
    }

    return (
        // The span element of the text hooked up to the reference
        <span id={indexStyles.text} ref={textRef}></span>
    )
}

export default IndexTextTop;