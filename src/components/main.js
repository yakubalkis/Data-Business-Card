import React from "react";
import mailIcon from '../img/mail-icon.png'
import lnkdnIcon from '../img/linkdn-icon.png'
export default function Main(){
    return(
        <main className="main">
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <h6>laurasmith.website</h6>
            <div className="links">
                <div className="Email">
                    <button><img src={mailIcon}/><span className="text">Email</span></button>
                </div>
                <div className="Linkedin">
                <button><img src={lnkdnIcon}/><span className="text">LinkedIn</span></button>
                </div>
            </div>
            <div className="info">
                <div className="about">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things
                         simple and automating daily tasks.
                         I try to keep up with security and best practices, 
                         and am always looking for new things to learn.</p>
                </div>
                <div className="interests">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </main>
    )
}