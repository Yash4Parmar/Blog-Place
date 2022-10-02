import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog Place</h1>
            <Link to="/">Home</Link>
            <Link to="/Create">Add New Blog</Link>

        </nav >
    );
}

export default Navbar;