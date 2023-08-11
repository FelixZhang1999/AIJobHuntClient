import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>AIJobHunt</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;