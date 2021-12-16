import { useEffect, useRef } from 'react';

import indexStyles from '../../styles/index.module.scss';

interface Props {
    state: number;
};

const IndexTextBottom: React.FC<Props> = ({state}) => {

    const bottomTextRef = useRef<HTMLHeadingElement>(null);

    useEffect((): void => {
        if (state === 1) {
            if (bottomTextRef.current !== null) {
                if (!bottomTextRef.current.classList.contains(indexStyles.bottomAnimClass)) {
                    bottomTextRef.current.classList.add(indexStyles.bottomAnimClass);
                }
            }
        }
    });

    return (
        <h2 id={indexStyles.landingBottom} ref={bottomTextRef}>Feel free to navigate through the website to learn more about me!</h2>
    );
};

export default IndexTextBottom;