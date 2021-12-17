import type { NextPage } from 'next'
import { useState } from 'react';

import IndexTextTop from '../components/indexComponents/indexTextTop';
import IndexBlink from '../components/indexComponents/indexBlink';
import IndexTextBottom from '../components/indexComponents/indexTextBottom';

import indexStyles from '../styles/index.module.scss';

/**
 * The page that is shown when the route is '/'
 * @returns The JSX component for the landing page
 */
const Index: NextPage = () => {
    // This state determines which part of the animation the user is seeing
    const [animationState, setAnimationState] = useState<number>(0);

    return (
        // Div for the landing page
        <div id={indexStyles.landing}>
            {/* Area for for the main animation */}
            <div id={indexStyles.landingTop}>
                <h1>&#62;&nbsp;</h1>
                {/* Main context for the animation followed by the blinking cursor */}
                <h1><IndexTextTop state={animationState} fireFunction={setAnimationState} /><IndexBlink state={animationState} /></h1>
            </div>
            {/* Bottom text that slides in after the first animation is done */}
            <IndexTextBottom state={animationState} />
        </div>
    );
};

export default Index;