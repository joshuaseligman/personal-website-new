import { useRef, useEffect } from 'react';

import indexStyles from '../../styles/index.module.scss';

interface Props {
    state: number;
};

const IndexBlink: React.FC<Props> = ({state}) => {
    const blinkRef = useRef<HTMLSpanElement>(null);
    const visibleRef = useRef<number>(1);

    useEffect((): void => {
        if (state === 0) {
            setTimeout(blink, 750);
        }
    });

    function blink(): void {
        if (blinkRef.current !== null) {
            blinkRef.current.style.display = (visibleRef.current === 1) ? 'none' : 'inline';
            visibleRef.current = (visibleRef.current === 1) ? 0 : 1;
        }
        setTimeout(blink, 750);
    }

    return (
        <span id={indexStyles.blink} ref={blinkRef}>|</span>
    );
};

export default IndexBlink;