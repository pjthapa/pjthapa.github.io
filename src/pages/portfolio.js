import React from "react";
import Navbar from "../components/navbar";
import {Link} from "react-router-dom";
import {portfolio, tipbot, inamorata, chess} from "../images/index"


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
                                <img src="https://img.icons8.com/plasticine/100/000000/bot.png" alt="Reddit"/></a>
                            <a href="https://twitter.com/ThapaPj">
                                <img src="https://img.icons8.com/office/100/000000/twitter.png" alt="twitter"/>  </a>
                            <a href="https://github.com/pjthapa">
                                <img src="https://img.icons8.com/nolan/100/github.png" alt="github"/> </a>
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
                        <h2 className="typewriter">HI THERE! MY NAME IS PRASANNA AND HERE ARE SOME OF MY PROJECTS </h2>
                    </div>
                    <div className="projects">
                        <div className="tipbot">
                            <p className="projectDiscription">CRYPTOCURRENCT TIPPING BOT</p>
                            <a href="https://github.com/pjthapa/DefiNitBot"><div className="project one">
                                <img src={tipbot.default} alt="tipbot"></img>
                            </div></a>
                        </div>
                        <div className="inamorata">
                            <p className="projectDiscription">DYNAMIC WEBSITE</p>
                            <a href="https://inamorata.netlify.app"><div className="project two">
                                <img src={inamorata.default} alt="Inamorat Website"></img>
                            </div></a>
                        </div>
                        <div className="chess">
                            <p className="projectDiscription">PYTHON CHESSGAME</p>
                            <a href="https://github.com/pjthapa/chessgame"><div className="project three">
                                <img src={chess.default} alt="chess pieces"></img>
                            </div></a>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="portfolio">
                            <p className="projectDiscription">PORTFOLIO WEBSITE</p>
                            <a href="https://github.com/pjthapa/pjthapa.github.io"><div className="project three">
                                <img src={portfolio.default} alt="Portfolio Website"></img>
                            </div></a>
                        </div>
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