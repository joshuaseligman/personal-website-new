import { useRef, useEffect } from 'react';

import indexStyles from '../../styles/index.module.scss';

interface Props {
    state: number;
    fireFunction: (input: number) => void;
}

const IndexTextTop: React.FC<Props> = ({state, fireFunction}) => {

    const textRef = useRef<HTMLSpanElement>(null);
    const phrase = 'Hello, my name is Josh. Welcome to'.split(' ');
    const lastPart = ['the Matrix.','my website :)']

    useEffect((): void => {
        if (state === 0) {
            setTimeout((): void => {
                setTimeout(addTextFirst, secondsToType(0, phrase[0].length), 0, 0);
            }, 500);
        }
    });

    function addTextFirst(wordIndex: number, charIndex: number): void {    
        if (charIndex < phrase[wordIndex].length) {
            if (textRef.current !== null) {
                textRef.current.textContent += phrase[wordIndex].charAt(charIndex);
            }
        } else {
            if (textRef.current !== null) {
                textRef.current.textContent += ' ';
                charIndex = -1;
                wordIndex++;
            }
        }
        if (wordIndex >= phrase.length) {
            setTimeout(addTextSecond, secondsToType(0, 4), 0, 0, true);
        } else {
            setTimeout(addTextFirst, secondsToType(charIndex, phrase[wordIndex].length), wordIndex, charIndex + 1);
        }
    }

    function addTextSecond(wordIndex: number, charIndex: number, isForwards: boolean): void {
        if (isForwards) {
            if (charIndex < lastPart[wordIndex].length) {
                if (textRef.current !== null) {
                    textRef.current.textContent += lastPart[wordIndex].charAt(charIndex);
                    charIndex++;
                }
            } else {
                if (wordIndex === 0) {
                    setTimeout(() => {
                        setTimeout(addTextSecond, secondsToType(charIndex, 4), wordIndex, charIndex, isForwards);
                    }, 750);
                    isForwards = false;
                    return;
                } else {
                    fireFunction(1);
                }
            }
        } else {
            if (charIndex > 0) {
                if (textRef.current !== null && textRef.current.textContent !== null) {
                    textRef.current.textContent = textRef.current.textContent.slice(0, -1);
                    charIndex--;
                }
            } else {
                wordIndex++;
                isForwards = true;
            }
        }

        setTimeout(addTextSecond, secondsToType(charIndex, 4), wordIndex, charIndex, isForwards);
    }

    function secondsToType(x: number, mean: number): number {
        mean = (mean + 1) / 2;
        const stdDev = mean / 3;
        x = x % mean;
        return (1 - (1 / (stdDev * Math.sqrt(2 * Math.PI))
            * Math.exp(- 1 / 2 * Math.pow((x - mean) / stdDev, 2))
            * Math.sin(Math.random() * Math.PI)) - 0.7) * 1000;
    }

    return (
        <span id={indexStyles.text} ref={textRef}></span>
    )
}

export default IndexTextTop;