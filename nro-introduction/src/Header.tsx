import { NavLink } from "react-router"

function Header(){
    return(
        <>
           <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/certificados">Certifications</NavLink>
                <NavLink to="/proyectos">Projects</NavLink>
            </nav>
        </>
    )
}

export default Header