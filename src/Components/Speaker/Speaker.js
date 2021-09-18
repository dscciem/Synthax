import React from 'react'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import Speaker_data from './Speaker.json'
import './Speaker.css'

function Speaker() {
    return (
        <div className="Speakers__container-body" id="Speakers">
            <div className="Speakers__heading">
                <h1 className="Speakers__Speakers">
                    Speakers
                    <hr />
                </h1>
            </div>
            <div className="Speakers__first-row">
                {Speaker_data.map((speaker_detail, index) => {
                    return (
                        <div className="Speakers__card">
                            <div className="Speakers__profile-pic-container">

                                <img
                                    src={speaker_detail.imgUrl}
                                    alt="Avatar"
                                    className="Speakers__profile-pic"
                                />
                            </div>
                            <div className="Speakers__container">
                                <h4>
                                    <b>{speaker_detail.name}</b>
                                </h4>
                                <p>{speaker_detail.position}</p>
                                <div className="Speakers__social-media">
                                    <a
                                        href={speaker_detail.linkedinUrl}
                                        alt="Dummy Linkedin"
                                    >
                                        <img
                                            src={linkedin}
                                            alt="Dummy Linkedin"
                                            className="Speakers__linkedin"
                                        ></img>
                                    </a>
                                    <a href={speaker_detail.githubUrl}>
                                        <img
                                            src={github}
                                            alt="Dummy Github"
                                            className="Speakers__github"
                                        ></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )

                })}




            </div>
        </div>
    )
}

export default Speaker
