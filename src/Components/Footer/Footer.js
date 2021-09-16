import React from 'react'
import backImg from './asset/splash.svg'
import logoImg from './asset/logo.svg'
import instaImg from './asset/insta.svg'
import linkedinImg from './asset/linkedin.svg'
import twitterImg from './asset/twitter.svg'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="back-img">
                <p className="copyright" >Copyright © 2021 GDSC-CIEM. All rights reserved.</p>
                <img src={backImg} alt="backImage" />
            </div>
            <div className="navbarLinks">
                <ul className="navlinks" style={{ listStyle: "none" }}>
                    <li>
                        <p> Home  </p>
                    </li>
                    <li>
                        <p> About  </p>
                    </li>
                    <li>
                        <p> Timeline  </p>
                    </li>
                </ul>
                <ul className="navlinks" style={{ listStyle: "none" }}>
                    <li>
                        <p> Team  </p>
                    </li>
                    <li>
                        <p> Projects  </p>
                    </li>
                    <li>
                        <p> Sponsers  </p>
                    </li>
                </ul>
                <ul className="navlinks" style={{ listStyle: "none"}}>
                    <li>
                        <p> Prizes  </p>
                    </li>
                    <li>
                        <p> FAQs  </p>
                    </li>
                </ul>
            </div>
            <div className="wrapperFooter">
                <div className="logo-img">
                    <img src={logoImg} width="250px" height="250px" alt="logo" />
                </div>
                <div className="socials">
                    <img src={twitterImg} style={{ marginRight: "2rem" }} width="40px" height="40px" alt=".." />
                    <img src={instaImg} style={{ marginRight: "2rem" }} width="40px" height="40px" alt=".." />
                    <img src={linkedinImg} width="40px" height="40px" alt=".." />
                </div>
            </div>
        </div>
    )
}

export default Footer
