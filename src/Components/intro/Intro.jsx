import "./intro.scss";
import { init } from 'ityped';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay:1500,
            strings:["Pascoe"],
        })
        
        
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainr">
                    <img className="introImage" src="assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Adam<span ref={textRef}></span></h1>
                    <h3> Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down(1).png" alt="" srcset="" />
                    <div className = "downarrow">
                    <ArrowDownwardIcon/>
                    </div>
                </a>
            </div>

        
            
        </div>
    )
}
