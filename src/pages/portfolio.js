import React from "react";
import Navbar from "../components/navbar";
import {Link} from "react-router-dom";
import {portfolio, tipbot, inamorata, chess} from "../images/index"
import Card from "../components/projectCard";
import {description1, description2, description3} from "../asset/description"

function PortfolioPage(){
    return(
        <div className="portfoliopage">
            <header>
             
            </header>
            <section>
                
                <div className="content">

                    <div className="page one">
                        <div className="intro">
                        <h2 className="typewriter">HI THERE! MY NAME IS PRASANNA. SCROLL DOWN TO SEE MY PROJECTS AND FIND OUT MORE ABOUT ME </h2>
                        </div>
                    </div>
                    <div className="page two">
                        <h1> Projects</h1>
                        <Card image={tipbot.default} 
                        imageAlt="tipbot" 
                        link="https://github.com/pjthapa/DefiNitBot" 
                        description= {description1}>
                        </Card>

                        <Card image={inamorata.default}
                        imageAlt="dynamic website"
                        link="https://inamorata.netlify.app"
                        description={description2}>
                        </Card>


                        <Card image ={chess.default}
                        imageAlt="chess"
                        link="https://github.com/pjthapa/chessgame"
                        description={description3}>
                        </Card>
                    </div>
                    <div className="page three">
                        {/* <div className="portfolio">
                            <p className="projectDiscription">PORTFOLIO WEBSITE</p>
                            <a href="https://github.com/pjthapa/pjthapa.github.io"><div className="project three">
                                <img src={portfolio.default} alt="Portfolio Website"></img>
                            </div></a>
                        </div> */}
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