import logo from "../assets/img/logo.png";
import konecta from "../assets/img/konecta.png";
import "./navbar.css";

export function Navbar() {
  return (
    <header>
      <img src={konecta} alt='konecta-logo' className='logo logo-1' />
      <img src={logo} alt='logo' className='logo logo-2' />
    </header>
  );
}
