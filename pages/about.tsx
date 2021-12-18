import type { NextPage } from 'next';

import PageTitle from '../components/globalComponents/pageTitle';

import globalStyles from '../styles/global.module.scss';
import aboutStyles from '../styles/about.module.scss';

/**
 * The page that is shown when the route is '/about'
 * @returns The JSX component for the about page
 */
const About: NextPage = () => {
    return (
        <div className={globalStyles.page}>
            <PageTitle title='About Me'></PageTitle>
            <div id={aboutStyles.top} className={aboutStyles.section}>
                <p>
                    Hi, I am a sophomore at Marist College majoring in <em>Computer Science</em> with 
                    minors in <em>Data Science</em>, <em>Information Technology</em>, and <em>Information Systems</em>.
                    I am heavily involved on campus with a variety of clubs and organizations such as <em>Marist College Computer Society</em>,&nbsp;
                    <em>Tour Guides (Marist Ambassadors)</em>, and <em>Hillel Club</em>. My professional interest is currently full-stack web development.
                    Scroll down to learn more about my personal interests and hobbies!
                </p>
                <img src='/me.jpg'></img>
            </div>
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
            <div className={aboutStyles.section}>
                <hr />
                <h2>Video Games</h2>
                <div id={aboutStyles.videoGames}>
                    <img src='https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg'></img>
                    <p>
                        My favorite video games have cpativating stories that bring me on an adventure with the characters. When playing these games for the first time,
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