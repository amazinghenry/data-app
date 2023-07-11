import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <Link to="/" className="main-logo"><h1>AmazingStudent</h1></Link>
            <div className="link-group">
                <Link to="/" className="link-item">Home</Link>
                <Link to ="/students" className="link-item">Students</Link>
                <Link to ="/about" className="link-item">About</Link>
                <Link to ="/contact" className="link-item">Contact</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;