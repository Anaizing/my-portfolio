import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>About Anai </title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Anai Araya</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>An inquisitive Web Developer with a knack for creative problem solving, who strongly believes the internet should be readily accessible to everyone. Therefore understands the importance of accessibility and strives for compliance with WCAG 2.0.</p>
                    <p>Skilled in various front and back end languages with a strong focus on Javascript and its ecosystem, including Node.js, React, Express.js, Gatsby.js among others and has a firm grasp on package management, version control & bundling tools like Webpack, Grunt, Gulp.</p>
                    <p>Really enjoys working with components, modular architecture and microservices. When building reusable component libraries, enjoys the use of CSS in JS and CSS Modules for styling, although always open to discuss alternatives.</p>
                    <p>Has built web apps, reusable component libraries and js starter kits incorporating various testing frameworks & assertion/helper libraries to perform automated unit testing, interaction testing & snapshot testing using tools such as Mocha/Jest and Continuous Intergration tools like TravisCI/appVeyor. Understands how crucial, responsive design & cross device/browser support is today.</p>
                    <p>Self taught, driven and passionate about keeping up with the latest technologies and tech news. Hungry to grow further, continue learning and determined to succeed. An avid communicator whos friendly and charismatic nature shines through in her professional relationships and collaborations.</p>
                </div>
            </section>
        </div>

    </div>
)

export default Generic