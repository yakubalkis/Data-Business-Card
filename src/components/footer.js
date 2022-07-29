import React from "react";
import twitter from '../img/icon-twitter.png'
import facebook from '../img/icon-facebook.png'
import instagram from '../img/icon-instagram.png'
import github from '../img/icon-github.png'

export default function footer(){
    return (
        <footer className="footer">
            <img className="twitter" src={twitter}></img>
            <img className="facebook" src={facebook}></img>
            <img className="instagram" src={instagram}></img>
            <img className="github" src={github}></img>
        </footer>
    )
}
