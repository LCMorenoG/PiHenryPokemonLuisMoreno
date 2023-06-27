import {NavLink} from "react-router-dom"
import style from "./LandingPageModule.css"

const LandingPage = () => {

return(

<div className="landing-page">    
    <NavLink to={"/home"}>
        <button className="start-button">START</button>
    </NavLink>
</div>
)
};

export default LandingPage;