import { Link } from "react-router-dom"
import style from "./NavBarModule.css"

const NavBar = () => {

    return (

        <div className="navbar-container">
            
            <nav>
                <button>
                    <Link to="/home">Home</Link>
                </button>

                <button>
                    <Link to="/form">Create</Link>
                </button>                
            </nav>

        </div>

    )
};

export default NavBar;