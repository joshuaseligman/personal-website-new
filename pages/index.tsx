import type { NextPage } from 'next'
import { useState } from 'react';

import IndexTextTop from '../components/indexComponents/indexTextTop';
import IndexBlink from '../components/indexComponents/indexBlink';
import IndexTextBottom from '../components/indexComponents/indexTextBottom';

import indexStyles from '../styles/index.module.scss';

const Index: NextPage = () => {
    const [animationState, setAnimationState] = useState<number>(0);

    return (
        <div>
            <div id={indexStyles.landing}>
                <div id={indexStyles.landingTop}>
                    <h1>&#62;&nbsp;</h1>
                    <h1><IndexTextTop state={animationState} fireFunction={setAnimationState} /><IndexBlink state={animationState} /></h1>
                </div>
                <IndexTextBottom state={animationState} />
            </div>
            
        </div>
    )
}

export default Index;