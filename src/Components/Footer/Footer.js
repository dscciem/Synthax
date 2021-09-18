import React from 'react'
import logoImg from './asset/logo.svg'
import instaImg from './asset/insta.svg'
import linkedinImg from './asset/linkedin.svg'
import twitterImg from './asset/twitter.svg'

import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="left">
                <div className="navbarLinks">
                    <ul className="navlinks">
                        <li><p>Home</p></li>
                        <li><p>About</p></li>
                        <li><p>Timeline</p></li>
                    </ul>
                    <ul className="navlinks">
                        <li><p>Team</p></li>
                        <li><p>Projects</p></li>
                        <li><p>Sponsors</p></li>
                    </ul>
                    <ul className="navlinks">
                        <li><p>Prizes</p></li>
                        <li><p>FAQs</p></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <img className="logoImg" src={logoImg} alt="synthaxlogo" />
                <div className="socials">
                    <img src={twitterImg} style={{ marginRight: "2rem" }} width="40px" height="40px" alt=".." />
                    <img src={instaImg} style={{ marginRight: "2rem" }} width="40px" height="40px" alt=".." />
                    <img src={linkedinImg} width="40px" height="40px" alt=".." />
                </div>
            </div>
        </footer>
    )
}
export default Footer
