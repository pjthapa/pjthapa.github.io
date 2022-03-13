import React from "react";
import Navbar from "../components/navbar";
import {Link} from "react-router-dom";

function PortfolioPage(){
    return(
        <div className="portfoliopage">
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <div className="left decorations">
                    
                    <div className="random images">
                        <p>MY SOCIAL MEDIA</p>
                        <div className="social images">
                            <a href="https://www.reddit.com/user/DefiNiteASABot/">
                                <img src="https://img.icons8.com/plasticine/100/000000/bot.png"/></a>
                            <a href="https://twitter.com/ThapaPj">
                                <img src="https://img.icons8.com/office/100/000000/twitter.png"/>  </a>
                            <a href="https://github.com/pjthapa">
                                <img src="https://img.icons8.com/nolan/100/github.png"/> </a>
                        </div>
                        <div className="email">
                            <p>SEND ME AN EMAIL</p>
                            <div className="email icon">
                                <img src="https://img.icons8.com/color/100/000000/gmail--v2.png"/>
                            </div>
                        </div>        
                    </div>
                    <div className="horizontal bar"></div>
                </div>
                
                <div className="content">
                    <div className="description">
                        <h2>HI THERE!</h2>
                        <p>My name is Prasanna Thapa </p>
                        <p>& welcome to my website</p>
                    </div>
                    <div className="projects">
                        <div className="project one">Crypto Tip Bot</div>
                        <div className="project two">INAMORATA WEBSITE</div>
                        <div className="project three">CHESS GAME</div>
                        
                    </div>
                    <div className="projects">
                        <div className="project three">PORTFOLIO WEBSITE</div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer">
                    <div className="sources">
                        <a href="https://icons8.com/icon/tnnUFgHrPmR0/gmail-logo">SVG SOURCES</a>
                        <a href="https://visme.co/blog/website-color-schemes/">COLOR SCHEME</a>
                    </div>
                    <div className="copyright">
                        &copy; PRASANNA THAPA
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PortfolioPage