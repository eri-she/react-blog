import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <h1 className="NavbarTitle">Blog</h1>
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
