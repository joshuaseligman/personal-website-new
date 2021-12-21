import type { NextPage } from 'next';
import { useEffect } from 'react';

import PageTitle from '../components/globalComponents/pageTitle';

import globalStyles from '../styles/global.module.scss';
import aboutStyles from '../styles/about.module.scss';
import animations from '../styles/animations.module.scss';

import { isInViewport } from '../utils/util';

/**
 * The page that is shown when the route is '/about'
 * @returns The JSX component for the about page
 */
const About: NextPage = () => {

    /**
     * Function that iterates through each section on the page and determines the state of each section
     */
    function manageAnimations(): void {
        // Get the list of section elements and iterate through each of them
        const sections:NodeListOf<HTMLDivElement> = document.querySelectorAll(`.${aboutStyles.section}`);
        sections.forEach((section:HTMLDivElement) => {
            // Run the animation if the section is visible
            if (isInViewport(section)) {
                runAnimations(section);
            } else {
                // Otherwise make the section hidden
                resetAnimations(section);
            }
        });
    }

    /**
     * Function that sets the animations
     * @param section The section of the page that is getting animated
     */
    function runAnimations(section:HTMLDivElement): void {
        // Get the children of the section
        const nodes:HTMLCollection = section.children;

        // If this is the first section
        if (nodes[1].tagName !== 'H2') {
            //Animations for the first section
            nodes[0].classList.replace(animations.hidden, animations.slideInFromLeftClass);
            nodes[1].classList.replace(animations.hidden, animations.slideInFromRightClass);
        } else {
            // Animations for the horizontal line and section heading
            nodes[0].classList.replace(animations.hidden, animations.fadeInClass);
            nodes[1].classList.replace(animations.hidden, animations.fadeInClass);

            // Get the further children of the div of the section
            const insideNodes:HTMLCollection = nodes[2].children;
            // Animations are dependent on the section
            switch (nodes[1].textContent) {
                case 'Sports':
                case 'Video Games':
                    // Animations are the same for the sports and video games sections because they have the same layout
                    insideNodes[0].classList.replace(animations.hidden, animations.slideInFromLeftClass);
                    insideNodes[1].classList.replace(animations.hidden, animations.fadeInClass);
                    insideNodes[2].classList.replace(animations.hidden, animations.slideInFromRightClass);
                    break;
                case 'Movies':
                    // Movies has a few subsections to deal with
                    for (let i:number = 0; i < insideNodes.length; i++) {
                        // Each subsection has the same animations as each other
                        insideNodes[i].children[0].classList.replace(animations.hidden, animations.slideInFromLeftClass);
                        insideNodes[i].children[1].classList.replace(animations.hidden, animations.slideInFromRightClass);
                    }
                    break;
            }
        }
    }

    /**
     * Removes the animation class from the inputted element's children
     * @param section The section to clear the animations from
     */
    function resetAnimations(section:Element) {
        // Get the children elements and iterate through them
        const children:HTMLCollection = section.children;
        for (let i:number = 0; i < children.length; i++) {
            // If there is a div, remove the animations from each of the child nodes inside the div
            if (children[i].tagName.toUpperCase() === 'DIV') {
                resetAnimations(children[i]);
            } else {
                // Remove the class names
                children[i].classList.forEach((className:string) => {
                    children[i].classList.remove(className);
                });
                // Add the hidden class
                children[i].classList.add(animations.hidden);
            }
        }
    }

    // DOM manipulation for the page
    useEffect(() => {
        // Begin by making all the sections hidden
        const sections:NodeListOf<HTMLDivElement> = document.querySelectorAll(`.${aboutStyles.section}`);
        sections.forEach((section) => {
            resetAnimations(section);
        });
        // Determine if each section should be initially rendered
        manageAnimations();
        // Check again whenever the user scrolls on the page
        window.addEventListener('scroll', manageAnimations);
    });

    return (
        // Div for the entire page
        <div className={globalStyles.page}>
            {/* Page title component with its animations */}
            <PageTitle title='About Me'></PageTitle>

            {/* Top section with the general about me */}
            <div id={aboutStyles.top} className={aboutStyles.section}>
                <p>
                    Hi, I am a sophomore at Marist College majoring in <em>Computer Science</em> with 
                    minors in <em>Data Science and Analytics</em>, <em>Information Technology</em>, and <em>Information Systems</em>.
                    I am heavily involved on campus with a variety of clubs and organizations such as <em>Marist College Computer Society</em>,&nbsp;
                    <em>Tour Guides (Marist Ambassadors)</em>, and <em>Hillel Club</em>. My professional interest is currently full-stack web development.
                    Scroll down to learn more about my personal interests and hobbies!
                </p>
                <img src='/me.jpg'></img>
            </div>

            {/* Section about my favorite sports teams */}
            <div className={aboutStyles.section}>
                <hr />
                <h2>Sports</h2>
                <div id={aboutStyles.sports}>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/2/25/NewYorkYankees_PrimaryLogo.svg/181px-NewYorkYankees_PrimaryLogo.svg.png'></img>
                    <p>
                        I love watching sports and am a lifelong <em>New York Yankees</em> fan and a massive <em>New York Rangers</em> fan. 
                        My current favorite players on each team are Aaron Judge on the Yankees and Mika Zibanejad on the Rangers.
                    </p>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/440px-New_York_Rangers.svg.png'></img>
                </div>
            </div>

            {/* Section about my favorite movies */}
            <div className={aboutStyles.section}>
                <hr />
                <h2>Movies</h2>
                <div id={aboutStyles.movies}>
                    <div id={aboutStyles.matrix}>
                        <p>
                            I love watching movies, but my favorite movie franchise of all time is undoubtedly <em>The Matrix</em>. From the intense action 
                            sequences to the endless array of philosophical ideas, all of these movies are timeless masterpieces and never get old each time I watch them.
                        </p>
                        <img src='https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'></img>
                    </div>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg'></img>
                        <p>
                            Staying on the theme of mind-bending science fiction movies, my favorite director of all-time is hands down Christopher Nolan. All of his movies are fantastic 
                            and, similar to <em>The Matrix</em>, require me to watch them many times to be able to disect each scene and every single line of dialogue.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section about my favorite video games */}
            <div className={aboutStyles.section}>
                <hr />
                <h2>Video Games</h2>
                <div id={aboutStyles.videoGames}>
                    <img src='https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg'></img>
                    <p>
                        My favorite video games have captivating stories that bring me on an adventure with the characters. When playing these games for the first time,
                        I find it hard to put down the controller because of how engaged I am. The <em>Uncharted</em> and <em>Last of Us</em> franchises do this to perfection,
                        which is why I love both of them.
                    </p>
                    <img src='https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg'></img>
                </div>
            </div>
        </div>
    );
};

export default About;