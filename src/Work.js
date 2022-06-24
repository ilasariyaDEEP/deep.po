import React, {useEffect} from 'react'
import "./Home.css";
import ssdp from "./ssdp.PNG";
import hcmdp from "./hcmdp.PNG";
import loginpg from "./loginpg.png";
import {
    Link
  } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Work = () => {
    useEffect(() => {
        AOS.init({ offset: 200, duration: 2000 });
      }, []);
    return (
        <>
        <div className="card mb-3 text-white col-11  mx-auto my-3 rounded-3" data-aos="fade-right">
        <img className="card-img-top my-3" src={ssdp} alt="ssdp"/>
        <div className="card-body">
            <h5 className="card-title">Food Court</h5>
            <h6 className="card-text">Description:</h6>
            <p className="card-text">A  responsive template website is created by me. It is a food court website that can be used for services like food ordering or catering. 
            </p>
            <h6 className="card-text">Technologies used for the devlopment:</h6>
            <ul className="tech-use">
                <br/>
            <p className="card-text">Frontend</p>
            <hr/>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <br/>
            {/* <p className="card-text">Backend</p>
            <hr/><li>Php</li><br/>
            <p className="card-text">DataBase</p>
            <hr/><li>MySQL</li> */}
            </ul>
            <br/><br/>
            <Link className="btn btn-outline-light btn-md" npm run to="/deep.po/deepfirstrespo">Learn more</Link>
            <p className="card-text"><small className="text-muted"></small></p>
        </div>
        </div>
        <div className="card mb-3 text-white col-11   mx-auto my-3 rounded-3" data-aos="fade-right">
        <img className="card-img-top my-3" src={hcmdp} alt="ssdp"/>
        <div className="card-body">
            <h5 className="card-title">Dance Academy</h5>
            <h6 className="card-text">Description:</h6>
            <p className="card-text">A responsive template website for a dance academy. The website's specifications include services like classical, hip hop, etc.</p>
            <p className="card-text">Technologies used for the devlopment.</p>
            <ul className="tech-use">
            <p className="card-text">Frontend</p>
            <hr/>
                <li>Pug</li>
                <li>Css</li>
                <li>Javascript</li>
            <p className="card-text">Backend</p>
            <hr/>
                <li>NodeJS</li>
                <li>ExpressJS</li>
            <p className="card-text">Database</p>
            <hr/>
                <li>MongoDB</li>
            </ul>
            <br/><br/>
            <Link className="btn btn-outline-light btn-md disabled" npm run to="/deep.po/work">Learn more</Link>
            <p className="card-text"><small className="text-muted">Currently not hosted yet</small></p>
            
        </div>
        </div>
        <div className="card mb-3 text-white col-11  mx-auto my-3 rounded-3" data-aos="fade-right">
        <img className="card-img-top my-3" src={loginpg} alt="ssdp"/>
        <div className="card-body">
            <h5 className="card-title">Transperent Login Page</h5>
            <h6 className="card-text">Description:</h6>
            <p className="card-text">A template created for a transparent login page.</p>
            <p className="card-text">Technologies used for the devlopment.</p>
            <ul className="tech-use">
            <p className="card-text">Frontend</p>
            <hr/>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
            </ul>
            <br/><br/>
            <Link className="btn btn-outline-light btn-md" npm run to="/deep.po/deepsecondrespo">Learn more</Link>
            <p className="card-text"><small className="text-muted"></small></p>
            
        </div>
        </div>
        </>
    )

}
