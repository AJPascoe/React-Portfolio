import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">AJP</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+447498969659</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>adamj.pascoe@protonmail.com</span>
                    </div>
                </div>
                <div className="right">
               
                </div>
            </div>
            
        </div>
    )
}
