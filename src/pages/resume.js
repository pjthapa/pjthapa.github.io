import "../styles/resume.css"
import React from "react";
import {Link} from "react-router-dom";

function ResumePage(){
    return(
        <div className="resumepage">
            <header>
                <h1>PRASANNA J THAPA</h1>
                <div className="address">
                    Address: 6144 Springhill Ter Apt 202, Greenbelt MD
                    <div className="contact">
                        <div className="email">Email: thapapj19@gmail.com</div>
                        <div className="phone">Phone: 443-906-0233</div>
                    </div>
                </div>
            </header>
            <main>
                <div className="summary">
                    <h4>SUMMARY:</h4>
                    <p>Seeking a position as a Software Engineering where I can combine my Liberal Arts degree with my ongoing degree in Computer Science and Technology.</p>
                </div>
                <div className="education">
                    <h4>EDUCATION:</h4>
                    <div className="osu">
                        <b>Oregon State University, Cascades— Computer Sciencef</b>
                        -  December 2022
                    </div>
                    <br></br>
                    <div className="sjc">
                        <b>St Johns College, Annapolis— Bachelors in Liberal Arts</b>
                        -  May 2019
                    </div>
                </div>
                <div className="experience">
                    <h4>EXPERIENCE:</h4>
                    <b>Teaching Assistant- Oregon State University </b>
                    March 2021 - Present
                    <p>
                        <li>Currently working as a Teaching Assistant in a Data Structures class.</li>
                        <li>Duties involve holding office hours to help students with their problems, grading papers and homework as well helping the professor design curriculum and coursework.</li>
                    </p>
                    <b>Assistant to the Director of Laboratories - St Johns College </b>
                    May 2018- August 2018
                    <p>
                        <li>Researched early quantum mechanics experiments by reading arcane and obscure source materials in order to devise experiments to accompany textbooks.</li>
                        <li>Assisted in reproduction of these experiments and presented research and experiments to lab director and students.</li>
                    </p>
                    <b> Research Intern - AEPC, Nepal  </b>
                    May 2017- August 2017
                    <p>
                        <li>Received a $4,000 grant to research alternative energy in rural areas; worked with a team to study feasibility of solar power in rural Nepal and sustainability of such projects to assess impact on local communities.</li>
                        <li>Assisted on a project to draft Nepals carbon emission inventory report to the United Nations by writing about previously uncatalogued source of carbon emission</li>
                        <li>Investigated carbon emission from vehicles and devised methods on cataloguing emissions.</li>
                    </p>
                </div>
                <div className="skills">
                    <h4>SKILLS:</h4>
                    <ul>PYTHON AND OBJECT ORIENTED PROGRAMMING</ul>
                    <ul>JAVASCRIPT, HTML AND CSS</ul>
                    <ul>SQL AND RELATIONAL ALGEBRA</ul>

                </div>
            </main>
            <footer id="footer">
                Prasanna J Thapa pjthapa.com 4439060233
                <Link to="/">Back to Home</Link>
            </footer>
        </div>
    )
}

export default ResumePage