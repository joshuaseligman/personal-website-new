import { useEffect, useRef, useState } from 'react'; 

interface Props {
    title: string;
}

const PageTitle: React.FC<Props> = ({title}) => {
    const [charState, setCharState] = useState<number>(0);

    const titleRef = useRef<HTMLSpanElement>(null);
    const randRef = useRef<HTMLSpanElement>(null);

    useEffect((): void => {
        if (charState < title.length + 1) {
            setTimeout(setRandomChars, 100, 1);
        }
    }, [charState]);

    function setRandomChars(x: number): void {
        if (randRef.current !== null) {
            randRef.current.textContent = Math.random().toString(36).substring(2, title.length - charState + 2);
        }
        if (x < 8) {
            setTimeout(setRandomChars, 100, x + 1);
        } else {
            nextChar();
        }
    }

    function nextChar(): void {
        setCharState(charState + 1);
        if (titleRef.current !== null) {
            titleRef.current.textContent += title.charAt(charState);
        }
    }

    return (
        <h1>
            <span ref={titleRef}></span>
            <span ref={randRef}></span>
        </h1>
    );
};

export default PageTitle;