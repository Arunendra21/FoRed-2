import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/donor">Donor</Link> | 
      <Link to="/ngo">NGO</Link> | 
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
