import "./nav.css";
import {IconContext} from 'react-icons';
import { FaHome } from "react-icons/fa";
import { GrProjects, GrContactInfo } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";



//AiOutlineHome
export default function Nav(){
    return (
<IconContext.Provider
	    value = {{ color:"red"}} 
	    >
   <nav className ="container floating-nav ">
	                    <ul>
	                        <li><a href="#home"><FaHome /></a></li>
	                        <li><a href="#skills"><GiSkills size = "1.5em"/></a></li>
	                         <li><a href="#projects"><GrProjects size = "1.5em" color= "#00f"/></a></li>

	                        <li><a href="#contact"><GrContactInfo size ="1.5em"  color ="#00f"/></a></li>

	                    </ul>
	                </nav>
</IconContext.Provider>
    )
}
